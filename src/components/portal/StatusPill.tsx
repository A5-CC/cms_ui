interface StatusPillProps {
  status: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  icon?: string;
  children: React.ReactNode;
}

const statusStyles = {
  success: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800',
  warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
  error: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800',
  info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  neutral: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600',
};

const StatusPill = ({ status, icon, children }: StatusPillProps) => {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center w-fit space-x-1 ${statusStyles[status]}`}>
      {icon && <span className="material-icons-round text-xs">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default StatusPill;
