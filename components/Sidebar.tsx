'use client'
import { Box, FileText, Home, LogOut, Settings, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/inventory', label: 'Inventory', icon: Box },
    { href: '/pos', label: 'POS & Sales', icon: ShoppingCart },
    { href: '/reports', label: 'Reports', icon: FileText },
    { href: '/settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className="h-full flex flex-col p-4 md:p-6">
      {/* Logo */}
      <div className="mb-6 md:mb-8 flex items-center gap-3">
        <div className="h-10 w-10 bg-deepblue-500 rounded-lg flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
          POS
        </div>
        <div>
          <div className="text-sm font-bold text-slate-100">RetailHub</div>
          <div className="text-xs text-slate-400">Dubai Store</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded transition text-sm md:text-base ${
              isActive(item.href) ? 'bg-deepblue-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="border-t border-slate-800 pt-4 mt-4 space-y-3">
        <div className="flex items-center gap-3 px-3 md:px-4 py-3 bg-slate-800 rounded">
          <div className="h-9 w-9 bg-deepblue-600 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
            AD
          </div>
          <div className="flex-1 min-w-0 hidden md:block">
            <p className="text-sm font-semibold text-white truncate">Admin User</p>
            <p className="text-xs text-slate-400 truncate">Cashier</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-center md:justify-start gap-3 px-3 md:px-4 py-2 md:py-3 text-slate-300 hover:bg-slate-800 rounded transition text-sm md:text-base">
          <LogOut size={18} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </div>
  )
}
