import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, DollarSign, AlertCircle, UserPlus, MessageSquare, Mail } from 'lucide-react';
import { formatRelativeTime } from '../../utils/formatters';

const iconMap = {
  order: ShoppingCart,
  payment: DollarSign,
  alert: AlertCircle,
  signup: UserPlus,
  ticket: MessageSquare,
  message: Mail,
};

export function NotificationPanel({ notifications, markAsRead, markAllAsRead, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 top-14 w-96 max-h-96 overflow-y-auto bg-white dark:bg-background-dark-card border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50"
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Notifications
          </h3>
          <button
            onClick={markAllAsRead}
            className="text-sm text-primary hover:text-primary-dark"
          >
            Mark all as read
          </button>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {notifications.map((notification) => {
            const Icon = iconMap[notification.type] || Mail;
            return (
              <div
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                  !notification.isRead ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    notification.type === 'order' ? 'bg-green-100 text-green-600' :
                    notification.type === 'payment' ? 'bg-blue-100 text-blue-600' :
                    notification.type === 'alert' ? 'bg-red-100 text-red-600' :
                    notification.type === 'signup' ? 'bg-purple-100 text-purple-600' :
                    notification.type === 'ticket' ? 'bg-orange-100 text-orange-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {formatRelativeTime(notification.timestamp)}
                    </p>
                  </div>
                  {!notification.isRead && (
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
