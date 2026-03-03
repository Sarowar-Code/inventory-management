'use client'
import { Plus, Search, Upload, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Cart } from '../../components/Cart'
import productsData from '../../data/products.json'

export default function POSPage() {
  const [products, setProducts] = useState(productsData)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    stock: '',
    price: '',
    image: ''
  })
  const [imagePreview, setImagePreview] = useState<string>('')
  const [imageMode, setImageMode] = useState<'url' | 'upload'>('url')

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function addToCart(product: any) {
    const existing = cartItems.find(i => i.id === product.id)
    if (existing) {
      setCartItems(cartItems.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  function handleAddProduct(e: React.FormEvent) {
    e.preventDefault()
    if (!newProduct.name || !newProduct.category || !newProduct.stock || !newProduct.price) {
      alert('Please fill all fields')
      return
    }

    const productToAdd = {
      id: products.length + 1,
      name: newProduct.name,
      category: newProduct.category,
      stock: parseInt(newProduct.stock),
      price: parseFloat(newProduct.price),
      image: newProduct.image || imagePreview || 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
    }

    setProducts([...products, productToAdd])
    setNewProduct({ name: '', category: '', stock: '', price: '', image: '' })
    setImagePreview('')
    setImageMode('url')
    setShowAddModal(false)
    alert('Product added successfully!')
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setImagePreview(base64String)
        setNewProduct({ ...newProduct, image: base64String })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="h-full w-full flex flex-col lg:flex-row p-3 sm:p-4 md:p-6 gap-3 md:gap-6 overflow-hidden">
      {/* Products Section */}
      <div className="flex flex-col h-auto lg:flex-1 lg:h-full order-2 lg:order-1 overflow-hidden">
        <div className="mb-3 md:mb-6 flex flex-col sm:flex-row gap-2 md:gap-3 flex-shrink-0">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
            <input
              placeholder="Search product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 md:py-3 border border-slate-700 rounded-lg bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500 text-sm md:text-base"
            />
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-deepblue-600 hover:bg-deepblue-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg flex items-center justify-center gap-2 transition whitespace-nowrap text-sm md:text-base flex-shrink-0"
          >
            <Plus size={18} /> <span className="hidden sm:inline">Add</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 overflow-y-auto overflow-x-hidden flex-1">
          {filteredProducts.map(p => (
            <div
              key={p.id}
              className="bg-slate-800 rounded-lg hover:bg-slate-700 transition cursor-pointer border border-slate-700 overflow-hidden flex flex-col"
              onClick={() => addToCart(p)}
            >
              <div className="h-24 sm:h-32 md:h-40 w-full bg-slate-700 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                {p.stock <= 5 && (
                  <div className="absolute top-1 right-1 md:top-2 md:right-2 bg-red-600 text-white text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded z-10">Low Stock</div>
                )}
                <Image src={p.image} alt={p.name} width={160} height={160} unoptimized className="object-cover w-full h-full" />
              </div>
              <div className="p-2 md:p-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs md:text-sm font-semibold text-slate-100 line-clamp-2">{p.name}</div>
                  <div className="text-xs text-slate-400 truncate">{p.category}</div>
                </div>
                <div className="flex justify-between items-end gap-1 mt-1">
                  <div className="text-sm md:text-lg font-bold text-deepblue-400">AED {p.price.toFixed(2)}</div>
                  <div className="text-xs text-slate-400 whitespace-nowrap">Qty: {p.stock}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-800 flex flex-col max-h-96 lg:max-h-full lg:w-80 order-1 lg:order-2 flex-shrink-0 lg:flex-shrink-0">
        <Cart items={cartItems} onChange={setCartItems} />
      </div>      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-lg border border-slate-800 max-w-md w-full p-6 max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-100">Add New Product</h2>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-100">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Product Name *</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="Enter product name"
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category *</label>
                <input
                  type="text"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  placeholder="e.g., Apparel, Accessories, Footwear"
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Stock *</label>
                  <input
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    placeholder="0"
                    min="0"
                    className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Price (AED) *</label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Product Image (Optional)</label>
                <div className="flex gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      setImageMode('url')
                      setImagePreview('')
                    }}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                      imageMode === 'url'
                        ? 'bg-deepblue-600 text-white'
                        : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Image URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageMode('upload')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1 ${
                      imageMode === 'upload'
                        ? 'bg-deepblue-600 text-white'
                        : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    <Upload size={16} /> Upload
                  </button>
                </div>

                {imageMode === 'url' ? (
                  <div key="url-input">
                    <input
                      type="text"
                      value={newProduct.image}
                      onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500 text-xs"
                    />
                    <p className="text-xs text-slate-400 mt-1">Paste your image URL here</p>
                  </div>
                ) : (
                  <div key="file-input">
                    <input
                      key="file-input-element"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-deepblue-500 text-xs"
                    />
                    <p className="text-xs text-slate-400 mt-1">Upload JPG, PNG, or other image formats</p>
                  </div>
                )}

                {imagePreview && (
                  <div className="mt-3 p-2 bg-slate-800 rounded-lg border border-slate-700">
                    <div className="relative w-full h-32">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        width={120}
                        height={120}
                        unoptimized
                        className="object-cover w-full h-full rounded"
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Image preview</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-deepblue-600 hover:bg-deepblue-700 text-white py-2 rounded-lg font-medium transition"
                >
                  Add Product
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-100 py-2 rounded-lg font-medium transition border border-slate-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
