import { ReactNode } from 'react';
import PortalSidebar from './PortalSidebar';
import PortalHeader from './PortalHeader';

interface PortalShellProps {
  children: ReactNode;
}

const PortalShell = ({ children }: PortalShellProps) => {
  return (
    <div data-theme="portal" className="h-screen flex overflow-hidden bg-background text-foreground font-sans antialiased">
      <PortalSidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
        <PortalHeader />
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PortalShell;
