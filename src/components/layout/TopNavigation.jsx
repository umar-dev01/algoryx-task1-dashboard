import { Search, Bell, Menu } from 'lucide-react';
import { useRef } from 'react';
import { Input } from '../ui/Input';
import { ThemeToggle } from '../dashboard/ThemeToggle';
import { NotificationPanel } from '../dashboard/NotificationPanel';
import { useNotifications } from '../../hooks/useNotifications';
import { useClickOutside } from '../../hooks/useClickOutside';

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
        <button
          onClick={onMenuClick}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg hover:bg-brand/10"
        >
          <Menu className="w-5 h-5 text-muted" />
        </button>

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
            <button
              onClick={togglePanel}
              aria-label={`Notifications. ${unreadCount} unread`}
              className="relative p-2 rounded-lg hover:bg-brand/10 transition-colors"
            >
              <Bell className="w-5 h-5 text-muted" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
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
