import { Search, Bell, Menu } from 'lucide-react';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../ui/Input';
import { ThemeToggle } from '../dashboard/ThemeToggle';
import { NotificationPanel } from '../dashboard/NotificationPanel';
import { useNotifications } from '../../hooks/useNotifications';
import { useClickOutside } from '../../hooks/useClickOutside';
import { buttonBubbleVariants, badgePopVariants } from '../../utils/motion';

export function TopNavigation({ isCollapsed, onMenuClick }) {
  const {
    notifications,
    unreadCount,
    isPanelOpen,
    markAsRead,
    markAllAsRead,
    togglePanel,
    closePanel,
  } = useNotifications();
  
  const notificationRef = useRef(null);
  useClickOutside(notificationRef, closePanel);

  return (
    <header
      className={`
        fixed top-0 right-0 h-16 z-40
        bg-surface
        border-b border-line
        transition-all duration-300
        ${isCollapsed ? 'left-0 lg:left-20' : 'left-0 lg:left-64'}
      `}
    >
      <div className="h-full px-4 flex items-center justify-between gap-4">
        <motion.button
          onClick={onMenuClick}
          variants={buttonBubbleVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Toggle menu"
          style={{ boxShadow: 'var(--shadow-bubble)' }}
          className="lg:hidden p-2.5 rounded-full hover:bg-brand/10"
        >
          <Menu className="w-5 h-5 text-muted" />
        </motion.button>

        <div className="hidden sm:block flex-1 max-w-md">
          <Input
            placeholder="Search..."
            icon={<Search className="w-4 h-4" />}
            fullWidth
          />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <div className="relative" ref={notificationRef}>
            <motion.button
              onClick={togglePanel}
              variants={buttonBubbleVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label={`Notifications. ${unreadCount} unread`}
              style={{ boxShadow: 'var(--shadow-bubble)' }}
              className="relative p-2.5 rounded-full hover:bg-brand/10 transition-colors hover:shadow-[--shadow-bubble-hover] active:shadow-[--shadow-bubble-press]"
            >
              <Bell className="w-5 h-5 text-muted" />
              <AnimatePresence>
                {unreadCount > 0 && (
                  <motion.span
                    key="badge"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={badgePopVariants}
                    className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-surface"
                  >
                    {unreadCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <NotificationPanel
              notifications={notifications}
              markAsRead={markAsRead}
              markAllAsRead={markAllAsRead}
              isOpen={isPanelOpen}
              onClose={closePanel}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
