import { Product } from '../data/store';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map(product => (
          <div
            key={product.id}
            className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl overflow-hidden hover:border-yellow-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10"
          >
            {/* Image/Emoji placeholder */}
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.image}</span>
              )}
              {product.karat && (
                <span className="absolute top-3 right-3 bg-yellow-600/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.karat}
                </span>
              )}
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h3 className="text-white font-medium text-sm group-hover:text-yellow-400 transition-colors line-clamp-2">
                {product.name}
              </h3>
              {product.weight && (
                <p className="text-gray-500 text-xs mt-1">Weight: {product.weight}</p>
              )}
              <div className="flex items-center justify-between mt-3">
                <p className="text-yellow-400 font-bold text-lg">${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                <button className="text-xs bg-yellow-600/20 text-yellow-400 px-3 py-1.5 rounded-lg hover:bg-yellow-600/30 transition-colors font-medium">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
