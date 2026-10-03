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
        className="absolute right-0 top-14 w-96 max-h-96 overflow-y-auto bg-surface border border-line rounded-lg shadow-xl z-50"
      >
        <div className="p-4 border-b border-line flex items-center justify-between">
          <h3 className="font-semibold text-ink">
            Notifications
          </h3>
          <button
            onClick={markAllAsRead}
            className="text-sm text-brand hover:text-brand/90"
          >
            Mark all as read
          </button>
        </div>

        <div className="divide-y divide-line">
          {notifications.map((notification) => {
            const Icon = iconMap[notification.type] || Mail;
            return (
              <div
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={`p-4 cursor-pointer hover:bg-brand/5 transition-colors ${
                  !notification.isRead ? 'bg-brand/10' : ''
                }`}
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    notification.type === 'order' ? 'bg-green-100 text-green-600' :
                    notification.type === 'payment' ? 'bg-blue-100 text-blue-600' :
                    notification.type === 'alert' ? 'bg-red-100 text-red-600' :
                    notification.type === 'signup' ? 'bg-purple-100 text-purple-600' :
                    notification.type === 'ticket' ? 'bg-orange-100 text-orange-600' :
                    'bg-brand/10 text-brand'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted mt-1">
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
