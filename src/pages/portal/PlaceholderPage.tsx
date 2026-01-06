import PortalShell from '@/components/portal/PortalShell';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <PortalShell>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft p-12 border border-purple-100 dark:border-gray-700 text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-6">
            <span className="material-icons-round text-primary text-4xl">construction</span>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-3">{title}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            This feature is coming soon. We're working hard to bring you the best experience.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-primary font-semibold">
            <span className="material-icons-round text-sm">schedule</span>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </PortalShell>
  );
};

// Export individual placeholder pages
export const PastDue = () => <PlaceholderPage title="Past Due Management" />;
export const Reports = () => <PlaceholderPage title="Reports & Analytics" />;
export const YieldManagement = () => <PlaceholderPage title="Yield Management" />;
export const Comms = () => <PlaceholderPage title="Communications" />;
export const Settings = () => <PlaceholderPage title="Settings" />;

export default PlaceholderPage;
