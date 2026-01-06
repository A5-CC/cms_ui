import PortalShell from '@/components/portal/PortalShell';

const Dashboard = () => {
  return (
    <PortalShell>
      {/* Title row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-4 md:mb-0">Dashboard Overview</h2>
        <div className="flex space-x-3">
          <button className="px-5 py-2.5 rounded-full border border-purple-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 font-semibold text-sm transition-all shadow-sm">
            Refresh Data
          </button>
          <button className="px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-purple-300/50 dark:shadow-purple-900/50 hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-icons-round text-sm">add</span> New Entry
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Occupancy */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-soft border border-purple-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-50 dark:bg-gray-700 rounded-full group-hover:scale-110 transition-transform"></div>
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wide">Occupancy</p>
                <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-1">87%</h3>
              </div>
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-primary">
                <span className="material-icons-round">pie_chart</span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-green-500 font-bold flex items-center">
                <span className="material-icons-round text-sm mr-0.5">trending_up</span> +2.4%
              </span>
              <span className="text-gray-400 ml-2">vs last month</span>
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-soft border border-purple-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 dark:bg-gray-700 rounded-full group-hover:scale-110 transition-transform"></div>
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wide">Revenue</p>
                <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-1">$124k</h3>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                <span className="material-icons-round">attach_money</span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-green-500 font-bold flex items-center">
                <span className="material-icons-round text-sm mr-0.5">trending_up</span> +12%
              </span>
              <span className="text-gray-400 ml-2">vs last month</span>
            </div>
          </div>
        </div>

        {/* New Leads */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-soft border border-purple-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-pink-50 dark:bg-gray-700 rounded-full group-hover:scale-110 transition-transform"></div>
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wide">New Leads</p>
                <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-1">45</h3>
              </div>
              <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-500">
                <span className="material-icons-round">person_add</span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-red-500 font-bold flex items-center">
                <span className="material-icons-round text-sm mr-0.5">trending_down</span> -5%
              </span>
              <span className="text-gray-400 ml-2">vs last week</span>
            </div>
          </div>
        </div>

        {/* Move-Ins */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-soft border border-purple-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-50 dark:bg-gray-700 rounded-full group-hover:scale-110 transition-transform"></div>
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wide">Move-Ins</p>
                <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-1">12</h3>
              </div>
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-500">
                <span className="material-icons-round">local_shipping</span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-green-500 font-bold flex items-center">
                <span className="material-icons-round text-sm mr-0.5">trending_up</span> +3
              </span>
              <span className="text-gray-400 ml-2">scheduled today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft p-6 border border-purple-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-extrabold text-gray-800 dark:text-white">Recent Activity</h3>
              <button className="text-primary hover:text-primary-dark font-bold text-sm">View All</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-3 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <span className="material-icons-round text-sm">check_circle</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm">Unit 304 Moved In</h4>
                    <span className="text-xs text-gray-400">2 mins ago</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Sarah Jenkins completed the move-in process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-3 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <span className="material-icons-round text-sm">payment</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm">Payment Received</h4>
                    <span className="text-xs text-gray-400">1 hour ago</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$145.00 payment from Mike Ross for Unit 102.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-3 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0">
                  <span className="material-icons-round text-sm">warning</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm">Maintenance Request</h4>
                    <span className="text-xs text-gray-400">3 hours ago</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Light bulb replacement needed in Hallway B.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Occupancy Trends */}
          <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft p-6 border border-purple-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-extrabold text-gray-800 dark:text-white">Occupancy Trends</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 rounded-lg bg-purple-50 text-primary text-xs font-bold">Week</button>
                <button className="px-3 py-1 rounded-lg text-gray-400 hover:bg-gray-50 text-xs font-bold">Month</button>
              </div>
            </div>
            <div className="h-64 w-full bg-gradient-to-b from-purple-50/50 to-white dark:from-gray-800/50 dark:to-gray-800 rounded-2xl flex items-end justify-between px-4 pb-4 gap-2 border border-dashed border-purple-100 dark:border-gray-700 relative overflow-hidden">
              <div className="w-full bg-purple-200/50 rounded-t-lg h-[40%] hover:bg-primary transition-colors duration-300"></div>
              <div className="w-full bg-purple-200/50 rounded-t-lg h-[65%] hover:bg-primary transition-colors duration-300"></div>
              <div className="w-full bg-purple-200/50 rounded-t-lg h-[50%] hover:bg-primary transition-colors duration-300"></div>
              <div className="w-full bg-purple-200/50 rounded-t-lg h-[75%] hover:bg-primary transition-colors duration-300"></div>
              <div className="w-full bg-purple-200/50 rounded-t-lg h-[60%] hover:bg-primary transition-colors duration-300"></div>
              <div className="w-full bg-purple-200/50 rounded-t-lg h-[85%] hover:bg-primary transition-colors duration-300"></div>
              <div className="w-full bg-purple-200/50 rounded-t-lg h-[70%] hover:bg-primary transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-purple-300/30 text-6xl font-black rotate-12 select-none">CHART</span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Tasks */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft p-6 border border-purple-100 dark:border-gray-700 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-extrabold text-gray-800 dark:text-white">Daily Tasks</h3>
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-primary">
                <span className="material-icons-round text-sm">assignment</span>
              </div>
            </div>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all cursor-pointer group">
                <input defaultChecked className="form-checkbox h-5 w-5 text-primary rounded-md border-gray-300 focus:ring-primary transition duration-150 ease-in-out" type="checkbox" />
                <span className="text-sm font-semibold text-gray-500 line-through decoration-primary decoration-2">Morning Walkthrough</span>
              </label>
              <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all cursor-pointer group">
                <input className="form-checkbox h-5 w-5 text-primary rounded-md border-gray-300 focus:ring-primary transition duration-150 ease-in-out" type="checkbox" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Process Overlocks</span>
              </label>
              <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all cursor-pointer group">
                <input className="form-checkbox h-5 w-5 text-primary rounded-md border-gray-300 focus:ring-primary transition duration-150 ease-in-out" type="checkbox" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Call Late Payments (5)</span>
              </label>
              <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all cursor-pointer group">
                <input className="form-checkbox h-5 w-5 text-primary rounded-md border-gray-300 focus:ring-primary transition duration-150 ease-in-out" type="checkbox" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Clean Unit 204</span>
              </label>
            </div>

            {/* Pro Tip Card */}
            <div className="mt-6 bg-primary rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full"></div>
              <p className="text-xs font-bold text-purple-200 uppercase tracking-wide mb-1">Pro Tip</p>
              <p className="text-sm text-white font-medium">Review yield management rates every Friday!</p>
            </div>
          </div>
        </div>
      </div>
    </PortalShell>
  );
};

export default Dashboard;
