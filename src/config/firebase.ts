/* ================================================================================
   FIREBASE CONFIGURATION - TASKEARN PRO
   ================================================================================
   
   IMPORTANT SECURITY NOTES:
   -------------------------
   1. Replace placeholder values with your actual Firebase configuration
   2. NEVER commit actual API keys to public repositories
   3. Use environment variables for production deployments
   4. Enable Firebase Security Rules before going live
   5. Frontend should NOT expose admin authentication logic
   6. All approval/rejection logic must be handled on backend/Cloud Functions
   7. Duplicate transaction ID checking should happen in database rules
   8. VIP unlock depends on approved subscription request (server-side)
   9. Rejected tasks should return to available state (server-side)
   10. Notifications should be tied to user UID
   11. Role-based restrictions must be enforced server-side
   
   REQUIRED FIREBASE SERVICES:
   ---------------------------
   - Firebase Authentication (Email/Password, Phone)
   - Cloud Firestore (Database)
   - Firebase Storage (File uploads)
   - Cloud Functions (Backend logic)
   - Firebase Cloud Messaging (Push notifications)
   
   ================================================================================
*/

// Firebase Configuration Object
// Replace these placeholder values with your actual Firebase project configuration
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

/* ================================================================================
   FIREBASE INITIALIZATION PLACEHOLDER
   ================================================================================
   
   Uncomment and use the following code when integrating Firebase:
   
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';
   import { getStorage } from 'firebase/storage';
   
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   
   // Initialize Services
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   export const storage = getStorage(app);
   
   ================================================================================
*/

/* ================================================================================
   FIRESTORE COLLECTIONS STRUCTURE
   ================================================================================
   
   /users/{userId}
     - uid: string
     - fullName: string
     - username: string (referral ID)
     - email: string
     - phone: string
     - country: string
     - profileImage: string (URL)
     - balance: number
     - totalEarnings: number
     - joinDate: timestamp
     - isVip: boolean
     - vipPlan: string | null
     - vipExpiry: timestamp | null
     - referredBy: string | null
     - badges: array
     - role: 'user' | 'moderator' | 'support' | 'admin'
     - paymentDetails: object
     - isActive: boolean
     - lastLogin: timestamp
   
   /tasks/{taskId}
     - title: string
     - description: string
     - instructions: string
     - category: string
     - reward: number
     - estimatedTime: string
     - proofType: 'screenshot' | 'text' | 'file'
     - isVipOnly: boolean
     - isActive: boolean
     - createdAt: timestamp
     - order: number
   
   /taskSubmissions/{submissionId}
     - userId: string
     - taskId: string
     - proofUrl: string | null
     - proofText: string | null
     - status: 'pending' | 'approved' | 'rejected'
     - submittedAt: timestamp
     - reviewedAt: timestamp | null
     - reviewedBy: string | null
     - rejectionReason: string | null
     - canRetry: boolean
   
   /withdrawals/{withdrawalId}
     - userId: string
     - method: string
     - amount: number
     - fee: number
     - finalAmount: number
     - accountDetails: string
     - status: 'pending' | 'approved' | 'rejected'
     - requestedAt: timestamp
     - processedAt: timestamp | null
     - processedBy: string | null
     - transactionId: string | null
   
   /vipSubscriptions/{subscriptionId}
     - userId: string
     - plan: 'daily' | 'weekly' | 'monthly'
     - paymentMethod: string
     - amount: number
     - transactionId: string
     - proofUrl: string | null
     - status: 'pending' | 'approved' | 'rejected'
     - requestedAt: timestamp
     - processedAt: timestamp | null
     - expiresAt: timestamp | null
   
   /notifications/{notificationId}
     - userId: string
     - type: string
     - title: string
     - message: string
     - isRead: boolean
     - createdAt: timestamp
     - relatedId: string | null
   
   /referrals/{referralId}
     - referrerId: string
     - referredUserId: string
     - earnings: number
     - createdAt: timestamp
   
   /complaints/{complaintId}
     - userId: string
     - type: string
     - subject: string
     - description: string
     - screenshotUrl: string | null
     - targetUserId: string | null
     - status: 'open' | 'in-progress' | 'resolved' | 'closed'
     - createdAt: timestamp
     - resolvedAt: timestamp | null
   
   ================================================================================
*/

/* ================================================================================
   FIREBASE SECURITY RULES TEMPLATE
   ================================================================================
   
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       
       // Helper Functions
       function isAuthenticated() {
         return request.auth != null;
       }
       
       function isOwner(userId) {
         return request.auth.uid == userId;
       }
       
       function isAdmin() {
         return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
       }
       
       function isModerator() {
         return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['admin', 'moderator'];
       }
       
       // Users Collection
       match /users/{userId} {
         allow read: if isAuthenticated() && (isOwner(userId) || isModerator());
         allow create: if isAuthenticated() && isOwner(userId);
         allow update: if isAuthenticated() && isOwner(userId) && 
           !request.resource.data.diff(resource.data).affectedKeys().hasAny(['role', 'isVip', 'balance', 'badges']);
       }
       
       // Tasks Collection (Read-only for users)
       match /tasks/{taskId} {
         allow read: if isAuthenticated();
         allow write: if isAdmin();
       }
       
       // Task Submissions
       match /taskSubmissions/{submissionId} {
         allow read: if isAuthenticated() && 
           (resource.data.userId == request.auth.uid || isModerator());
         allow create: if isAuthenticated() && 
           request.resource.data.userId == request.auth.uid;
         allow update: if isModerator();
       }
       
       // Withdrawals
       match /withdrawals/{withdrawalId} {
         allow read: if isAuthenticated() && 
           (resource.data.userId == request.auth.uid || isModerator());
         allow create: if isAuthenticated() && 
           request.resource.data.userId == request.auth.uid;
         allow update: if isAdmin();
       }
       
       // VIP Subscriptions
       match /vipSubscriptions/{subscriptionId} {
         allow read: if isAuthenticated() && 
           (resource.data.userId == request.auth.uid || isModerator());
         allow create: if isAuthenticated() && 
           request.resource.data.userId == request.auth.uid;
         allow update: if isAdmin();
       }
       
       // Notifications
       match /notifications/{notificationId} {
         allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
         allow update: if isAuthenticated() && resource.data.userId == request.auth.uid &&
           request.resource.data.diff(resource.data).affectedKeys().hasOnly(['isRead']);
       }
     }
   }
   
   ================================================================================
*/

// Export placeholder types for TypeScript
export interface User {
  uid: string;
  fullName: string;
  username: string;
  email: string;
  phone?: string;
  country: string;
  profileImage?: string;
  balance: number;
  totalEarnings: number;
  joinDate: Date;
  isVip: boolean;
  vipPlan?: string;
  vipExpiry?: Date;
  referredBy?: string;
  badges: string[];
  role: 'user' | 'moderator' | 'support' | 'admin';
  paymentDetails?: Record<string, string>;
  isActive: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  instructions: string;
  category: string;
  reward: number;
  estimatedTime: string;
  proofType: 'screenshot' | 'text' | 'file';
  isVipOnly: boolean;
  isActive: boolean;
}

export interface TaskSubmission {
  id: string;
  userId: string;
  taskId: string;
  proofUrl?: string;
  proofText?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
  canRetry: boolean;
}

export interface Withdrawal {
  id: string;
  userId: string;
  method: string;
  amount: number;
  fee: number;
  finalAmount: number;
  accountDetails: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: Date;
}

export interface VipSubscription {
  id: string;
  userId: string;
  plan: 'daily' | 'weekly' | 'monthly';
  paymentMethod: string;
  amount: number;
  transactionId: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

export interface Referral {
  id: string;
  referrerId: string;
  referredUserId: string;
  referredUsername: string;
  earnings: number;
  createdAt: Date;
}

export default firebaseConfig;
