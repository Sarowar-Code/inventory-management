'use client'
import { Menu, X } from 'lucide-react'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <title>Inventory Management POS</title>
        <meta name="description" content="Professional POS and Inventory Dashboard" />
      </head>
      <body className="bg-slate-950 text-slate-100 m-0 p-0">
        <div className="flex flex-col h-screen w-screen overflow-hidden">
          {/* Header - Always visible */}
          <header className="bg-slate-900 border-b border-slate-800 h-16 flex items-center px-3 sm:px-4 md:px-6 flex-shrink-0">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg mr-2 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex-1 min-w-0">
              <Header />
            </div>
          </header>

          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 md:hidden top-16"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar - Desktop always visible, Mobile overlay */}
            <aside
              className={`w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto transition-all duration-300 flex-shrink-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } md:translate-x-0 fixed md:relative top-16 md:top-auto h-[calc(100vh-64px)] md:h-full z-40`}
            >
              <div onClick={() => setSidebarOpen(false)}>
                <Sidebar />
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
