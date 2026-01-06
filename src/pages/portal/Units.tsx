import PortalShell from '@/components/portal/PortalShell';
import PortalPageTemplate from '@/components/portal/PortalPageTemplate';
import FilterBar from '@/components/portal/FilterBar';
import ActionButtons from '@/components/portal/ActionButtons';
import DataTable from '@/components/portal/DataTable';
import StatusPill from '@/components/portal/StatusPill';

const unitsData = [
  { id: '101', floor: 1, size: '5x10', type: 'Standard', price: 89, status: 'occupied', tenant: 'John Doe', lastAction: 'Payment received\n2 days ago' },
  { id: '102', floor: 1, size: '10x10', type: 'Climate', price: 145, status: 'vacant', tenant: null, lastAction: 'Cleaned\nYesterday' },
  { id: '103', floor: 1, size: '10x20', type: 'Standard', price: 210, status: 'maintenance', tenant: null, lastAction: 'Lock replaced\n3 days ago' },
  { id: '104', floor: 1, size: '5x5', type: 'Standard', price: 55, status: 'reserved', tenant: 'Sarah M.', lastAction: 'Reserved\nToday' },
  { id: '201', floor: 2, size: '10x15', type: 'Climate', price: 175, status: 'occupied', tenant: 'Mike Ross', lastAction: 'Overlock removed\n1 day ago' },
];

const Units = () => {
  return (
    <PortalShell>
      <PortalPageTemplate
        title="Units Management"
        headerActions={
          <>
            <button className="px-5 py-2.5 rounded-full border border-purple-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 font-semibold text-sm transition-all shadow-sm">
              Unit Groups
            </button>
            <button className="px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-purple-300/50 dark:shadow-purple-900/50 hover:opacity-90 transition-all">
              Add New Unit
            </button>
          </>
        }
        filterBar={
          <FilterBar
            searchPlaceholder="Search Units"
            filters={['Status', 'Size', 'Floor', 'Price Range']}
            showReset
          />
        }
        tableActions={<ActionButtons showColumns showPrint showExport />}
        footerContent={
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">Showing 5 of 342 Units</span>
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
            { header: 'Unit #' },
            { header: 'Size', sortable: true },
            { header: 'Type' },
            { header: 'Standard Price', sortable: true },
            { header: 'Status' },
            { header: 'Tenant' },
            { header: 'Last Action' },
          ]}
        >
          {unitsData.map((unit, index) => (
            <tr key={unit.id} className={`hover:bg-purple-50/30 dark:hover:bg-gray-700/30 transition-colors ${index % 2 === 1 ? 'bg-purple-50/20 dark:bg-gray-800/20' : ''}`}>
              <td className="py-4 px-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-gray-700 flex items-center justify-center text-primary font-bold shadow-sm">
                    {unit.id}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800 dark:text-white text-sm">Unit {unit.id}</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">Floor {unit.floor}</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{unit.size}</span>
                  <span className="text-xs text-gray-400">sq ft</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${
                  unit.type === 'Climate'
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                }`}>
                  {unit.type}
                </span>
              </td>
              <td className="py-4 px-6">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">${unit.price.toFixed(2)}</span>
                  <span className="text-[10px] text-gray-400">/ month</span>
                </div>
              </td>
              <td className="py-4 px-6">
                {unit.status === 'occupied' && <StatusPill status="success" icon="check_circle">Occupied</StatusPill>}
                {unit.status === 'vacant' && <StatusPill status="info" icon="storefront">Vacant</StatusPill>}
                {unit.status === 'maintenance' && <StatusPill status="warning" icon="build">Maintenance</StatusPill>}
                {unit.status === 'reserved' && <StatusPill status="neutral" icon="schedule">Reserved</StatusPill>}
              </td>
              <td className="py-4 px-6">
                {unit.tenant ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">
                      {unit.tenant.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary cursor-pointer transition-colors">{unit.tenant}</span>
                  </div>
                ) : (
                  <span className="text-sm text-gray-400 italic">-</span>
                )}
              </td>
              <td className="py-4 px-6">
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-pre-line">{unit.lastAction}</span>
              </td>
            </tr>
          ))}
        </DataTable>
      </PortalPageTemplate>
    </PortalShell>
  );
};

export default Units;
