import { useParams, Link, useLocation } from 'react-router-dom';
import { getProducts, getCategories } from '../data/store';
import ProductGrid from '../components/ProductGrid';
import { ChevronRight, Home } from 'lucide-react';

export default function CategoryPage() {
  const { subcategory } = useParams();
  const location = useLocation();
  const products = getProducts();
  const categories = getCategories();

  // Determine parent category from URL path
  const pathParts = location.pathname.split('/').filter(Boolean);
  const parent = pathParts[0] as 'gold' | 'silver';

  let filteredProducts = products;
  let pageTitle = '';
  let pageDescription = '';

  if (!subcategory) {
    // Parent category page (e.g., /gold or /silver)
    filteredProducts = products.filter(p => p.category === parent);
    pageTitle = parent === 'gold' ? 'Gold Products' : 'Silver Products';
    pageDescription = parent === 'gold' 
      ? 'Browse our complete collection of gold products including Swiss gold, local gold, coins, and pre-owned items.'
      : 'Browse our complete collection of silver products including local and imported silver.';
  } else {
    // Subcategory page
    filteredProducts = products.filter(p => p.subcategory === subcategory);
    const cat = categories.find(c => c.slug === subcategory);
    pageTitle = cat?.name || subcategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    pageDescription = `Browse our ${pageTitle} collection.`;
  }

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8 flex-wrap">
          <Link to="/" className="text-gray-500 hover:text-yellow-400 flex items-center gap-1 transition-colors">
            <Home className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <Link to={`/${parent}`} className="text-gray-400 hover:text-yellow-400 capitalize transition-colors">
            {parent}
          </Link>
          {subcategory && (
            <>
              <ChevronRight className="w-3 h-3 text-gray-600" />
              <span className="text-yellow-400">{pageTitle}</span>
            </>
          )}
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{pageTitle}</h1>
          <p className="text-gray-400">{pageDescription}</p>
          <p className="text-gray-500 text-sm mt-2">{filteredProducts.length} products</p>
        </div>

        {/* Subcategory Navigation */}
        {!subcategory && (
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.filter(c => c.parent === parent).map(cat => (
              <Link
                key={cat.id}
                to={`/${parent}/${cat.slug}`}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-yellow-600/50 hover:text-yellow-400 transition-all flex items-center gap-2"
              >
                <span>{cat.image}</span>
                <span>{cat.name}</span>
                <span className="text-gray-500 text-xs">({cat.itemCount})</span>
              </Link>
            ))}
          </div>
        )}

        {/* Products */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
