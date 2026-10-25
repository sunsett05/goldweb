import { Link } from 'react-router-dom';
import { getSettings } from '../data/store';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const settings = getSettings();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">J</span>
              </div>
              <div>
                <h3 className="text-white font-bold">{settings.siteName.split(' ').slice(0, 2).join(' ')}</h3>
                <p className="text-yellow-500 text-xs">{settings.siteName.split(' ').slice(2).join(' ') || 'Premium Trading'}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{settings.aboutText.slice(0, 150)}...</p>
          </div>

          {/* Gold Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Gold
            </h4>
            <ul className="space-y-2">
              <li><Link to="/gold/swiss-gold" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Swiss Gold</Link></li>
              <li><Link to="/gold/local-ounce-gold" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Local Ounce Gold</Link></li>
              <li><Link to="/gold/gold-coin" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Gold Coin 21K/22K</Link></li>
              <li><Link to="/gold/used-gold" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Used Gold</Link></li>
            </ul>
          </div>

          {/* Silver Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              Silver
            </h4>
            <ul className="space-y-2">
              <li><Link to="/silver/local-silver" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Local Silver</Link></li>
              <li><Link to="/silver/imported-silver" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Imported Silver</Link></li>
            </ul>

            <h4 className="text-white font-semibold mb-4 mt-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Contact</Link></li>
              <li><Link to="/admin" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Admin Panel</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{settings.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href={`mailto:${settings.email}`} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">{settings.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href={`tel:${settings.phone}`} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">{settings.phone}</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href={settings.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7 6.34 6.34 0 009.49 22a6.34 6.34 0 006.34-6.34V9.01a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.44z"/></svg>
              </a>
              <a href={settings.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={settings.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {settings.siteName}. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Designed & Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
