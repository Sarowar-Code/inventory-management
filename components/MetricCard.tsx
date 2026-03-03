export function MetricCard({ title, value }: { title: string, value: string }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="text-xs text-slate-500">{title}</div>
      <div className="text-2xl font-semibold text-deepblue-700">{value}</div>
    </div>
  )
}
