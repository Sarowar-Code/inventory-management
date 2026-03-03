import { BarChart3, Calendar, TrendingUp } from 'lucide-react'
import { Card } from '../../components/ui/Card'

export default function ReportsPage() {
  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6 h-full overflow-auto">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 mb-1 md:mb-2">Reports</h1>
        <p className="text-xs sm:text-sm text-slate-400">Analyze your sales and inventory data</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="p-4 md:p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-base md:text-lg font-semibold text-slate-100">Sales Report</h3>
            <TrendingUp className="text-deepblue-400 flex-shrink-0" size={20} />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm">Today</span>
              <span className="text-base md:text-lg font-bold text-deepblue-400">AED 12,500.50</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm">This Week</span>
              <span className="text-base md:text-lg font-bold text-slate-200">AED 87,320.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm">This Month</span>
              <span className="text-base md:text-lg font-bold text-slate-200">AED 342,100.75</span>
            </div>
          </div>
          <button className="w-full mt-4 py-2 bg-deepblue-600 text-white rounded-lg hover:bg-deepblue-700 font-medium text-sm md:text-base transition">
            View Report
          </button>
        </Card>

        <Card className="p-4 md:p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-base md:text-lg font-semibold text-slate-100">Inventory Analytics</h3>
            <BarChart3 className="text-purple-400 flex-shrink-0" size={20} />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm">Total Products</span>
              <span className="text-base md:text-lg font-bold text-slate-100">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm">Low Stock Items</span>
              <span className="text-base md:text-lg font-bold text-red-400">4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Total Stock Value</span>
              <span className="text-lg font-bold text-slate-200">AED 45,230.00</span>
            </div>
          </div>
          <button className="w-full mt-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
            View Stock Report
          </button>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
          <Calendar size={20} />
          Date Range Filter
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">From Date</label>
            <input type="date" className="w-full px-3 py-2 border border-slate-700 bg-slate-800 text-slate-100 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">To Date</label>
            <input type="date" className="w-full px-3 py-2 border border-slate-700 bg-slate-800 text-slate-100 rounded-lg" />
          </div>
          <div className="flex items-end">
            <button className="w-full py-2 bg-deepblue-600 text-white rounded-lg hover:bg-deepblue-700 font-medium">
              Generate Report
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
