export function Table({ data }: { data: any[] }) {
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden flex flex-col">
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-slate-800 border-b border-slate-700 sticky top-0">
            <tr>
              <th className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200">Product</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200">Category</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200">Stock</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {data.map((d, idx) => (
              <tr key={d.id} className={`${idx % 2 === 0 ? 'bg-slate-900' : 'bg-slate-800/50'} hover:bg-slate-800/70 transition`}>
                <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
                  <div className="font-medium text-slate-100 text-xs sm:text-sm">{d.name}</div>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm text-slate-400">{d.category}</td>
                <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
                  {d.stock <= 5 ? (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-red-900 text-red-300 rounded text-xs font-medium">Low ({d.stock})</span>
                  ) : (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-900 text-green-300 rounded text-xs font-medium">In Stock ({d.stock})</span>
                  )}
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 font-semibold text-deepblue-400 text-xs sm:text-sm">AED {d.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
