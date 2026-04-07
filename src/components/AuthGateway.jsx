import React, { useState } from 'react';
import { Globe, Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function AuthGateway({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    if (isSignUp && !name) return;
    
    setAuthMethod('email');
    setIsLoading(true);
    setTimeout(() => {
      onLogin(isSignUp ? name : email);
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setAuthMethod('google');
    setIsLoading(true);
    setTimeout(() => {
      onLogin('Google User');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col md:flex-row font-sans text-slate-800 selection:bg-blue-200">
      
      {/* Left Branding Panel */}
      <div className="hidden md:flex flex-col flex-1 bg-navy-900 justify-center p-12 relative overflow-hidden border-r border-navy-800">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            {/* World Map Background Pattern */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full fill-blue-500">
               <circle cx="20" cy="30" r="1.5" />
               <circle cx="50" cy="60" r="2" />
               <circle cx="80" cy="40" r="1" />
               <path d="M20,30 Q35,45 50,60 T80,40" stroke="#3b82f6" strokeWidth="0.5" fill="none" strokeDasharray="2,2"/>
            </svg>
         </div>
         
         <div className="relative z-10 max-w-lg">
            <div className="bg-blue-500/20 p-3 rounded-xl inline-block mb-6">
              <Globe className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
               Ship Anywhere through ExpatShip.<br />Scale Infinitely.
            </h1>
            <p className="text-navy-300 text-lg leading-relaxed">
               The premier intelligence engine for cross-border logistics. Automate your customs protocols, instantly calculate international duty rates, and trace assets in real-time.
            </p>
         </div>
      </div>

      {/* Right Auth Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 bg-white relative">
        <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
           
           <div className="md:hidden flex items-center justify-center gap-2 mb-8">
              <div className="bg-blue-50 p-2 rounded-lg"><Globe className="w-6 h-6 text-blue-600" /></div>
              <span className="text-2xl font-bold text-navy-900">ExpatShip</span>
           </div>

           <h2 className="text-2xl font-bold text-navy-900 mb-2 text-center md:text-left">
             {isSignUp ? 'Create an Account' : 'Welcome Back'}
           </h2>
           <p className="text-slate-500 mb-8 text-center md:text-left">
             {isSignUp ? 'Join us to streamline your shipping operations.' : 'Enter your credentials to access the Operations Center.'}
           </p>

           <form onSubmit={handleSubmit} className="space-y-5">
             {isSignUp && (
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                 <div className="relative">
                   <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                   <input 
                     type="text" 
                     value={name}
                     onChange={e => setName(e.target.value)}
                     className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none transition-shadow"
                     placeholder="John Doe"
                     required
                   />
                 </div>
               </div>
             )}

             <div>
               <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
               <div className="relative">
                 <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                 <input 
                   type="email" 
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none transition-shadow"
                   placeholder="name@company.com"
                   required
                 />
               </div>
             </div>

             <div>
               <div className="flex justify-between items-center mb-1">
                 <label className="block text-sm font-medium text-slate-700">
                   {isSignUp ? 'Create Password' : 'Password'}
                 </label>
                 {!isSignUp && (
                   <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800">Forgot Password?</a>
                 )}
               </div>
               <div className="relative">
                 <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                 <input 
                   type="password" 
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none transition-shadow"
                   placeholder="••••••••"
                   required
                 />
               </div>
             </div>

             <button 
               type="submit" 
               disabled={isLoading}
               className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 mt-4 disabled:bg-navy-800/70"
             >
               {isLoading && authMethod === 'email' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
               ) : (
                  <>{isSignUp ? 'Create Account' : 'Sign In Securely'} <ArrowRight className="w-4 h-4 ml-1"/></>
               )}
             </button>
           </form>

           <div className="my-6 flex items-center text-slate-300">
             <div className="flex-1 border-t border-slate-200"></div>
             <span className="px-3 text-sm text-slate-500 font-medium">Or</span>
             <div className="flex-1 border-t border-slate-200"></div>
           </div>

           <button 
             type="button"
             onClick={handleGoogleLogin}
             disabled={isLoading}
             className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-3 disabled:bg-slate-50"
           >
             {isLoading && authMethod === 'google' ? (
                <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
             ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  {isSignUp ? 'Sign Up' : 'Sign In'} with Google
                </>
             )}
           </button>

           <div className="mt-8 text-center">
             <button 
               type="button"
               onClick={() => { setIsSignUp(!isSignUp); setEmail(''); setPassword(''); setName(''); }}
               className="text-sm font-bold text-navy-600 hover:text-navy-900 transition-colors"
             >
               {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
