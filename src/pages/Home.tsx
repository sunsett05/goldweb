import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import { getProducts, getSettings } from '../data/store';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const products = getProducts();
  const settings = getSettings();
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <Hero />
      <Categories />

      {/* Featured Products */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Products</h2>
              <p className="text-gray-500 text-sm mt-1">Our latest offerings</p>
            </div>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose <span className="text-yellow-400">{settings.siteName.split(' ')[0]}</span>?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">{settings.aboutText}</p>
              <a href="/about" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 border border-yellow-600/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="text-white font-semibold">Certified</h3>
                <p className="text-gray-500 text-sm mt-1">All products certified</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 border border-yellow-600/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="text-white font-semibold">Best Prices</h3>
                <p className="text-gray-500 text-sm mt-1">Competitive rates</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 border border-yellow-600/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="text-white font-semibold">Secure</h3>
                <p className="text-gray-500 text-sm mt-1">Safe transactions</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 border border-yellow-600/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="text-white font-semibold">Live Prices</h3>
                <p className="text-gray-500 text-sm mt-1">Real-time updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-white mb-8">Our Partners</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="bg-gray-800 rounded-lg px-8 py-4 border border-gray-700">
              <span className="text-gray-300 font-bold text-lg">VALCAMBI</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-8 py-4 border border-gray-700">
              <span className="text-gray-300 font-bold text-lg">PAMP</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-8 py-4 border border-gray-700">
              <span className="text-gray-300 font-bold text-lg">Royal Mint</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-8 py-4 border border-gray-700">
              <span className="text-gray-300 font-bold text-lg">Heraeus</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
