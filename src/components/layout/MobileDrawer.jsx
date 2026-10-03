import { motion, AnimatePresence } from 'framer-motion';
import { X, LayoutDashboard, ShoppingCart, Package, Users, BarChart3, Settings } from 'lucide-react';
import { useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { ProfileCard } from '../dashboard/ProfileCard';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: ShoppingCart, label: 'Orders', active: false },
  { icon: Package, label: 'Products', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function MobileDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  useClickOutside(drawerRef, onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
          <motion.aside
            ref={drawerRef}
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-0 top-0 w-64 h-screen bg-surface z-50 flex flex-col lg:hidden"
          >
            <div className="p-4 border-b border-line flex items-center justify-between">
              <h1 className="text-xl font-bold text-brand">Algoryx</h1>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-brand/10 transition-colors"
              >
                <X className="w-5 h-5 text-muted" />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2" role="navigation">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${item.active
                      ? 'bg-brand/10 text-brand'
                      : 'text-ink hover:bg-brand/5'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            <ProfileCard isCollapsed={false} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
