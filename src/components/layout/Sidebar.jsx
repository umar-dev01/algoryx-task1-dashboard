import { motion } from 'framer-motion';
import { LayoutDashboard, ShoppingCart, Package, Users, BarChart3, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProfileCard } from '../dashboard/ProfileCard';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: ShoppingCart, label: 'Orders', active: false },
  { icon: Package, label: 'Products', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar({ isCollapsed, onToggleCollapse }) {
  return (
    <motion.aside
      animate={{
        width: isCollapsed ? 80 : 256,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className="hidden lg:flex flex-col bg-surface border-r border-line h-screen fixed left-0 top-0"
    >
      <div className="p-3 border-b border-line flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-brand">Algoryx</h1>
        )}
        <motion.button
          onClick={onToggleCollapse}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          style={{ boxShadow: 'var(--shadow-bubble)' }}
          className="p-2 rounded-full hover:bg-brand/10 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-muted" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-muted" />
          )}
        </motion.button>
      </div>

      <nav className="flex-1 p-3 space-y-2" role="navigation">
        {navigationItems.map((item) => (
          <motion.a
            key={item.label}
            href="#"
            whileHover={!item.active ? { x: 4 } : undefined}
            whileTap={{ scale: 0.98 }}
            className={`
              relative flex items-center gap-3 px-3 py-2.5 rounded-full transition-colors
              ${item.active
                ? ''
                : 'text-ink hover:bg-brand/5'
              }
              ${isCollapsed ? 'justify-center' : ''}
            `}
          >
            {item.active && (
              <motion.div
                layoutId="active-pill"
                style={{ 
                  boxShadow: 'var(--shadow-bubble-icon)',
                  background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)'
                }}
                className="absolute inset-0 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <item.icon className={`w-5 h-5 flex-shrink-0 relative z-10 ${item.active ? 'text-white' : ''}`} />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`text-sm font-medium relative z-10 ${item.active ? 'text-white' : ''}`}
              >
                {item.label}
              </motion.span>
            )}
          </motion.a>
        ))}
      </nav>

      <ProfileCard isCollapsed={isCollapsed} />
    </motion.aside>
  );
}
