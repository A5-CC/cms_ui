import PortalShell from '@/components/portal/PortalShell';
import PortalPageTemplate from '@/components/portal/PortalPageTemplate';
import FilterBar from '@/components/portal/FilterBar';
import ActionButtons from '@/components/portal/ActionButtons';
import DataTable from '@/components/portal/DataTable';
import StatusPill from '@/components/portal/StatusPill';

const billingData = [
  { invoice: 'INV-2025-001', tenant: 'Abigail Evbuomwan', phone: '(929) 219-9107', unit: '9x10x8 Unit', unitCode: '3221', period: 'Jan 1 - Jan 31, 2025', amount: 169.99, status: 'paid', statusDetail: 'Jan 2nd at 9:15am' },
  { invoice: 'INV-2025-002', tenant: 'Lizette Hendez', phone: '(929) 463-8959', unit: '5x10x8 Unit', unitCode: '104', period: 'Jan 1 - Jan 31, 2025', amount: 89.99, status: 'due', statusDetail: 'Due in 3 days' },
  { invoice: 'INV-2024-899', tenant: 'Jamil Williams', phone: '(929) 694-8886', unit: '10x20x8 Unit', unitCode: '405', period: 'Dec 1 - Dec 31, 2024', amount: 220.00, status: 'overdue', statusDetail: 'Late fee applied' },
  { invoice: 'INV-2025-003', tenant: 'Eileen Daniels', phone: '(646) 573-7711', unit: '8x10x8 Unit', unitCode: '4103', period: 'Jan 1 - Jan 31, 2025', amount: 157.99, status: 'paid', statusDetail: 'Auto-pay Jan 1st' },
  { invoice: 'INV-2025-004', tenant: 'Scott Geathers', phone: '(917) 972-4821', unit: '5x5x8 Unit', unitCode: '1406', period: 'Jan 1 - Jan 31, 2025', amount: 49.99, status: 'paid', statusDetail: 'Paid by check #201' },
];

const Billing = () => {
  return (
    <PortalShell>
      <PortalPageTemplate
        title="Billing Management"
        headerActions={
          <>
            <button className="px-5 py-2.5 rounded-full border border-purple-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 font-semibold text-sm transition-all shadow-sm">
              Invoices &amp; Charges
            </button>
            <button className="px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-purple-300/50 dark:shadow-purple-900/50 hover:opacity-90 transition-all">
              Process Payments
            </button>
          </>
        }
        filterBar={
          <FilterBar
            searchPlaceholder="Search Invoices or Tenants"
            filters={['Status', 'Payment Method', 'Amount']}
            showDateRange
            showApply
          />
        }
        tableActions={<ActionButtons showPrint showExport />}
        footerContent={
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">Showing 5 of 842 Invoices</span>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                <span className="material-icons-round text-sm">chevron_left</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                <span className="material-icons-round text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        }
      >
        <DataTable
          columns={[
            { header: 'Invoice #' },
            { header: 'Tenant' },
            { header: 'Unit & Details' },
            { header: 'Period', sortable: true },
            { header: 'Amount', sortable: true },
            { header: 'Status' },
          ]}
        >
          {billingData.map((bill, index) => (
            <tr key={bill.invoice} className={`hover:bg-purple-50/30 dark:hover:bg-gray-700/30 transition-colors ${index % 2 === 1 ? 'bg-purple-50/20 dark:bg-gray-800/20' : ''}`}>
              <td className="py-4 px-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-gray-700 rounded-lg text-primary">
                    <span className="material-icons-round text-sm">receipt_long</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 text-sm">{bill.invoice}</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="material-icons-round text-gray-400 text-sm">person</span>
                    <span className="font-bold text-gray-800 dark:text-white text-sm">{bill.tenant}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                    {bill.phone}
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex flex-col space-y-1 text-sm">
                  <span className="font-bold text-gray-700 dark:text-gray-200">{bill.unit}</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-[10px] font-bold border border-purple-200 dark:border-purple-800 flex items-center">
                      <span className="material-icons-round text-[10px] mr-0.5">vpn_key</span> {bill.unitCode}
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 font-medium">{bill.period}</td>
              <td className="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-200">${bill.amount.toFixed(2)}</td>
              <td className="py-4 px-6">
                <div className="flex flex-col items-start space-y-1">
                  {bill.status === 'paid' && <StatusPill status="success" icon="check_circle">Paid</StatusPill>}
                  {bill.status === 'due' && <StatusPill status="warning" icon="pending">Due</StatusPill>}
                  {bill.status === 'overdue' && <StatusPill status="error" icon="error">Overdue</StatusPill>}
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">{bill.statusDetail}</span>
                </div>
              </td>
            </tr>
          ))}
        </DataTable>
      </PortalPageTemplate>
    </PortalShell>
  );
};

export default Billing;
