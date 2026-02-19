import { ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

interface FloatingCartBarProps {
  onViewCart: () => void
}

export default function FloatingCartBar({ onViewCart }: FloatingCartBarProps) {
  const { totalItems, totalAmount } = useCart()

  if (totalItems === 0) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-card to-card/95 backdrop-blur-sm border-t border-border pt-2">
      <div className="container mx-auto px-4 pb-4">
        <button
          onClick={onViewCart}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 px-6 shadow-warm-lg hover:bg-primary/90 active:scale-[0.98] transition-all font-semibold flex items-center justify-between animate-slide-up"
        >
          <span>{totalItems} item(s) • ₹{totalAmount}</span>
          <span className="flex items-center gap-2">
            View Cart
            <ShoppingCart className="w-5 h-5" />
          </span>
        </button>
      </div>
    </div>
  )
}
