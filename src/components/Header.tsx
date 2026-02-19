export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border shadow-warm-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-start">
        <div>
          <h1 className="text-xl font-bold font-display text-foreground">
            Break Point Café
          </h1>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <span>📍</span>
            <span>Table 12</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/30">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          <span className="text-xs font-medium text-success">Open Now</span>
        </div>
      </div>
    </header>
  )
}
