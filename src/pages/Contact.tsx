import { getSettings } from '../data/store';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const settings = getSettings();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold">Address</h3>
              </div>
              <p className="text-gray-400 text-sm">{settings.address}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold">Phone</h3>
              </div>
              <a href={`tel:${settings.phone}`} className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">{settings.phone}</a>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold">Email</h3>
              </div>
              <a href={`mailto:${settings.email}`} className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">{settings.email}</a>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold">Working Hours</h3>
              </div>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              
              {submitted && (
                <div className="mb-6 bg-green-900/30 border border-green-600/30 rounded-lg p-4 text-green-400 text-sm">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
