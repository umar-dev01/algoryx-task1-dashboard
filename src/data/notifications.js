export const notificationsData = [
  {
    id: '1',
    type: 'order',
    title: 'New Order Received',
    message: 'Order #ORD-2024-012 has been placed',
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(), // 5 min ago
    isRead: false,
  },
  {
    id: '2',
    type: 'payment',
    title: 'Payment Received',
    message: '$1,599.99 payment confirmed',
    timestamp: new Date(Date.now() - 30 * 60000).toISOString(), // 30 min ago
    isRead: false,
  },
  {
    id: '3',
    type: 'alert',
    title: 'System Alert',
    message: 'Server maintenance scheduled for tonight',
    timestamp: new Date(Date.now() - 2 * 3600000).toISOString(), // 2 hours ago
    isRead: true,
  },
  {
    id: '4',
    type: 'signup',
    title: 'New User Signup',
    message: 'Michael Chen just joined your platform',
    timestamp: new Date(Date.now() - 5 * 3600000).toISOString(), // 5 hours ago
    isRead: false,
  },
  {
    id: '5',
    type: 'ticket',
    title: 'Support Ticket',
    message: 'Ticket #5432 requires your attention',
    timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    isRead: true,
  },
  {
    id: '6',
    type: 'message',
    title: 'Team Message',
    message: 'Sarah left a comment on your dashboard design',
    timestamp: new Date(Date.now() - 2 * 86400000).toISOString(), // 2 days ago
    isRead: true,
  },
];
