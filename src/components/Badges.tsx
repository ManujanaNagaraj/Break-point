export function VegBadge() {
  return (
    <div className="w-5 h-5 rounded border-2 border-success flex items-center justify-center flex-shrink-0 bg-success/5">
      <div className="w-2 h-2 rounded-full bg-success"></div>
    </div>
  )
}

export function NonVegBadge() {
  return (
    <div className="w-5 h-5 rounded border-2 border-destructive flex items-center justify-center flex-shrink-0 bg-destructive/5">
      <div className="w-1.5 h-1.5 bg-destructive" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
    </div>
  )
}
