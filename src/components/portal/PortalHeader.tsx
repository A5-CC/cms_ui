import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const PortalHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-purple-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
        <h1 className="font-extrabold text-lg tracking-tight">MODSTORAGE - LONG ISLAND CITY</h1>
        <span className="text-gray-400 dark:text-gray-500">/</span>
        <span className="text-gray-500 dark:text-gray-400 font-semibold">Thu, Jan 1</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
          <span className="material-icons-round">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
        </button>
        <button 
          onClick={handleLogout}
          className="w-8 h-8 rounded-full bg-purple-200 dark:bg-purple-900 flex items-center justify-center text-purple-700 dark:text-purple-300 hover:opacity-80 transition-opacity"
          title="Logout"
        >
          <span className="material-icons-round text-sm">person</span>
        </button>
      </div>
    </header>
  );
};

export default PortalHeader;
