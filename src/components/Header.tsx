import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, TrendingUp } from 'lucide-react';
import { getSettings } from '../data/store';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [goldDropdown, setGoldDropdown] = useState(false);
  const [silverDropdown, setSilverDropdown] = useState(false);
  const location = useLocation();
  const settings = getSettings();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-yellow-600/30">
      {/* Price Ticker */}
      <div className="bg-gradient-to-r from-yellow-900/40 via-yellow-800/30 to-yellow-900/40 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium text-sm">18K Gold</span>
            <span className="text-white font-bold text-sm">${settings.goldPrice18k.toFixed(2)}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-gray-400 text-xs">Silver</span>
            <span className="text-gray-300 text-xs font-medium">${settings.silverPrice.toFixed(2)}/oz</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">J</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg leading-tight">{settings.siteName.split(' ').slice(0, 2).join(' ')}</h1>
              <p className="text-yellow-500 text-xs">{settings.siteName.split(' ').slice(2).join(' ') || 'Premium Trading'}</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
              Home
            </Link>
            
            <div className="relative" onMouseEnter={() => setGoldDropdown(true)} onMouseLeave={() => setGoldDropdown(false)}>
              <Link to="/gold" className={`text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.includes('/gold') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
                Gold
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              {goldDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-yellow-600/30 rounded-lg shadow-xl py-2">
                  <Link to="/gold/swiss-gold" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-600/20 hover:text-yellow-400">Swiss Gold</Link>
                  <Link to="/gold/local-ounce-gold" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-600/20 hover:text-yellow-400">Local Ounce Gold</Link>
                  <Link to="/gold/gold-coin" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-600/20 hover:text-yellow-400">Gold Coin 21K/22K</Link>
                  <Link to="/gold/used-gold" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-600/20 hover:text-yellow-400">Used Gold</Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setSilverDropdown(true)} onMouseLeave={() => setSilverDropdown(false)}>
              <Link to="/silver" className={`text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.includes('/silver') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
                Silver
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              {silverDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-yellow-600/30 rounded-lg shadow-xl py-2">
                  <Link to="/silver/local-silver" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-600/20 hover:text-yellow-400">Local Silver</Link>
                  <Link to="/silver/imported-silver" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-600/20 hover:text-yellow-400">Imported Silver</Link>
                </div>
              )}
            </div>

            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
              About
            </Link>
            <Link to="/faqs" className={`text-sm font-medium transition-colors ${isActive('/faqs') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
              FAQs
            </Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
              Contact
            </Link>
            <Link to="/admin" className="text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors">
              ⚙️ Admin
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-300 hover:text-yellow-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-gray-300 hover:text-yellow-400">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="mt-3 pb-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-gray-800 pt-4 space-y-3">
            <Link to="/" className="block text-gray-300 hover:text-yellow-400 py-1" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/gold" className="block text-gray-300 hover:text-yellow-400 py-1" onClick={() => setMobileMenuOpen(false)}>Gold</Link>
            <Link to="/gold/swiss-gold" className="block text-gray-500 hover:text-yellow-400 py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Swiss Gold</Link>
            <Link to="/gold/local-ounce-gold" className="block text-gray-500 hover:text-yellow-400 py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Local Ounce Gold</Link>
            <Link to="/gold/gold-coin" className="block text-gray-500 hover:text-yellow-400 py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Gold Coin 21K/22K</Link>
            <Link to="/gold/used-gold" className="block text-gray-500 hover:text-yellow-400 py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Used Gold</Link>
            <Link to="/silver" className="block text-gray-300 hover:text-yellow-400 py-1" onClick={() => setMobileMenuOpen(false)}>Silver</Link>
            <Link to="/silver/local-silver" className="block text-gray-500 hover:text-yellow-400 py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Local Silver</Link>
            <Link to="/silver/imported-silver" className="block text-gray-500 hover:text-yellow-400 py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Imported Silver</Link>
            <Link to="/about" className="block text-gray-300 hover:text-yellow-400 py-1" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/faqs" className="block text-gray-300 hover:text-yellow-400 py-1" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
            <Link to="/contact" className="block text-gray-300 hover:text-yellow-400 py-1" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/admin" className="block text-yellow-500 hover:text-yellow-400 py-1" onClick={() => setMobileMenuOpen(false)}>⚙️ Admin Panel</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
