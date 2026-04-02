/* ================================================================================
   MOCK DATA - TASKEARN PRO
   Sample data for demonstration and development
   Replace with actual Firebase data in production
   ================================================================================
*/

import type {
  User,
  Task,
  TaskSubmission,
  VipPlan,
  Withdrawal,
  Notification,
  LeaderboardEntry,
  FaqItem,
  PaymentInfo,
  DashboardStats,
  EarningHistory,
  Language
} from '../types';

// Current User Mock Data
export const mockCurrentUser: User = {
  uid: 'user_001',
  fullName: 'John Doe',
  username: 'johndoe2024',
  email: 'john.doe@email.com',
  phone: '+8801712345678',
  country: 'Bangladesh',
  profileImage: '',
  balance: 2450.50,
  totalEarnings: 15780.00,
  joinDate: '2024-01-15',
  isVip: false,
  badges: [
    { id: '1', name: 'Verified', type: 'verified' },
    { id: '2', name: 'Top Earner', type: 'top-earner' }
  ],
  role: 'user',
  bio: 'Dedicated earner since 2024',
  isActive: true,
  paymentDetails: {
    bkash: '01712345678',
    nagad: '01812345678'
  }
};

// Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  currentBalance: 2450.50,
  totalEarnings: 15780.00,
  completedTasks: 145,
  pendingSubmissions: 3,
  activeReferrals: 28,
  weeklyEarnings: 850.00
};

// Tasks Mock Data
export const mockTasks: Task[] = [
  {
    id: 'task_001',
    title: 'Follow Instagram Account',
    description: 'Follow the specified Instagram account and take a screenshot',
    instructions: '1. Click the link below\n2. Follow the account\n3. Take a screenshot showing you followed\n4. Upload the screenshot as proof',
    category: 'social-media',
    reward: 15,
    estimatedTime: '2 min',
    proofType: 'screenshot',
    isVipOnly: false,
    isActive: true,
    order: 1
  },
  {
    id: 'task_002',
    title: 'Complete Survey Form',
    description: 'Complete a short survey about mobile apps usage',
    instructions: '1. Click the survey link\n2. Answer all questions honestly\n3. Copy the completion code\n4. Submit the code as proof',
    category: 'survey',
    reward: 50,
    estimatedTime: '10 min',
    proofType: 'text',
    isVipOnly: false,
    isActive: true,
    order: 2
  },
  {
    id: 'task_003',
    title: 'Download & Review App',
    description: 'Download the app, use it for 5 minutes, and leave a review',
    instructions: '1. Download the app from Play Store\n2. Use it for at least 5 minutes\n3. Leave a 5-star review\n4. Screenshot your review',
    category: 'app-install',
    reward: 75,
    estimatedTime: '15 min',
    proofType: 'screenshot',
    isVipOnly: false,
    isActive: true,
    order: 3
  },
  {
    id: 'task_004',
    title: 'Share Promotional Post',
    description: 'Share our promotional post on your Facebook timeline',
    instructions: '1. Click the post link\n2. Share it publicly on your timeline\n3. Keep it for 24 hours\n4. Screenshot the shared post',
    category: 'promotion',
    reward: 25,
    estimatedTime: '5 min',
    proofType: 'screenshot',
    isVipOnly: false,
    isActive: true,
    order: 4
  },
  {
    id: 'task_005',
    title: 'CPA Offer Registration',
    description: 'Register for a free trial on the partner website',
    instructions: '1. Click the registration link\n2. Create a free account\n3. Verify your email\n4. Screenshot the confirmation',
    category: 'cpa',
    reward: 100,
    estimatedTime: '8 min',
    proofType: 'screenshot',
    isVipOnly: false,
    isActive: true,
    order: 5
  },
  {
    id: 'task_006',
    title: 'VIP: Premium Survey',
    description: 'Exclusive high-paying survey for VIP members',
    instructions: '1. Complete the premium survey\n2. Answer all questions\n3. Submit completion code',
    category: 'survey',
    reward: 200,
    estimatedTime: '20 min',
    proofType: 'text',
    isVipOnly: true,
    isActive: true,
    order: 6
  },
  {
    id: 'task_007',
    title: 'YouTube Video Watch',
    description: 'Watch the full video and comment',
    instructions: '1. Watch the entire video\n2. Like the video\n3. Leave a meaningful comment\n4. Screenshot your comment',
    category: 'social-media',
    reward: 30,
    estimatedTime: '7 min',
    proofType: 'screenshot',
    isVipOnly: false,
    isActive: true,
    order: 7
  },
  {
    id: 'task_008',
    title: 'VIP: App Testing',
    description: 'Test and review a new mobile application',
    instructions: '1. Download the beta app\n2. Test all features\n3. Write a detailed report\n4. Upload report document',
    category: 'app-install',
    reward: 300,
    estimatedTime: '30 min',
    proofType: 'file',
    isVipOnly: true,
    isActive: true,
    order: 8
  }
];

// Task Submissions
export const mockTaskSubmissions: TaskSubmission[] = [
  {
    id: 'sub_001',
    userId: 'user_001',
    taskId: 'task_001',
    proofUrl: 'https://example.com/proof1.jpg',
    status: 'approved',
    submittedAt: '2024-12-01T10:30:00Z',
    reviewedAt: '2024-12-01T12:00:00Z',
    canRetry: false
  },
  {
    id: 'sub_002',
    userId: 'user_001',
    taskId: 'task_002',
    proofText: 'COMP-12345-ABCDE',
    status: 'pending',
    submittedAt: '2024-12-02T14:15:00Z',
    canRetry: false
  },
  {
    id: 'sub_003',
    userId: 'user_001',
    taskId: 'task_003',
    proofUrl: 'https://example.com/proof3.jpg',
    status: 'rejected',
    submittedAt: '2024-12-02T09:00:00Z',
    reviewedAt: '2024-12-02T11:30:00Z',
    rejectionReason: 'Screenshot does not show the review clearly',
    canRetry: true
  }
];

// VIP Plans
export const mockVipPlans: VipPlan[] = [
  {
    id: 'vip_daily',
    name: 'Daily VIP',
    type: 'daily',
    price: 50,
    currency: 'BDT',
    features: [
      'Access to VIP tasks',
      '1.5x reward multiplier',
      'Priority support',
      'Valid for 24 hours'
    ],
    rewardMultiplier: 1.5
  },
  {
    id: 'vip_weekly',
    name: 'Weekly VIP',
    type: 'weekly',
    price: 250,
    currency: 'BDT',
    features: [
      'Access to VIP tasks',
      '2x reward multiplier',
      'Priority support',
      'Exclusive bonuses',
      'Valid for 7 days'
    ],
    rewardMultiplier: 2.0,
    isPopular: true
  },
  {
    id: 'vip_monthly',
    name: 'Monthly VIP',
    type: 'monthly',
    price: 800,
    currency: 'BDT',
    features: [
      'Access to all VIP tasks',
      '3x reward multiplier',
      'VIP-only support',
      'Exclusive bonuses',
      'Early access to new tasks',
      'Valid for 30 days'
    ],
    rewardMultiplier: 3.0
  }
];

// Withdrawal History
export const mockWithdrawals: Withdrawal[] = [
  {
    id: 'wd_001',
    userId: 'user_001',
    method: 'bkash',
    amount: 500,
    fee: 25,
    finalAmount: 475,
    accountDetails: '01712345678',
    status: 'approved',
    requestedAt: '2024-11-28T10:00:00Z',
    processedAt: '2024-11-28T14:30:00Z',
    transactionId: 'BK123456789'
  },
  {
    id: 'wd_002',
    userId: 'user_001',
    method: 'nagad',
    amount: 300,
    fee: 15,
    finalAmount: 285,
    accountDetails: '01812345678',
    status: 'pending',
    requestedAt: '2024-12-01T09:00:00Z'
  },
  {
    id: 'wd_003',
    userId: 'user_001',
    method: 'bkash',
    amount: 200,
    fee: 10,
    finalAmount: 190,
    accountDetails: '01712345678',
    status: 'rejected',
    requestedAt: '2024-11-25T15:00:00Z',
    processedAt: '2024-11-25T18:00:00Z'
  }
];

// Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif_001',
    userId: 'user_001',
    type: 'task-approved',
    title: 'Task Approved! 🎉',
    message: 'Your submission for "Follow Instagram Account" has been approved. 15 coins added!',
    isRead: false,
    createdAt: '2024-12-02T12:00:00Z',
    relatedId: 'task_001'
  },
  {
    id: 'notif_002',
    userId: 'user_001',
    type: 'withdrawal-approved',
    title: 'Withdrawal Processed ✅',
    message: 'Your withdrawal of 475 BDT to bKash (01712345678) has been processed.',
    isRead: false,
    createdAt: '2024-12-01T14:30:00Z',
    relatedId: 'wd_001'
  },
  {
    id: 'notif_003',
    userId: 'user_001',
    type: 'task-rejected',
    title: 'Task Needs Revision ⚠️',
    message: 'Your submission for "Download & Review App" was rejected. Please resubmit with a clearer screenshot.',
    isRead: true,
    createdAt: '2024-12-01T11:30:00Z',
    relatedId: 'task_003'
  },
  {
    id: 'notif_004',
    userId: 'user_001',
    type: 'referral-bonus',
    title: 'Referral Bonus! 💰',
    message: 'You earned 50 coins from your referral user_jane joining!',
    isRead: true,
    createdAt: '2024-11-30T09:00:00Z'
  },
  {
    id: 'notif_005',
    userId: 'user_001',
    type: 'system-announcement',
    title: 'New Tasks Available! 🚀',
    message: 'We have added 10 new high-paying tasks. Check them out now!',
    isRead: true,
    createdAt: '2024-11-29T08:00:00Z'
  },
  {
    id: 'notif_006',
    userId: 'user_001',
    type: 'admin-message',
    title: 'Welcome to TaskEarn Pro!',
    message: 'Thank you for joining. Complete your profile to get a 100 coin bonus!',
    isRead: true,
    createdAt: '2024-01-15T10:00:00Z'
  }
];

// Referral Leaderboard
export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, userId: 'user_top1', username: 'MasterReferrer', referralCount: 156, totalEarnings: 78000 },
  { rank: 2, userId: 'user_top2', username: 'EarnKing2024', referralCount: 142, totalEarnings: 71000 },
  { rank: 3, userId: 'user_top3', username: 'TaskChampion', referralCount: 128, totalEarnings: 64000 },
  { rank: 4, userId: 'user_top4', username: 'ProEarner', referralCount: 98, totalEarnings: 49000 },
  { rank: 5, userId: 'user_top5', username: 'ReferralPro', referralCount: 87, totalEarnings: 43500 },
  { rank: 6, userId: 'user_top6', username: 'MoneyMaker', referralCount: 76, totalEarnings: 38000 },
  { rank: 7, userId: 'user_top7', username: 'EarnMaster', referralCount: 65, totalEarnings: 32500 },
  { rank: 8, userId: 'user_top8', username: 'TaskHunter', referralCount: 54, totalEarnings: 27000 },
  { rank: 9, userId: 'user_001', username: 'johndoe2024', referralCount: 28, totalEarnings: 14000, isCurrentUser: true },
  { rank: 10, userId: 'user_top10', username: 'CoinCollector', referralCount: 25, totalEarnings: 12500 }
];

// Payment Methods
export const mockPaymentMethods: PaymentInfo[] = [
  {
    method: 'bkash',
    label: 'bKash',
    icon: '📱',
    type: 'local',
    accountInfo: '01712345678',
    instructions: 'Send payment to this bKash number and copy the Transaction ID'
  },
  {
    method: 'nagad',
    label: 'Nagad',
    icon: '💳',
    type: 'local',
    accountInfo: '01812345678',
    instructions: 'Send payment to this Nagad number and copy the Transaction ID'
  },
  {
    method: 'rocket',
    label: 'Rocket',
    icon: '🚀',
    type: 'local',
    accountInfo: '01912345678',
    instructions: 'Send payment to this Rocket number and copy the Transaction ID'
  },
  {
    method: 'usdt',
    label: 'USDT (BEP20)',
    icon: '💰',
    type: 'global',
    accountInfo: '0x1234567890abcdef1234567890abcdef12345678',
    instructions: 'Send USDT via BEP20 network only. Copy the TxHash after sending.'
  },
  {
    method: 'payoneer',
    label: 'Payoneer',
    icon: '🌐',
    type: 'global',
    accountInfo: 'payments@taskearnpro.com',
    instructions: 'Send payment to this Payoneer email and copy the Transaction ID'
  }
];

// FAQ Items
export const mockFaqItems: FaqItem[] = [
  {
    id: 'faq_1',
    question: 'How do I start earning?',
    answer: 'Simply complete the available tasks in your dashboard. Each task has clear instructions. Submit proof of completion and wait for approval. Once approved, coins will be added to your balance.',
    category: 'general'
  },
  {
    id: 'faq_2',
    question: 'What is the minimum withdrawal amount?',
    answer: 'The minimum withdrawal amount is 200 coins for local payments (bKash, Nagad, Rocket) and 500 coins for international payments (USDT, Payoneer).',
    category: 'withdrawal'
  },
  {
    id: 'faq_3',
    question: 'How long does withdrawal take?',
    answer: 'Withdrawals are typically processed within 24-48 hours. You will receive a notification once your withdrawal is processed.',
    category: 'withdrawal'
  },
  {
    id: 'faq_4',
    question: 'What are VIP benefits?',
    answer: 'VIP members get access to exclusive high-paying tasks, reward multipliers (up to 3x), priority support, and exclusive bonuses.',
    category: 'vip'
  },
  {
    id: 'faq_5',
    question: 'How does the referral program work?',
    answer: 'Share your unique referral code with friends. When they sign up and complete their first task, you earn a bonus. The more referrals, the more you earn!',
    category: 'referral'
  },
  {
    id: 'faq_6',
    question: 'Why was my task submission rejected?',
    answer: 'Tasks may be rejected if the proof is unclear, incomplete, or does not follow the instructions. You can retry rejected tasks once with better proof.',
    category: 'tasks'
  },
  {
    id: 'faq_7',
    question: 'Is my account secure?',
    answer: 'Yes! We use industry-standard security measures including encrypted connections and secure authentication. Never share your password with anyone.',
    category: 'security'
  },
  {
    id: 'faq_8',
    question: 'How do I contact support?',
    answer: 'You can reach us via the Support section in your dashboard, through our Telegram group, or by emailing support@taskearnpro.com.',
    category: 'support'
  }
];

// Earning History for Charts
export const mockEarningHistory: EarningHistory[] = [
  { date: '2024-11-26', amount: 150, type: 'task' },
  { date: '2024-11-27', amount: 200, type: 'task' },
  { date: '2024-11-27', amount: 50, type: 'referral' },
  { date: '2024-11-28', amount: 175, type: 'task' },
  { date: '2024-11-29', amount: 100, type: 'task' },
  { date: '2024-11-29', amount: 100, type: 'bonus' },
  { date: '2024-11-30', amount: 225, type: 'task' },
  { date: '2024-12-01', amount: 180, type: 'task' },
  { date: '2024-12-01', amount: 75, type: 'referral' },
  { date: '2024-12-02', amount: 150, type: 'task' }
];

// Supported Languages
export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' }
];

// Countries List
export const countries: string[] = [
  'Bangladesh',
  'India',
  'Pakistan',
  'Indonesia',
  'Philippines',
  'Nigeria',
  'Kenya',
  'Egypt',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Spain',
  'Brazil',
  'Mexico',
  'Other'
];
