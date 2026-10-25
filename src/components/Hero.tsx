import { useEffect, useState } from 'react';
import { getSettings } from '../data/store';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const settings = getSettings();
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % settings.announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [settings.announcements.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-[128px]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <p className="text-yellow-400 text-sm font-medium transition-all duration-500">
              {settings.announcements[currentAnnouncement]}
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Gold</span> &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Silver</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {settings.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/gold" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-600/20">
              Browse Gold
              <ChevronRight className="w-5 h-5" />
            </a>
            <a href="/silver" className="inline-flex items-center justify-center gap-2 border border-gray-600 text-gray-300 font-bold px-8 py-3 rounded-lg hover:border-yellow-600/50 hover:text-yellow-400 transition-all">
              Browse Silver
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">20+</p>
              <p className="text-gray-500 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">100+</p>
              <p className="text-gray-500 text-sm mt-1">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">1000+</p>
              <p className="text-gray-500 text-sm mt-1">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">24/7</p>
              <p className="text-gray-500 text-sm mt-1">Price Updates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="border-t border-b border-yellow-600/20 bg-gray-900/50 py-3 overflow-hidden">
        <div className="flex animate-scroll">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 whitespace-nowrap">
              {settings.announcements.map((a, idx) => (
                <span key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  {a}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
