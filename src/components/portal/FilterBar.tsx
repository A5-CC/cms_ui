import { ReactNode } from 'react';

interface FilterBarProps {
  searchPlaceholder: string;
  filters: string[];
  showDateRange?: boolean;
  showApply?: boolean;
  showReset?: boolean;
  children?: ReactNode;
}

const FilterBar = ({ 
  searchPlaceholder, 
  filters, 
  showDateRange = false, 
  showApply = false,
  showReset = false 
}: FilterBarProps) => {
  return (
    <>
      <div className="relative flex-grow max-w-md min-w-[200px]">
        <input
          className="w-full pl-5 pr-12 py-2.5 rounded-full border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
          placeholder={searchPlaceholder}
          type="text"
        />
        <button className="absolute right-2 top-1.5 p-1.5 bg-primary rounded-full text-white hover:bg-primary-dark transition-colors">
          <span className="material-icons-round text-sm">search</span>
        </button>
      </div>
      
      <span className="text-sm font-bold text-gray-500 dark:text-gray-400">Filter by</span>
      
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-50 dark:bg-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
          >
            <span>{filter}</span>
            <span className="material-icons-round text-sm">expand_more</span>
          </button>
        ))}
      </div>

      {showDateRange && (
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full px-3 py-1.5 shadow-sm">
          <span className="material-icons-round text-gray-400 text-sm">calendar_today</span>
          <input
            className="w-24 text-sm border-none focus:ring-0 p-0 bg-transparent text-gray-600 dark:text-gray-300 placeholder-gray-400"
            placeholder="mm-dd-yyyy"
            type="text"
          />
          <span className="text-gray-300 dark:text-gray-500">—</span>
          <input
            className="w-24 text-sm border-none focus:ring-0 p-0 bg-transparent text-gray-600 dark:text-gray-300 placeholder-gray-400"
            placeholder="mm-dd-yyyy"
            type="text"
          />
        </div>
      )}

      {showApply && (
        <button className="px-6 py-2 bg-primary text-white rounded-full font-bold text-sm shadow-md hover:bg-primary-dark transition-colors">
          Apply
        </button>
      )}

      {showReset && (
        <>
          <div className="h-6 border-l border-gray-300 dark:border-gray-600 mx-2 hidden md:block"></div>
          <button className="px-6 py-2 bg-white dark:bg-surface-dark border border-purple-200 dark:border-gray-600 text-primary dark:text-purple-300 rounded-full font-bold text-sm shadow-sm hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors">
            Reset
          </button>
        </>
      )}
    </>
  );
};

export default FilterBar;
