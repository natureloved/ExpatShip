import React, { useState } from 'react';
import ShipmentWizard from './components/ShipmentWizard';
import Dashboard from './components/Dashboard';
import TrackingDirectory from './components/TrackingDirectory';
import AuthGateway from './components/AuthGateway';
import Settings from './components/Settings';
import { Globe, Plane, Package, LayoutDashboard, Menu, X, LogOut, Settings as SettingsIcon, Bell, Info } from 'lucide-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('auth') === 'true');
  const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('user') || '');
  const [currentView, setCurrentView] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItemClass = (isActive) => `w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors border ${isActive ? 'bg-navy-800/80 text-white border-navy-700' : 'text-navy-300 border-transparent hover:bg-navy-800/30'}`;

  const handleNav = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setCurrentUser('');
  };

  const handleLogin = (user) => {
    localStorage.setItem('auth', 'true');
    localStorage.setItem('user', user);
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  if (!isAuthenticated) {
    return <AuthGateway onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar - hidden when printing */}
      <aside className="print:hidden w-full md:w-64 bg-navy-950 text-white flex flex-col shadow-2xl z-20 relative">
        <div className="p-6 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xl font-bold tracking-wide">ExpatShip</span>
          </div>
          <button 
            className="md:hidden p-2 text-navy-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <nav className={`flex-1 px-4 py-6 flex-col space-y-2 ${mobileMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          <button 
            onClick={() => handleNav('dashboard')}
            className={navItemClass(currentView === 'dashboard')}
          >
            <LayoutDashboard className={`w-5 h-5 ${currentView === 'dashboard' ? 'text-blue-400' : ''}`} />
            Analytics Dashboard
          </button>
          <button 
            onClick={() => handleNav('new-shipment')}
            className={navItemClass(currentView === 'new-shipment')}
          >
            <Package className={`w-5 h-5 ${currentView === 'new-shipment' ? 'text-blue-400' : ''}`} />
            New Shipment
          </button>
          <button 
            onClick={() => handleNav('tracking')}
            className={navItemClass(currentView === 'tracking')}
          >
            <Plane className={`w-5 h-5 ${currentView === 'tracking' ? 'text-blue-400' : ''}`} />
            Tracking Directory
          </button>
          
          {/* Divider */}
          <div className="h-px bg-navy-800/50 my-2"></div>
          
          <button 
            onClick={() => handleNav('settings')}
            className={navItemClass(currentView === 'settings')}
          >
            <SettingsIcon className={`w-5 h-5 ${currentView === 'settings' ? 'text-blue-400' : ''}`} />
            API & Settings
          </button>

          {/* Spacer to push logout to bottom if we had more nav items, or just place it here */}
          <div className="pt-8 mt-auto">
             <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg font-medium transition-colors border border-transparent"
             >
                <LogOut className="w-5 h-5" />
                Sign Out
             </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none z-0" />
        
        <header className="print:hidden h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <h1 className="text-lg font-bold text-navy-900 flex items-center gap-2">
            {currentView === 'dashboard' && 'Operations Overview'}
            {currentView === 'new-shipment' && 'New Dispatch'}
            {currentView === 'tracking' && 'Tracking Log'}
            {currentView === 'settings' && 'Platform Mechanics'}
          </h1>
          <div className="flex items-center gap-6">
            
            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-slate-500 hover:text-navy-900 transition-colors rounded-full hover:bg-slate-100"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                   <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                      <span className="font-bold text-navy-900">Notifications</span>
                      <button className="text-xs text-blue-600 font-semibold hover:underline">Mark all as read</button>
                   </div>
                   <div className="max-h-64 overflow-y-auto">
                      <div className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors flex gap-3 cursor-pointer">
                         <div className="bg-green-100 p-2 rounded-full h-8 flex items-center justify-center text-green-600 shrink-0">
                            <Info className="w-4 h-4" />
                         </div>
                         <div>
                            <p className="text-sm font-medium text-slate-900">Shipment ES-INTL-8842 Cleared</p>
                            <p className="text-xs text-slate-500 mt-0.5">Asset successfully bypassed destination customs in Zone 3.</p>
                            <p className="text-xs text-slate-400 mt-1 font-mono">14 mins ago</p>
                         </div>
                      </div>
                      <div className="p-4 hover:bg-slate-50 transition-colors flex gap-3 cursor-pointer">
                         <div className="bg-blue-100 p-2 rounded-full h-8 flex items-center justify-center text-blue-600 shrink-0">
                            <Info className="w-4 h-4" />
                         </div>
                         <div>
                            <p className="text-sm font-medium text-slate-900">New Tariff Model Implemented</p>
                            <p className="text-xs text-slate-500 mt-0.5">Automated international duty rates have synced for North America.</p>
                            <p className="text-xs text-slate-400 mt-1 font-mono">2 hrs ago</p>
                         </div>
                      </div>
                   </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 border-l border-slate-200 pl-6 relative">
              <span className="text-sm font-medium text-slate-500 hidden md:block">
                 {currentUser || 'Platform Demo'}
              </span>
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-white font-bold shadow-md hover:ring-2 hover:ring-offset-2 hover:ring-navy-500 transition-all cursor-pointer"
              >
                {currentUser ? currentUser.substring(0,2).toUpperCase() : 'ES'}
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 top-12 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-slate-100 bg-slate-50">
                    <label className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Edit Profile Name</label>
                    <input 
                       type="text" 
                       value={currentUser} 
                       onChange={(e) => { 
                         setCurrentUser(e.target.value); 
                         localStorage.setItem('user', e.target.value); 
                       }}
                       className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-400 transition-shadow"
                       placeholder="Enter full name"
                    />
                    <p className="text-xs text-slate-500 mt-2 font-medium">User Profile</p>
                  </div>
                  <div className="p-2">
                     <button 
                       onClick={() => { setShowProfileMenu(false); handleLogout(); }} 
                       className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg font-bold transition-colors flex items-center gap-2"
                     >
                        <LogOut className="w-4 h-4" /> Sign Out
                     </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8 z-10 relative">
          <div className="max-w-5xl mx-auto">
            {currentView === 'dashboard' && <Dashboard setCurrentView={setCurrentView} />}
            {currentView === 'new-shipment' && <ShipmentWizard />}
            {currentView === 'tracking' && <TrackingDirectory />}
            {currentView === 'settings' && <Settings />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
