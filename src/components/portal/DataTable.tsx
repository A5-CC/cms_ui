import { ReactNode } from 'react';

interface Column {
  header: string;
  sortable?: boolean;
}

interface DataTableProps {
  columns: Column[];
  children: ReactNode;
  minWidth?: string;
}

const DataTable = ({ columns, children, minWidth = '1000px' }: DataTableProps) => {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft overflow-hidden border border-purple-100 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full" style={{ minWidth }}>
          <thead>
            <tr className="bg-purple-50/50 dark:bg-gray-800/50 border-b border-purple-100 dark:border-gray-700 text-left">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="py-4 px-6 text-xs font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  {col.sortable ? (
                    <div className="flex items-center cursor-pointer hover:text-primary">
                      {col.header}
                      <span className="material-icons-round text-sm ml-1">unfold_more</span>
                    </div>
                  ) : (
                    col.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-50 dark:divide-gray-700">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
