import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div data-theme="marketing" className="bg-background text-foreground transition-colors duration-300 font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-background/80 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link className="font-script text-4xl text-gray-900 dark:text-white tracking-tight" to="/">facily</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" href="#how-it-works">How it works</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" href="#faci-call">faci-call</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" href="#why-switch">Why switch</a>
              <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" to="/login">Login</Link>
              <a className="bg-primary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105 shadow-lg" href="#">Request access</a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none">
                <span className="material-icons-round text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-orange/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent-pink/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-6">
            Run your facility on <br />
            <span className="italic text-gray-600 dark:text-gray-400">autopilot.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The AI-native operating system for self-storage. Replace legacy bloatware with an intelligent agent that manages rentals, payments, and customer service 24/7.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg shadow-xl hover:bg-gray-800 transition-all hover:-translate-y-1" href="#">
              Book a Demo
            </a>
            <a className="px-8 py-4 rounded-full font-medium text-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all bg-white/50 dark:bg-black/20 backdrop-blur-sm" href="#">
              View Interactive Tour
            </a>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="relative mt-20 max-w-6xl mx-auto px-4">
          <div className="relative h-[400px] md:h-[500px] w-full">
            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-white dark:bg-surface-dark p-2 rounded-full shadow-2xl border border-white/20 dark:border-gray-700">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center">
                  <span className="font-script text-white text-3xl">f</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* Unit Rented Card */}
            <div className="absolute top-10 left-4 md:left-20 lg:left-32 animate-float glass-card bg-white/80 dark:bg-surface-dark/80 p-4 rounded-2xl shadow-marketing-soft border border-gray-100 dark:border-gray-800 max-w-xs transform -rotate-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <span className="material-icons-round text-sm">check_circle</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Unit 104 Rented</p>
                  <p className="text-[10px] text-gray-500">Just now via Facily Web</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-full rounded-full"></div>
              </div>
            </div>

            {/* faci-call Card */}
            <div className="absolute bottom-10 right-4 md:right-20 lg:right-32 animate-float animation-delay-2000 glass-card bg-white/80 dark:bg-surface-dark/80 p-5 rounded-2xl shadow-marketing-soft border border-gray-100 dark:border-gray-800 max-w-xs transform rotate-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">faci-call active</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-5 bg-purple-500 rounded-full animate-pulse animation-delay-100"></div>
                  <div className="w-1 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">"I've updated your gate code, Mr. Henderson. It's now active."</p>
            </div>

            {/* Revenue Card */}
            <div className="absolute top-20 right-8 md:right-40 animate-float animation-delay-4000 glass-card bg-white/80 dark:bg-surface-dark/80 p-4 rounded-2xl shadow-marketing-soft border border-gray-100 dark:border-gray-800 max-w-[200px] transform rotate-6 hidden sm:block">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Monthly Revenue</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">$42,850</p>
              <p className="text-[10px] text-green-500 flex items-center mt-1">
                <span className="material-icons-round text-[12px] mr-1">trending_up</span> +12% vs last mo
              </p>
            </div>

            {/* Late Payment Card */}
            <div className="absolute bottom-20 left-8 md:left-40 animate-float animation-delay-1000 glass-card bg-white/80 dark:bg-surface-dark/80 p-4 rounded-2xl shadow-marketing-soft border border-gray-100 dark:border-gray-800 w-48 transform -rotate-2 hidden sm:block">
              <div className="flex items-center gap-3">
                <img
                  alt="Manager"
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-600"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                />
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Late Payment</p>
                  <p className="text-[10px] text-gray-500">Auto-resolved by AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trusted By Section */}
      <section className="py-10 border-y border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">Trusted by forward-thinking operators</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-2xl">inventory_2</span>
              <span className="font-bold text-lg">SafeStore</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-2xl">garage</span>
              <span className="font-bold text-lg">UrbanSpace</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-2xl">lock</span>
              <span className="font-bold text-lg">IronVault</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-2xl">warehouse</span>
              <span className="font-bold text-lg">MetroStorage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-2xl">key</span>
              <span className="font-bold text-lg">KeepSake</span>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Software Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6">
            Legacy software is <br className="hidden md:block" />
            the bottleneck.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
            Most FMS tools are glorified spreadsheets built in 2005. Facily is an AI-native platform designed to run operations, not just record them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-8 rounded-3xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-pink-500 text-2xl">bolt</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900 dark:text-white">Zero-Touch Rentals</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                From website visit to gate code generation, the entire lease process happens instantly without staff intervention.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-purple-500 text-2xl">record_voice_over</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900 dark:text-white">Human-Like AI</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Our agents answer phones, negotiate late fees, and upsell insurance with the nuance and empathy of your best manager.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-orange-500 text-2xl">insights</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900 dark:text-white">Dynamic Pricing</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Don't leave money on the table. Facily adjusts unit pricing daily based on local demand signals and competitor data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden" id="how-it-works">
        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-200 dark:border-gray-800 hidden md:block z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-semibold uppercase tracking-wide bg-white dark:bg-surface-dark text-gray-900 dark:text-white inline-block mb-4">The Workflow</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 dark:text-white">How Facily works</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">It connects every touchpoint of your facility.</p>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24 md:mb-32">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 relative">
              <div className="absolute top-0 right-0 md:-right-16 bg-white dark:bg-surface-dark border-2 border-indigo-100 dark:border-gray-700 w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-gray-900 dark:text-white shadow-sm z-20">1</div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-2 rounded-3xl w-full max-w-lg shadow-lg rotate-1 transition-transform hover:rotate-0">
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 h-full border border-indigo-100 dark:border-gray-700">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-8 w-20 bg-gray-100 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-100 dark:bg-gray-700 rounded-full animate-pulse ml-auto"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-24 bg-gray-50 dark:bg-gray-800 rounded-xl w-full p-3 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-gray-50 dark:bg-gray-800 rounded-xl w-full p-3 flex items-center space-x-3 opacity-60">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
              <h3 className="font-serif text-3xl font-medium mb-4 text-gray-900 dark:text-white">Import your portfolio.</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Connect your existing facility hardware in minutes. Facily integrates with leading gate systems, smart locks, and existing merchant accounts. No downtime required.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span className="material-icons-round text-green-500 text-sm">check</span> Works with Nokē &amp; PTI
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span className="material-icons-round text-green-500 text-sm">check</span> Instant data migration
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 - faci-call */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24 md:mb-32" id="faci-call">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-12 relative">
              <div className="absolute top-0 left-0 md:-left-16 bg-white dark:bg-surface-dark border-2 border-purple-100 dark:border-gray-700 w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-gray-900 dark:text-white shadow-sm z-20">2</div>
              <div className="bg-gradient-to-bl from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-2 rounded-3xl w-full max-w-lg shadow-lg -rotate-1 transition-transform hover:rotate-0">
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 h-full border border-purple-100 dark:border-gray-700 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <div className="flex items-start gap-4 mb-6 mt-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <span className="material-icons-round text-purple-600 dark:text-purple-400">smart_toy</span>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                      <p className="text-sm text-gray-800 dark:text-gray-200">Hi Sarah, I see your payment for unit 402 is due tomorrow. Would you like me to process that with the card on file?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="material-icons-round text-blue-600 dark:text-blue-400">person</span>
                    </div>
                    <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                      <p className="text-sm">Yes, please go ahead. Also, what's my gate code again?</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <span className="material-icons-round text-xs">check</span> Payment Processed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left">
              <h3 className="font-serif text-3xl font-medium mb-4 text-gray-900 dark:text-white">faci-call takes the lead.</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Never miss a lead. Our AI voice agent handles inbound calls, qualifies renters, and even collects past-due payments. It sounds human, acts professional, and never takes a sick day.
              </p>
              <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-lg border border-purple-100 dark:border-purple-800">
                <span className="material-icons-round text-purple-600 dark:text-purple-400">play_circle</span>
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Listen to sample call</span>
              </div>
            </div>
          </div>

          {/* Step 3 - Revenue */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 relative">
              <div className="absolute top-0 right-0 md:-right-16 bg-white dark:bg-surface-dark border-2 border-orange-100 dark:border-gray-700 w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-gray-900 dark:text-white shadow-sm z-20">3</div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-2 rounded-3xl w-full max-w-lg shadow-lg rotate-1 transition-transform hover:rotate-0">
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 h-full border border-orange-100 dark:border-gray-700 flex flex-col justify-between">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Total Revenue</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">$142,890</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-bold">+18.4%</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between space-x-2 h-32">
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t h-[40%]"></div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t h-[55%]"></div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t h-[45%]"></div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t h-[70%]"></div>
                    <div className="w-full bg-orange-400 rounded-t h-[90%] relative group">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Current Month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
              <h3 className="font-serif text-3xl font-medium mb-4 text-gray-900 dark:text-white">Watch revenue grow.</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Facily's algorithms constantly analyze your facility's performance against the market. It automatically adjusts marketing spend and unit pricing to maximize RevPAM (Revenue Per Available Meter).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-primary relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent-purple rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent-orange rounded-full blur-[100px] opacity-30"></div>
          <div className="relative z-10 px-8 py-20 md:py-24 text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-medium text-white mb-6">
              Ready to modernize?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join the operators switching to the first FMS built for the AI era. Stable, secure, and inevitably better.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105" href="#">
                Get Early Access
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="material-icons-round text-base">lock</span>
                <span>Secure Enterprise Migration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background" id="why-switch">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-medium text-gray-900 dark:text-white mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <button className="flex justify-between items-center w-full text-left focus:outline-none group">
                <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">Does Facily replace my current gate software?</span>
                <span className="material-icons-round text-gray-400 group-hover:text-purple-600">add</span>
              </button>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <button className="flex justify-between items-center w-full text-left focus:outline-none group">
                <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">How reliable is the AI voice agent?</span>
                <span className="material-icons-round text-gray-400 group-hover:text-purple-600">add</span>
              </button>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Extremely reliable. It's trained on millions of storage interactions. If it ever encounters a scenario it can't handle (less than 1% of calls), it seamlessly routes the call to your designated human backup.
              </p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <button className="flex justify-between items-center w-full text-left focus:outline-none group">
                <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">Is migration painful?</span>
                <span className="material-icons-round text-gray-400 group-hover:text-purple-600">add</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <a className="font-script text-3xl text-gray-900 dark:text-white tracking-tight" href="#">facily</a>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Networking the physical world with intelligent software.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a className="hover:text-purple-600 transition-colors" href="#">faci-call</a></li>
                <li><a className="hover:text-purple-600 transition-colors" href="#">Facility OS</a></li>
                <li><a className="hover:text-purple-600 transition-colors" href="#">Integrations</a></li>
                <li><a className="hover:text-purple-600 transition-colors" href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a className="hover:text-purple-600 transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-purple-600 transition-colors" href="#">Careers</a></li>
                <li><a className="hover:text-purple-600 transition-colors" href="#">Blog</a></li>
                <li><a className="hover:text-purple-600 transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Subscribe</h4>
              <p className="text-sm text-gray-500 mb-4">Get the latest updates on AI in real estate.</p>
              <div className="flex gap-2">
                <input className="bg-gray-50 dark:bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" placeholder="Email address" type="email" />
                <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg px-3 hover:opacity-90">
                  <span className="material-icons-round text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2024 Facily Inc. All rights reserved.</p>
            <div className="flex space-x-6 text-xs text-gray-400">
              <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Privacy Policy</a>
              <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
