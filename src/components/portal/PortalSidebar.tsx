import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  icon: string;
  label: string;
  path: string;
  multiLine?: boolean;
}

const navItems: NavItem[] = [
  { icon: 'dashboard', label: 'DASH', path: '/portal/dash' },
  { icon: 'people_alt', label: 'LEADS', path: '/portal/leads' },
  { icon: 'folder_shared', label: 'TENANTS', path: '/portal/tenants' },
  { icon: 'grid_view', label: 'UNITS', path: '/portal/units' },
  { icon: 'payments', label: 'BILLING', path: '/portal/billing' },
  { icon: 'schedule', label: 'PAST DUE', path: '/portal/past-due' },
  { icon: 'analytics', label: 'REPORTS', path: '/portal/reports' },
  { icon: 'trending_up', label: 'YIELD\nMGMT', path: '/portal/yield-management', multiLine: true },
  { icon: 'chat_bubble', label: 'COMMS', path: '/portal/comms' },
  { icon: 'settings', label: 'SETTINGS', path: '/portal/settings' },
];

const PortalSidebar = () => {
  const location = useLocation();

  return (
    <nav className="w-24 flex-shrink-0 flex flex-col items-center py-6 bg-surface-light dark:bg-surface-dark border-r border-purple-100 dark:border-gray-700 z-20 h-full overflow-y-auto">
      <div className="mb-8 text-primary dark:text-primary-dark">
        <span className="material-icons-round text-4xl">inventory_2</span>
      </div>
      <div className="flex flex-col space-y-6 w-full px-2 text-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive
                  ? 'text-primary bg-purple-100 dark:bg-gray-800 rounded-2xl py-3 mx-2 shadow-sm'
                  : 'text-gray-400 hover:text-primary dark:hover:text-primary'
              }`}
            >
              <span className={`material-icons-round text-2xl ${!isActive ? 'group-hover:scale-110 transition-transform' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-bold tracking-wide ${item.multiLine ? 'leading-tight' : ''}`}>
                {item.multiLine ? (
                  <>
                    {item.label.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </>
                ) : (
                  item.label
                )}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default PortalSidebar;
