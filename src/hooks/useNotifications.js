import { useState } from 'react';
import { notificationsData } from '../data/notifications';

/**
 * Manages notification state and read/unread status
 * @returns {Object} Notification state and actions
 */
export function useNotifications() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const togglePanel = () => setIsPanelOpen((prev) => !prev);
  const closePanel = () => setIsPanelOpen(false);

  return {
    notifications,
    unreadCount,
    isPanelOpen,
    markAsRead,
    markAllAsRead,
    togglePanel,
    closePanel,
  };
}
