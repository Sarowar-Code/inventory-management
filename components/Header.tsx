import { Bell, Clock } from 'lucide-react'

export function Header() {
  const currentTime = new Date().toLocaleTimeString('en-AE', { hour: '2-digit', minute: '2-digit' })
  const currentDate = new Date().toLocaleDateString('en-AE', { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div className="flex items-center justify-between px-3 md:px-6 h-full">
      <div className="hidden sm:block">
        <h1 className="text-lg md:text-xl font-bold text-slate-100">POS & Inventory</h1>
        <p className="text-xs text-slate-400 hidden md:block">Dubai Retail</p>
      </div>
      <div className="sm:hidden">
        <h1 className="text-base font-bold text-slate-100">POS Dashboard</h1>
      </div>

      <div className="flex items-center gap-2 md:gap-6">
        <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-slate-400">
          <Clock size={16} className="hidden md:inline" />
          <span className="hidden sm:inline">{currentDate} {currentTime}</span>
          <span className="sm:hidden">{currentTime}</span>
        </div>

        <button className="p-2 hover:bg-slate-800 rounded-lg transition relative flex-shrink-0">
          <Bell size={18} className="text-slate-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  )
}
