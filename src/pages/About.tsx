import { getSettings } from '../data/store';
import { Award, Users, Shield, Clock } from 'lucide-react';

export default function About() {
  const settings = getSettings();

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-yellow-400">{settings.siteName.split(' ')[0]}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{settings.tagline}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-600/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-gray-400 leading-relaxed mb-4">{settings.aboutText}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-yellow-400 text-2xl font-bold">2021</p>
                  <p className="text-gray-500 text-sm">Founded</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-yellow-400 text-2xl font-bold">20+</p>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Premium Quality</h3>
                <p className="text-gray-400 text-sm">All our products are certified and meet the highest quality standards in the industry.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Customer First</h3>
                <p className="text-gray-400 text-sm">We prioritize our customers' needs and provide personalized service for every transaction.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Trust & Transparency</h3>
                <p className="text-gray-400 text-sm">Real-time price updates and transparent pricing with no hidden fees or commissions.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Always Available</h3>
                <p className="text-gray-400 text-sm">Our showroom in central Beirut is open for walk-ins, and we're always available online.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-yellow-600/10 via-yellow-600/5 to-yellow-600/10 border border-yellow-600/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            To provide accessible, transparent, and secure precious metal trading solutions for investors and collectors alike. 
            We believe everyone deserves access to quality gold and silver products at fair market prices with expert guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
