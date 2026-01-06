import { ReactNode } from 'react';

interface PortalPageTemplateProps {
  title: string;
  headerActions?: ReactNode;
  filterBar?: ReactNode;
  tableActions?: ReactNode;
  children: ReactNode;
  footerContent?: ReactNode;
}

const PortalPageTemplate = ({
  title,
  headerActions,
  filterBar,
  tableActions,
  children,
  footerContent
}: PortalPageTemplateProps) => {
  return (
    <>
      {/* Title row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-4 md:mb-0">{title}</h2>
        {headerActions && (
          <div className="flex space-x-3">
            {headerActions}
          </div>
        )}
      </div>

      {/* Filter bar */}
      {filterBar && (
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-soft mb-6 flex flex-wrap gap-4 items-center">
          {filterBar}
        </div>
      )}

      {/* Table actions */}
      {tableActions && (
        <div className="flex justify-end space-x-3 mb-4">
          {tableActions}
        </div>
      )}

      {/* Main content */}
      {children}

      {/* Footer */}
      {footerContent && (
        <div className="mt-4">
          {footerContent}
        </div>
      )}
    </>
  );
};

export default PortalPageTemplate;
