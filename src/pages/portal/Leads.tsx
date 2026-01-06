import PortalShell from '@/components/portal/PortalShell';
import PortalPageTemplate from '@/components/portal/PortalPageTemplate';
import FilterBar from '@/components/portal/FilterBar';
import ActionButtons from '@/components/portal/ActionButtons';
import DataTable from '@/components/portal/DataTable';
import StatusPill from '@/components/portal/StatusPill';

const leadsData = [
  { 
    source: 'Online Marketing Service - Swivl', 
    name: 'Abigail Evbuomwan', 
    phone: '(929) 219-9107', 
    email: 'abigailevbuomwan16@gmail.com', 
    desiredUnit: null, 
    desiredMoveIn: null, 
    followUp: 'Oct 18th at 12:00 AM', 
    dateCreated: 'Oct 18, 2025', 
    createdTime: 'created Friday at 2:15am',
    status: 'new'
  },
  { 
    source: 'Online Marketing Service - Sparefoot', 
    name: 'Lizette Hendez', 
    phone: '(929) 463-8959', 
    email: 'lizettemendez838@gmail.com', 
    desiredUnit: '9x10x8 at $169.99', 
    desiredUnitMonthly: '$169.99',
    reservedCode: '3221',
    desiredMoveIn: 'Dec 28th', 
    followUp: 'Dec 26th at 12:00 AM', 
    dateCreated: null,
    createdTime: 'created Friday at 2:15am',
    status: 'open',
    mobile: true
  },
  { 
    source: 'Online Marketing Service - Sparefoot', 
    name: 'Jamil Williams', 
    phone: '(929) 694-8886', 
    email: 'goldzim22@gmail.com', 
    desiredUnit: '8x58x8 at $69.99', 
    desiredUnitMonthly: '$69.99',
    reservedCode: '3420',
    desiredMoveIn: 'Dec 26th', 
    followUp: 'Dec 26th at 12:00 AM', 
    dateCreated: null,
    createdTime: 'created Friday at 12:33pm',
    status: 'open',
    mobile: true
  },
  { 
    source: 'Online Marketing Service - Sparefoot', 
    name: 'Eileen Daniels', 
    phone: '(646) 573-7711', 
    email: 'eileenDaniels@gmail.com', 
    desiredUnit: '8x10x8 at $157.99', 
    desiredUnitMonthly: '$157.99',
    reservedCode: '4103',
    desiredMoveIn: 'Jan 3rd, 2026', 
    followUp: 'Dec 29th at 12:00 AM', 
    dateCreated: null,
    createdTime: 'created Monday at 4:13pm',
    status: 'open',
    mobile: true
  },
  { 
    source: 'Online Marketing Service - Sparefoot', 
    name: 'Scott Geathers', 
    phone: '(917) 972-4821', 
    email: 'scottgeathers@yahoo.com', 
    desiredUnit: '5x55x8 at $49.99', 
    desiredUnitMonthly: '$49.99',
    reservedCode: '1406',
    desiredMoveIn: 'Dec 31st, 2025', 
    followUp: 'Dec 30th, 2025 at 12:00 AM', 
    dateCreated: null,
    createdTime: 'created Tuesday at 6:55pm',
    status: 'open',
    mobile: true
  },
];

const Leads = () => {
  return (
    <PortalShell>
      <PortalPageTemplate
        title="Leads Management"
        headerActions={
          <>
            <button className="px-5 py-2.5 rounded-full border border-purple-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 font-semibold text-sm transition-all shadow-sm">
              Leads and Reservations
            </button>
            <button className="px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-purple-300/50 dark:shadow-purple-900/50 hover:opacity-90 transition-all">
              Future Move-Ins
            </button>
          </>
        }
        filterBar={
          <FilterBar
            searchPlaceholder="Search Leads"
            filters={['Type', 'Source', 'Unit Size', 'Unit Price']}
            showDateRange
            showApply
          />
        }
        tableActions={<ActionButtons showPrint showExport />}
        footerContent={
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">Showing 5 of 128 results</span>
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
            { header: 'Source' },
            { header: 'Contact' },
            { header: 'Desired Unit' },
            { header: 'Desired Move-In', sortable: true },
            { header: 'Follow Up', sortable: true },
            { header: 'Date Created' },
          ]}
        >
          {leadsData.map((lead, index) => (
            <tr key={index} className={`hover:bg-purple-50/30 dark:hover:bg-gray-700/30 transition-colors ${index % 2 === 1 ? 'bg-purple-50/20 dark:bg-gray-800/20' : ''}`}>
              <td className="py-4 px-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-gray-700 rounded-lg text-primary">
                    <span className="material-icons-round text-sm">north_east</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 text-sm">{lead.source}</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="material-icons-round text-gray-400 text-sm">person</span>
                    <span className="font-bold text-gray-800 dark:text-white text-sm">{lead.name}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                    {lead.mobile ? (
                      <>
                        <div className="flex items-center space-x-1">
                          <span className="material-icons-round text-[10px]">chat</span>
                          <span>{lead.phone} - Mobile</span>
                        </div>
                        <div>{lead.email}</div>
                      </>
                    ) : (
                      <span>{lead.phone} - {lead.email}</span>
                    )}
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                {lead.desiredUnit ? (
                  <div className="flex flex-col space-y-1 text-sm">
                    <span className="font-bold text-gray-700 dark:text-gray-200">{lead.desiredUnit}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">Due monthly: {lead.desiredUnitMonthly}</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center text-xs font-bold text-gray-600 dark:text-gray-300">
                        <span className="material-icons-round text-xs mr-1">lock</span> Reserved
                      </div>
                      <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded text-[10px] font-bold border border-yellow-200 dark:border-yellow-800 flex items-center">
                        <span className="material-icons-round text-[10px] mr-0.5">confirmation_number</span> {lead.reservedCode}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">-</span>
                )}
              </td>
              <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300 font-medium">
                {lead.desiredMoveIn || '-'}
              </td>
              <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300 font-medium">{lead.followUp}</td>
              <td className="py-4 px-6">
                <div className="flex flex-col items-start space-y-1">
                  {lead.dateCreated ? (
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">{lead.dateCreated}</span>
                  ) : (
                    <StatusPill status="success" icon="code">Open</StatusPill>
                  )}
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">{lead.createdTime}</span>
                </div>
              </td>
            </tr>
          ))}
        </DataTable>
      </PortalPageTemplate>
    </PortalShell>
  );
};

export default Leads;
