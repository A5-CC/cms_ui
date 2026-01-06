import PortalShell from '@/components/portal/PortalShell';
import PortalPageTemplate from '@/components/portal/PortalPageTemplate';
import FilterBar from '@/components/portal/FilterBar';
import ActionButtons from '@/components/portal/ActionButtons';
import DataTable from '@/components/portal/DataTable';
import StatusPill from '@/components/portal/StatusPill';

const tenantsData = [
  { unit: 'A-101', name: 'Abigail Evbuomwan', phone: '(929) 219-9107', email: 'abigailevbuomwan16@gmail.com', accessCode: '55892', moveIn: 'Oct 18, 2021', balance: 0, status: 'current' },
  { unit: 'B-205', name: 'Lizette Hendez', phone: '(929) 463-8959', email: 'lizettemendez838@gmail.com', accessCode: '99281', moveIn: 'Jan 15, 2022', balance: 169.99, status: 'past-due', mobile: true },
  { unit: 'C-312', name: 'Jamil Williams', phone: '(929) 694-8886', email: 'goldzim22@gmail.com', accessCode: '11029', moveIn: 'Mar 01, 2023', balance: 0, status: 'current', mobile: true },
  { unit: 'A-055', name: 'Eileen Daniels', phone: '(646) 573-7711', email: 'eileenDaniels@gmail.com', accessCode: '38291', moveIn: 'May 10, 2023', balance: 0, status: 'current', mobile: true },
  { unit: 'D-401', name: 'Scott Geathers', phone: '(917) 972-4821', email: 'scottgeathers@yahoo.com', accessCode: '77312', moveIn: 'Aug 22, 2024', balance: 49.99, status: 'past-due', mobile: true },
];

const Tenants = () => {
  return (
    <PortalShell>
      <PortalPageTemplate
        title="Tenants Management"
        headerActions={
          <>
            <button className="px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-purple-300/50 dark:shadow-purple-900/50 hover:opacity-90 transition-all">
              Current Tenants
            </button>
            <button className="px-5 py-2.5 rounded-full border border-purple-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 font-semibold text-sm transition-all shadow-sm">
              Past Leases
            </button>
          </>
        }
        filterBar={
          <FilterBar
            searchPlaceholder="Search Tenants"
            filters={['Status', 'Unit Type', 'Balance', 'Floor']}
            showDateRange
            showApply
          />
        }
        tableActions={<ActionButtons showPrint showExport />}
        footerContent={
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">Showing 5 of 156 Tenants</span>
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
            { header: 'Unit' },
            { header: 'Tenant' },
            { header: 'Access Code' },
            { header: 'Move-In Date', sortable: true },
            { header: 'Balance', sortable: true },
            { header: 'Status' },
          ]}
        >
          {tenantsData.map((tenant, index) => (
            <tr key={tenant.unit} className={`hover:bg-purple-50/30 dark:hover:bg-gray-700/30 transition-colors ${index % 2 === 1 ? 'bg-purple-50/20 dark:bg-gray-800/20' : ''}`}>
              <td className="py-4 px-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-gray-700 rounded-lg text-primary">
                    <span className="material-icons-round text-sm">door_front</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 text-sm">Unit {tenant.unit}</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="material-icons-round text-gray-400 text-sm">person</span>
                    <span className="font-bold text-gray-800 dark:text-white text-sm">{tenant.name}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                    {tenant.mobile && (
                      <div className="flex items-center space-x-1">
                        <span className="material-icons-round text-[10px]">chat</span>
                        <span>{tenant.phone} - Mobile</span>
                      </div>
                    )}
                    {!tenant.mobile && <span>{tenant.phone} - {tenant.email}</span>}
                    {tenant.mobile && <div>{tenant.email}</div>}
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider">{tenant.accessCode}</td>
              <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300 font-medium">{tenant.moveIn}</td>
              <td className={`py-4 px-6 text-sm font-bold ${tenant.balance > 0 ? 'text-red-500 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                ${tenant.balance.toFixed(2)}
              </td>
              <td className="py-4 px-6">
                {tenant.status === 'current' && <StatusPill status="success" icon="check_circle">Current</StatusPill>}
                {tenant.status === 'past-due' && <StatusPill status="error" icon="warning">Past Due</StatusPill>}
              </td>
            </tr>
          ))}
        </DataTable>
      </PortalPageTemplate>
    </PortalShell>
  );
};

export default Tenants;
