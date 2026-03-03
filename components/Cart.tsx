'use client'
import { Minus, Plus, X } from 'lucide-react'
import Link from 'next/link'
import { useMemo } from 'react'

export function Cart({ items, onChange }: any) {
  const subtotal = useMemo(() => items.reduce((s: number, i: any) => s + i.price * i.qty, 0), [items])
  const vat = subtotal * 0.05
  const total = subtotal + vat

  function updateQty(id: number, delta: number) {
    const next = items.map((it: any) => it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it)
    onChange(next)
  }

  function removeItem(id: number) {
    onChange(items.filter((it: any) => it.id !== id))
  }

  function clearCart() {
    onChange([])
  }

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-slate-100">Cart</h3>
      <div className="flex-1 overflow-auto border-b border-slate-800">
        {items.length === 0 && (
          <div className="text-xs md:text-sm text-slate-500 text-center py-8">Cart is empty</div>
        )}
        {items.map((it: any) => (
          <div key={it.id} className="flex items-center gap-2 mb-2 md:mb-3 pb-2 md:pb-3 border-b border-slate-800 last:border-b-0">
            <div className="flex-1 min-w-0">
              <div className="text-xs md:text-sm font-medium text-slate-100 truncate">{it.name}</div>
              <div className="text-xs text-slate-400">AED {it.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <button className="p-0.5 md:p-1 hover:bg-slate-700 rounded" onClick={() => updateQty(it.id, -1)}>
                <Minus size={14} className="text-slate-400" />
              </button>
              <div className="w-5 md:w-6 text-center text-xs md:text-sm text-slate-300">{it.qty}</div>
              <button className="p-0.5 md:p-1 hover:bg-slate-700 rounded" onClick={() => updateQty(it.id, 1)}>
                <Plus size={14} className="text-slate-400" />
              </button>
              <button className="p-0.5 md:p-1 hover:bg-red-900/50 rounded ml-1" onClick={() => removeItem(it.id)}>
                <X size={14} className="text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 md:mt-4 pt-3 md:pt-4">
        <div className="flex justify-between text-xs md:text-sm mb-1 md:mb-2 text-slate-300">
          <span>Subtotal</span>
          <span>AED {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs md:text-sm mb-2 md:mb-3 text-slate-300">
          <span>VAT (5%)</span>
          <span>AED {vat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-base md:text-lg mb-3 md:mb-4 pb-3 md:pb-4 border-t border-slate-800 pt-3 md:pt-4">
          <span className="text-slate-100">Total</span>
          <span className="text-deepblue-400">AED {total.toFixed(2)}</span>
        </div>
        <Link href={`/payment?total=${total.toFixed(2)}&items=${items.length}`} className="block">
          <button className="w-full py-2 md:py-3 border-2 border-deepblue-600 text-deepblue-400 rounded font-semibold hover:bg-deepblue-600/10 text-sm md:text-base transition">
            Pay Now
          </button>
        </Link>
        <button
          onClick={clearCart}
          className="w-full py-2 text-slate-400 mt-2 text-xs md:text-sm border border-slate-700 rounded hover:bg-slate-800 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}
