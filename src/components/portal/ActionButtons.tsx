interface ActionButtonsProps {
  showColumns?: boolean;
  showPrint?: boolean;
  showExport?: boolean;
  onPrint?: () => void;
  onExport?: () => void;
}

const ActionButtons = ({ 
  showColumns = false, 
  showPrint = true, 
  showExport = true,
  onPrint,
  onExport
}: ActionButtonsProps) => {
  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  const handleExport = () => {
    if (onExport) {
      onExport();
    } else {
      // Default CSV export behavior
      console.log('Export triggered');
    }
  };

  return (
    <>
      {showColumns && (
        <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-surface-dark border border-purple-100 dark:border-gray-700 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
          <span className="material-icons-round text-base">view_column</span>
          <span>Columns</span>
        </button>
      )}
      {showPrint && (
        <button 
          onClick={handlePrint}
          className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-surface-dark border border-purple-100 dark:border-gray-700 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
        >
          <span className="material-icons-round text-base">print</span>
          <span>Print</span>
        </button>
      )}
      {showExport && (
        <button 
          onClick={handleExport}
          className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-surface-dark border border-purple-100 dark:border-gray-700 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
        >
          <span className="material-icons-round text-base">file_download</span>
          <span>Export</span>
        </button>
      )}
    </>
  );
};

export default ActionButtons;
