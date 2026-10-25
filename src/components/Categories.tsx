import { Link } from 'react-router-dom';
import { getCategories } from '../data/store';
import { ArrowRight } from 'lucide-react';

export default function Categories() {
  const categories = getCategories();
  const goldCategories = categories.filter(c => c.parent === 'gold');
  const silverCategories = categories.filter(c => c.parent === 'silver');

  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Gold Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center text-2xl">
                🥇
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Gold Collection</h2>
                <p className="text-gray-500 text-sm">Browse our premium gold products</p>
              </div>
            </div>
            <Link to="/gold" className="hidden sm:flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goldCategories.map(cat => (
              <Link
                key={cat.id}
                to={`/gold/${cat.slug}`}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-600/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10"
              >
                <div className="text-4xl mb-3">{cat.image}</div>
                <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">{cat.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{cat.itemCount} items</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-yellow-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Silver Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center text-2xl">
                🥈
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Silver Collection</h2>
                <p className="text-gray-500 text-sm">Browse our silver products</p>
              </div>
            </div>
            <Link to="/silver" className="hidden sm:flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {silverCategories.map(cat => (
              <Link
                key={cat.id}
                to={`/silver/${cat.slug}`}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10"
              >
                <div className="text-4xl mb-3">{cat.image}</div>
                <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">{cat.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{cat.itemCount} items</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-yellow-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
