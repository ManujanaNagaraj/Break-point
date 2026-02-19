import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { VegBadge, NonVegBadge } from './Badges'

interface CartSheetProps {
  isOpen: boolean
  onClose: () => void
  onCheckout: () => void
}

export default function CartSheet({
  isOpen,
  onClose,
  onCheckout,
}: CartSheetProps) {
  const { items, updateQuantity, removeItem, totalAmount } = useCart()

  if (!isOpen) {
    return null
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-warm-lg max-h-[80vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-xl font-bold font-display text-foreground">
            🛒 Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="p-8 text-center">
            <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-foreground font-semibold mb-2">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">
              Add some delicious items!
            </p>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 pb-4 border-b border-border last:border-0">
                  {/* Item Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {item.type === 'veg' ? <VegBadge /> : <NonVegBadge />}
                      <span className="font-semibold text-foreground text-sm truncate">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {item.description}
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-1">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground rounded-full px-2 py-1">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      className="p-1 rounded-full hover:bg-primary-foreground/10 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-5 text-center text-xs font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="p-1 rounded-full hover:bg-primary-foreground/10 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 rounded-lg hover:bg-destructive/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 border-t border-border bg-card p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">₹{totalAmount}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Taxes calculated at checkout
              </p>
              <button
                onClick={onCheckout}
                className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-semibold hover:bg-primary/90 active:scale-95 transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
