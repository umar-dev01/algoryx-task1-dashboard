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
        <button
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="p-2 rounded-lg hover:bg-brand/10 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-muted" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-muted" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1" role="navigation">
        {navigationItems.map((item) => (
          <motion.a
            key={item.label}
            href="#"
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
              ${item.active
                ? 'bg-brand/10 text-brand'
                : 'text-ink hover:bg-brand/5'
              }
              ${isCollapsed ? 'justify-center' : ''}
            `}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium"
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
