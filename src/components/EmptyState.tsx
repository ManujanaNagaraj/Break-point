import { Search, Trash2, RotateCcw } from 'lucide-react'

interface EmptyStateProps {
  type: 'search' | 'cart' | 'generic'
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}

export default function EmptyState({
  type,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  const getEmptyStateConfig = () => {
    switch (type) {
      case 'search':
        return {
          icon: Search,
          defaultTitle: 'No dishes found',
          defaultDescription: 'Try adjusting your search or filter settings',
          defaultActionLabel: 'Reset filters',
        }
      case 'cart':
        return {
          icon: Trash2,
          defaultTitle: 'Your cart is empty',
          defaultDescription: 'Add some delicious items to get started!',
          defaultActionLabel: null,
        }
      default:
        return {
          icon: RotateCcw,
          defaultTitle: 'No items available',
          defaultDescription: 'Please try again later',
          defaultActionLabel: null,
        }
    }
  }

  const config = getEmptyStateConfig()
  const Icon = config.icon

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="font-display font-semibold text-foreground text-lg mb-2">
        {title || config.defaultTitle}
      </h3>
      <p className="text-sm text-muted-foreground text-center max-w-xs mb-6">
        {description || config.defaultDescription}
      </p>
      {(actionLabel || config.defaultActionLabel) && onAction && (
        <button
          onClick={onAction}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {actionLabel || config.defaultActionLabel}
        </button>
      )}
    </div>
  )
}
