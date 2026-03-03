export function Card({ children, className = '' }: any) {
  return <div className={`rounded-lg bg-slate-900 border border-slate-800 ${className}`}>{children}</div>
}
