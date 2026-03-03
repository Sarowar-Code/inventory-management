import { AlertTriangle, Package, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Card } from '../components/ui/Card'
import products from '../data/products.json'

export default function DashboardPage() {
  const totalSales = 12500.50
  const totalOrders = 72
  const lowStock = products.filter(p => p.stock <= 5).length

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6 h-full overflow-auto">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 md:mb-2">Dashboard</h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-400">Welcome to your POS and Inventory Management System</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        <div className="bg-gray-900 rounded-lg p-4 md:p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="min-w-0">
              <p className="text-slate-400 text-xs md:text-sm mb-1">Total Sales (Today)</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 break-words">AED {totalSales.toFixed(2)}</h2>
            </div>
            <ShoppingCart className="text-deepblue-400 flex-shrink-0" size={24} />
          </div>
          <p className="text-xs text-slate-400">+12% from yesterday</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-700 rounded-lg p-4 md:p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="min-w-0">
              <p className="text-slate-400 text-xs md:text-sm mb-1">Total Orders</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">{totalOrders}</h2>
            </div>
            <Package className="text-purple-400 flex-shrink-0" size={24} />
          </div>
          <p className="text-xs text-slate-400">8 pending orders</p>
        </div>

        <div className="bg-gradient-to-br from-red-900 to-red-800 border border-red-700 rounded-lg p-4 md:p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="min-w-0">
              <p className="text-slate-400 text-xs md:text-sm mb-1">Low Stock Alerts</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">{lowStock}</h2>
            </div>
            <AlertTriangle className="text-red-400 flex-shrink-0" size={24} />
          </div>
          <p className="text-xs text-slate-400">Items below threshold</p>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-4 md:p-8">
        <h2 className="text-base md:text-xl font-semibold text-slate-100 mb-3 md:mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <Link
            href="/pos"
            className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 md:py-3 bg-deepblue-600 text-white rounded-lg hover:bg-deepblue-700 transition font-medium text-sm md:text-base whitespace-nowrap"
          >
            <ShoppingCart size={18} />
            <span>Open POS</span>
          </Link>
          <Link
            href="/inventory"
            className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 md:py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition font-medium text-sm md:text-base whitespace-nowrap"
          >
            <Package size={18} />
            <span>Inventory</span>
          </Link>
        </div>
      </Card>

      {/* Low Stock Products */}
      <Card className="p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-slate-100 mb-3 md:mb-4">Low Stock Products</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {products.filter(p => p.stock <= 5).map(p => (
            <div key={p.id} className="flex items-center justify-between p-2 md:p-3 bg-slate-800 rounded-lg hover:bg-slate-700/70 transition text-sm md:text-base">
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-100 truncate text-sm md:text-base">{p.name}</p>
                <p className="text-xs text-slate-400 truncate">{p.category}</p>
              </div>
              <div className="text-right ml-2">
                <p className="text-xs md:text-sm font-semibold text-red-400 whitespace-nowrap">Stock: {p.stock}</p>
                <p className="text-xs text-slate-400 whitespace-nowrap">AED {p.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
