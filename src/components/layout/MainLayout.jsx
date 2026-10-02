import { Sidebar } from './Sidebar';
import { MobileDrawer } from './MobileDrawer';
import { TopNavigation } from './TopNavigation';
import { useSidebar } from '../../hooks/useSidebar';

export function MainLayout({ children }) {
  const { isCollapsed, isMobileOpen, toggleCollapse, toggleMobile, closeMobile } = useSidebar();

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <Sidebar isCollapsed={isCollapsed} onToggleCollapse={toggleCollapse} />
      <MobileDrawer isOpen={isMobileOpen} onClose={closeMobile} />
      <TopNavigation
        isCollapsed={isCollapsed}
        onMenuClick={toggleMobile}
      />
      
      <main
        className={`
          pt-16 transition-all duration-300
          ${isCollapsed ? 'lg:pl-20' : 'lg:pl-64'}
        `}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
