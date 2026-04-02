/* ================================================================================
   TYPE DEFINITIONS - TASKEARN PRO
   Comprehensive TypeScript interfaces for the platform
   ================================================================================
*/

// User Types
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
  joinDate: string;
  isVip: boolean;
  vipPlan?: 'daily' | 'weekly' | 'monthly';
  vipExpiry?: string;
  referredBy?: string;
  badges: Badge[];
  role: UserRole;
  bio?: string;
  paymentDetails?: PaymentDetails;
  isActive: boolean;
}

export type UserRole = 'user' | 'moderator' | 'support' | 'admin';

export interface Badge {
  id: string;
  name: string;
  type: 'admin' | 'moderator' | 'support' | 'top-earner' | 'top-referrer' | 'verified' | 'custom';
  icon?: string;
  color?: string;
}

export interface PaymentDetails {
  bkash?: string;
  nagad?: string;
  rocket?: string;
  upaya?: string;
  payoneer?: string;
  usdt?: string;
}

// Task Types
export interface Task {
  id: string;
  title: string;
  description: string;
  instructions: string;
  category: TaskCategory;
  reward: number;
  estimatedTime: string;
  proofType: ProofType;
  isVipOnly: boolean;
  isActive: boolean;
  order: number;
}

export type TaskCategory = 
  | 'social-media' 
  | 'cpa' 
  | 'promotion' 
  | 'survey' 
  | 'app-install' 
  | 'others';

export type ProofType = 'screenshot' | 'text' | 'file';

export type TaskStatus = 
  | 'available' 
  | 'submitted' 
  | 'pending' 
  | 'approved' 
  | 'rejected' 
  | 'retry-available';

export interface TaskSubmission {
  id: string;
  userId: string;
  taskId: string;
  proofUrl?: string;
  proofText?: string;
  proofFile?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  rejectionReason?: string;
  canRetry: boolean;
}

// VIP Types
export interface VipPlan {
  id: string;
  name: string;
  type: 'daily' | 'weekly' | 'monthly';
  price: number;
  currency: string;
  features: string[];
  rewardMultiplier: number;
  isPopular?: boolean;
}

export interface VipSubscription {
  id: string;
  userId: string;
  plan: 'daily' | 'weekly' | 'monthly';
  paymentMethod: PaymentMethod;
  amount: number;
  transactionId: string;
  proofUrl?: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
  processedAt?: string;
  expiresAt?: string;
}

// Payment Types
export type PaymentMethod = 
  | 'bkash' 
  | 'nagad' 
  | 'rocket' 
  | 'upaya'
  | 'usdt' 
  | 'payoneer';

export interface PaymentInfo {
  method: PaymentMethod;
  label: string;
  icon: string;
  type: 'local' | 'global';
  accountInfo: string;
  instructions?: string;
}

// Withdrawal Types
export interface Withdrawal {
  id: string;
  userId: string;
  method: PaymentMethod;
  amount: number;
  fee: number;
  finalAmount: number;
  accountDetails: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
  processedAt?: string;
  processedBy?: string;
  transactionId?: string;
}

// Referral Types
export interface Referral {
  id: string;
  referrerId: string;
  referrerUsername: string;
  referredUserId: string;
  referredUsername: string;
  earnings: number;
  createdAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  referralCount: number;
  totalEarnings: number;
  isCurrentUser?: boolean;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  relatedId?: string;
}

export type NotificationType = 
  | 'task-approved'
  | 'task-rejected'
  | 'withdrawal-approved'
  | 'withdrawal-rejected'
  | 'vip-activated'
  | 'vip-rejected'
  | 'admin-message'
  | 'system-announcement'
  | 'referral-bonus';

// Support Types
export interface Complaint {
  id: string;
  userId: string;
  type: ComplaintType;
  subject: string;
  description: string;
  screenshotUrl?: string;
  targetUserId?: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdAt: string;
  resolvedAt?: string;
}

export type ComplaintType = 
  | 'payment-issue'
  | 'task-issue'
  | 'account-issue'
  | 'report-user'
  | 'bug-report'
  | 'suggestion'
  | 'other';

// FAQ Types
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Language Types
export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

// Dashboard Stats
export interface DashboardStats {
  currentBalance: number;
  totalEarnings: number;
  completedTasks: number;
  pendingSubmissions: number;
  activeReferrals: number;
  weeklyEarnings: number;
}

// Chart Data Types
export interface EarningHistory {
  date: string;
  amount: number;
  type: 'task' | 'referral' | 'bonus';
}

// Form States
export interface FormError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: FormError[];
}

// App State
export type AppSection = 
  | 'home'
  | 'vip'
  | 'tasks'
  | 'refer'
  | 'profile'
  | 'withdraw'
  | 'support'
  | 'notifications';

export type AuthScreen = 'login' | 'signup' | 'forgot-password';
