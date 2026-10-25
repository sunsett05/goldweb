import { useState, useEffect } from 'react';
import { getSettings, saveSettings, getProducts, saveProducts, getCategories, saveCategories, resetToDefaults, SiteSettings, Product, Category } from '../data/store';
import { Save, Plus, Trash2, RotateCcw, Settings, Package, FolderOpen, TrendingUp, AlertCircle } from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'settings' | 'products' | 'categories'>('settings');
  const [settings, setSettings] = useState<SiteSettings>(getSettings());
  const [products, setProducts] = useState<Product[]>(getProducts());
  const [categories, setCategories] = useState<Category[]>(getCategories());
  const [saved, setSaved] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showAddProduct, setShowAddProduct] = useState(false);

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [saved]);

  const handleSaveSettings = () => {
    saveSettings(settings);
    setSaved(true);
  };

  const handleSaveProducts = () => {
    saveProducts(products);
    setSaved(true);
  };

  const handleSaveCategories = () => {
    saveCategories(categories);
    setSaved(true);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all data to defaults? This cannot be undone.')) {
      resetToDefaults();
      setSettings(getSettings());
      setProducts(getProducts());
      setCategories(getCategories());
      setSaved(true);
    }
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Delete this product?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      saveProducts(updated);
    }
  };

  const handleAddProduct = (product: Product) => {
    const updated = [...products, product];
    setProducts(updated);
    saveProducts(updated);
    setShowAddProduct(false);
  };

  const handleUpdateProduct = (product: Product) => {
    const updated = products.map(p => p.id === product.id ? product : p);
    setProducts(updated);
    saveProducts(updated);
    setEditingProduct(null);
  };

  const handleAddCategory = () => {
    const newCat: Category = {
      id: Date.now().toString(),
      name: 'New Category',
      slug: 'new-category',
      parent: 'gold',
      itemCount: 0,
      image: '🏅',
    };
    const updated = [...categories, newCat];
    setCategories(updated);
    saveCategories(updated);
  };

  const handleDeleteCategory = (id: string) => {
    if (confirm('Delete this category?')) {
      const updated = categories.filter(c => c.id !== id);
      setCategories(updated);
      saveCategories(updated);
    }
  };

  const updateCategory = (id: string, field: keyof Category, value: string | number) => {
    const updated = categories.map(c => c.id === id ? { ...c, [field]: value } : c);
    setCategories(updated);
  };

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-8 h-8 text-yellow-400" />
              Admin Panel
            </h1>
            <p className="text-gray-500 text-sm mt-1">Control everything on your website</p>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-green-400 text-sm flex items-center gap-1">
                ✓ Saved successfully
              </span>
            )}
            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-red-900/30 border border-red-600/30 text-red-400 px-4 py-2 rounded-lg hover:bg-red-900/50 transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to Defaults
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-800 pb-4">
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-yellow-600/20 text-yellow-400' : 'text-gray-400 hover:text-white'}`}
          >
            <Settings className="w-4 h-4" /> Site Settings
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'products' ? 'bg-yellow-600/20 text-yellow-400' : 'text-gray-400 hover:text-white'}`}
          >
            <Package className="w-4 h-4" /> Products ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'categories' ? 'bg-yellow-600/20 text-yellow-400' : 'text-gray-400 hover:text-white'}`}
          >
            <FolderOpen className="w-4 h-4" /> Categories ({categories.length})
          </button>
        </div>

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            {/* General Settings */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-yellow-400" /> General Settings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Site Name</label>
                  <input
                    type="text"
                    value={settings.siteName}
                    onChange={e => setSettings({ ...settings, siteName: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Tagline</label>
                  <input
                    type="text"
                    value={settings.tagline}
                    onChange={e => setSettings({ ...settings, tagline: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
              </div>
            </div>

            {/* Price Settings */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-400" /> Price Settings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">18K Gold Price ($/gram)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={settings.goldPrice18k}
                    onChange={e => setSettings({ ...settings, goldPrice18k: parseFloat(e.target.value) || 0 })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Silver Price ($/oz)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={settings.silverPrice}
                    onChange={e => setSettings({ ...settings, silverPrice: parseFloat(e.target.value) || 0 })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Email</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={e => setSettings({ ...settings, email: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Phone</label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={e => setSettings({ ...settings, phone: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-400 text-sm mb-1 block">Address</label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={e => setSettings({ ...settings, address: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Social Media Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">TikTok</label>
                  <input
                    type="url"
                    value={settings.socialLinks.tiktok}
                    onChange={e => setSettings({ ...settings, socialLinks: { ...settings.socialLinks, tiktok: e.target.value } })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Instagram</label>
                  <input
                    type="url"
                    value={settings.socialLinks.instagram}
                    onChange={e => setSettings({ ...settings, socialLinks: { ...settings.socialLinks, instagram: e.target.value } })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Facebook</label>
                  <input
                    type="url"
                    value={settings.socialLinks.facebook}
                    onChange={e => setSettings({ ...settings, socialLinks: { ...settings.socialLinks, facebook: e.target.value } })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Scrolling Announcements</h2>
              <div className="space-y-3">
                {settings.announcements.map((a, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      type="text"
                      value={a}
                      onChange={e => {
                        const updated = [...settings.announcements];
                        updated[idx] = e.target.value;
                        setSettings({ ...settings, announcements: updated });
                      }}
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500"
                    />
                    <button
                      onClick={() => {
                        const updated = settings.announcements.filter((_, i) => i !== idx);
                        setSettings({ ...settings, announcements: updated });
                      }}
                      className="px-3 py-2 bg-red-900/30 border border-red-600/30 text-red-400 rounded-lg hover:bg-red-900/50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setSettings({ ...settings, announcements: [...settings.announcements, 'New announcement'] })}
                  className="flex items-center gap-2 text-yellow-400 text-sm hover:text-yellow-300"
                >
                  <Plus className="w-4 h-4" /> Add Announcement
                </button>
              </div>
            </div>

            {/* About Text */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">About Text</h2>
              <textarea
                rows={4}
                value={settings.aboutText}
                onChange={e => setSettings({ ...settings, aboutText: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 resize-none"
              />
            </div>

            <button
              onClick={handleSaveSettings}
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
            >
              <Save className="w-5 h-5" /> Save Settings
            </button>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400 text-sm">{products.length} products total</p>
              <button
                onClick={() => setShowAddProduct(true)}
                className="flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-600/30 transition-colors text-sm font-medium"
              >
                <Plus className="w-4 h-4" /> Add Product
              </button>
            </div>

            {/* Add Product Form */}
            {showAddProduct && (
              <ProductForm
                onSave={handleAddProduct}
                onCancel={() => setShowAddProduct(false)}
                categories={categories}
              />
            )}

            {/* Edit Product Form */}
            {editingProduct && (
              <ProductForm
                product={editingProduct}
                onSave={handleUpdateProduct}
                onCancel={() => setEditingProduct(null)}
                categories={categories}
              />
            )}

            {/* Products List */}
            <div className="space-y-2">
              {products.map(product => (
                <div key={product.id} className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center gap-4 hover:border-gray-700 transition-colors">
                  <span className="text-2xl">{product.image}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm truncate">{product.name}</h3>
                    <p className="text-gray-500 text-xs">{product.category} / {product.subcategory} {product.karat && `• ${product.karat}`}</p>
                  </div>
                  <span className="text-yellow-400 font-bold text-sm">${product.price.toFixed(2)}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="text-gray-400 hover:text-yellow-400 text-xs bg-gray-800 px-3 py-1.5 rounded transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-400 hover:text-red-300 p-1.5 bg-red-900/20 rounded transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400 text-sm">{categories.length} categories</p>
              <button
                onClick={handleAddCategory}
                className="flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-600/30 transition-colors text-sm font-medium"
              >
                <Plus className="w-4 h-4" /> Add Category
              </button>
            </div>

            <div className="space-y-3">
              {categories.map(cat => (
                <div key={cat.id} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                    <div>
                      <label className="text-gray-500 text-xs mb-1 block">Emoji</label>
                      <input
                        type="text"
                        value={cat.image}
                        onChange={e => updateCategory(cat.id, 'image', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white text-center focus:outline-none focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs mb-1 block">Name</label>
                      <input
                        type="text"
                        value={cat.name}
                        onChange={e => updateCategory(cat.id, 'name', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs mb-1 block">Slug</label>
                      <input
                        type="text"
                        value={cat.slug}
                        onChange={e => updateCategory(cat.id, 'slug', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs mb-1 block">Parent</label>
                      <select
                        value={cat.parent}
                        onChange={e => updateCategory(cat.id, 'parent', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
                      >
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                      </select>
                    </div>
                    <div className="flex items-end gap-2">
                      <button
                        onClick={handleSaveCategories}
                        className="flex-1 flex items-center justify-center gap-1 bg-yellow-600/20 text-yellow-400 px-3 py-2 rounded hover:bg-yellow-600/30 text-sm transition-colors"
                      >
                        <Save className="w-3.5 h-3.5" /> Save
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(cat.id)}
                        className="p-2 bg-red-900/20 text-red-400 rounded hover:bg-red-900/40 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-900/10 border border-yellow-600/20 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm">
                Changes to categories are saved individually. Make sure to click "Save" on each category after editing. 
                The slug must match the subcategory field in products for them to appear correctly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Product Form Component
function ProductForm({ product, onSave, onCancel, categories }: {
  product?: Product;
  onSave: (p: Product) => void;
  onCancel: () => void;
  categories: Category[];
}) {
  const [form, setForm] = useState<Product>(product || {
    id: Date.now().toString(),
    name: '',
    price: 0,
    category: 'gold',
    subcategory: categories[0]?.slug || '',
    weight: '',
    karat: '',
    image: '🥇',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="bg-gray-900 border border-yellow-600/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-white mb-4">{product ? 'Edit Product' : 'Add New Product'}</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="text-gray-400 text-xs mb-1 block">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs mb-1 block">Price ($)</label>
          <input
            type="number"
            step="0.01"
            required
            value={form.price}
            onChange={e => setForm({ ...form, price: parseFloat(e.target.value) || 0 })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs mb-1 block">Category</label>
          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
          >
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
          </select>
        </div>
        <div>
          <label className="text-gray-400 text-xs mb-1 block">Subcategory</label>
          <select
            value={form.subcategory}
            onChange={e => setForm({ ...form, subcategory: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
          >
            {categories.filter(c => c.parent === form.category).map(c => (
              <option key={c.id} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-gray-400 text-xs mb-1 block">Weight</label>
          <input
            type="text"
            value={form.weight || ''}
            onChange={e => setForm({ ...form, weight: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
            placeholder="e.g. 10g"
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs mb-1 block">Karat</label>
          <input
            type="text"
            value={form.karat || ''}
            onChange={e => setForm({ ...form, karat: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
            placeholder="e.g. 24K"
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs mb-1 block">Emoji Icon</label>
          <input
            type="text"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-gray-400 text-xs mb-1 block">Description</label>
          <input
            type="text"
            value={form.description || ''}
            onChange={e => setForm({ ...form, description: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div className="sm:col-span-2 lg:col-span-3 flex gap-3">
          <button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold px-5 py-2 rounded-lg hover:from-yellow-400 hover:to-yellow-500 text-sm"
          >
            <Save className="w-4 h-4" /> {product ? 'Update' : 'Add'} Product
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-white px-4 py-2 text-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
