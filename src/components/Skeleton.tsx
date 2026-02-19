interface SkeletonProps {
  count?: number
}

export function SkeletonCard() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-warm-sm animate-pulse">
      <div className="aspect-[4/3] bg-secondary" />
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="w-5 h-5 bg-secondary rounded" />
          <div className="h-4 bg-secondary rounded flex-1" />
        </div>
        <div className="h-3 bg-secondary rounded w-3/4" />
        <div className="h-3 bg-secondary rounded w-1/2" />
        <div className="flex justify-between pt-2">
          <div className="h-5 bg-secondary rounded w-20" />
          <div className="h-9 bg-secondary rounded-full w-20" />
        </div>
      </div>
    </div>
  )
}

export default function SkeletonGrid({ count = 6 }: SkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
