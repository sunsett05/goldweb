import { useState } from 'react';
import { checkPassword, loginAdmin, hasPassword, setAdminPassword } from '../data/auth';
import { Lock, Shield, Key } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSetup, setIsSetup] = useState(!hasPassword());
  const [confirmPassword, setConfirmPassword] = useState('');
  const [setupError, setSetupError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkPassword(password)) {
      loginAdmin();
      onLogin();
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const handleSetup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 4) {
      setSetupError('Password must be at least 4 characters');
      return;
    }
    if (password !== confirmPassword) {
      setSetupError('Passwords do not match');
      return;
    }
    setAdminPassword(password);
    loginAdmin();
    onLogin();
  };

  if (isSetup) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-600/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-gray-900" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Setup Admin Access</h1>
              <p className="text-gray-400 text-sm">Create a password to protect your admin panel</p>
            </div>

            <form onSubmit={handleSetup} className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-1 block">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setSetupError(''); }}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Enter password (min 4 characters)"
                  required
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setSetupError(''); }}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              {setupError && (
                <p className="text-red-400 text-sm">{setupError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
              >
                Create Password & Continue
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-900/10 border border-blue-600/20 rounded-lg">
              <p className="text-blue-400 text-xs">
                <strong>Important:</strong> Remember your password! If you forget it, you can reset it by clearing your browser's localStorage.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-600/30 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-gray-900" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-gray-400 text-sm">Enter your password to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="Enter your password"
                required
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
            >
              Login
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
            <Shield className="w-4 h-4" />
            <span>Protected Admin Panel</span>
          </div>
        </div>
      </div>
    </div>
  );
}
