import React, { useState } from 'react';
import ShipmentWizard from './components/ShipmentWizard';
import Dashboard from './components/Dashboard';
import TrackingDirectory from './components/TrackingDirectory';
import AuthGateway from './components/AuthGateway';
import { Globe, Plane, Package, LayoutDashboard, Menu, X, LogOut } from 'lucide-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('auth') === 'true');
  const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('user') || '');
  const [currentView, setCurrentView] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-navy-950 text-white flex flex-col shadow-2xl z-20 relative">
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
        
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-lg font-bold text-navy-900 flex items-center gap-2">
            {currentView === 'dashboard' && 'Operations Overview'}
            {currentView === 'new-shipment' && 'Shipment Procure Wizard'}
            {currentView === 'tracking' && 'Tracking Log'}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500 hidden md:block">
               {currentUser || 'Platform Demo'}
            </span>
            <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-white font-bold shadow-md">
              {currentUser ? currentUser.substring(0,2).toUpperCase() : 'ES'}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8 z-10 relative">
          <div className="max-w-5xl mx-auto">
            {currentView === 'dashboard' && <Dashboard setCurrentView={setCurrentView} />}
            {currentView === 'new-shipment' && <ShipmentWizard />}
            {currentView === 'tracking' && <TrackingDirectory />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
