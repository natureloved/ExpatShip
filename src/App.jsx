import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGateway from './components/AuthGateway';
import DashboardPortal from './components/DashboardPortal';
import { supabase } from './lib/supabase';

// Public SEO Endpoints
import PublicLayout from './pages/PublicLayout';
import Landing from './pages/Landing';
import Countries from './pages/Countries';
import Services from './pages/Services';
import CustomsGuide from './pages/CustomsGuide';
import Faq from './pages/Faq';
import Blog from './pages/Blog';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // Check session on mount
    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
        setCurrentUser(session.user.user_metadata?.full_name || session.user.email);
      }
      setAuthLoading(false);
    };

    initAuth();

    // Listen for auth events (Sign In, Google OAuth, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setIsAuthenticated(true);
        setCurrentUser(session.user.user_metadata?.full_name || session.user.email);
      } else {
        setIsAuthenticated(false);
        setCurrentUser('');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-navy-950 flex flex-col justify-center items-center">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-navy-300 mt-4 tracking-widest uppercase text-sm font-bold">Initializing Encrypted Session...</p>
      </div>
    );
  }

  return (
    <Routes>
       {/* Public Marketing Layer */}
       <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/customs-guide" element={<CustomsGuide />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
       </Route>

       {/* Auth Gateway */}
       <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <AuthGateway />} />

       {/* Private Dashboard Container */}
       <Route path="/dashboard/*" element={
          isAuthenticated ? <DashboardPortal currentUser={currentUser} handleLogout={handleLogout} /> : <Navigate to="/login" />
       } />
       
       <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
