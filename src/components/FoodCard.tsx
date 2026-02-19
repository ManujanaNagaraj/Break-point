import { Plus, Minus, Trash2, Star } from 'lucide-react'
import { MenuItem } from '../types'
import { VegBadge, NonVegBadge } from './Badges'
import { useCart } from '../contexts/CartContext'

interface FoodCardProps {
  item: MenuItem
}

export default function FoodCard({ item }: FoodCardProps) {
  const { items, addItem, updateQuantity, removeItem } = useCart()
  const cartItem = items.find((i) => i.id === item.id)
  const quantity = cartItem?.quantity || 0

  const handleAdd = () => {
    addItem(item)
  }

  const handleIncrement = () => {
    if (cartItem) {
      updateQuantity(item.id, cartItem.quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (cartItem && quantity > 0) {
      if (quantity === 1) {
        removeItem(item.id)
      } else {
        updateQuantity(item.id, quantity - 1)
      }
    }
  }

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-all duration-300">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={
            item.image ||
            `https://images.unsplash.com/photo-${
              item.category === 'burgers'
                ? '1568901346375-23c9450ad190'
                : item.category === 'pizza'
                ? '1628840042255-645fac519a5b'
                : item.category === 'fries'
                ? '1584621298821-e1a45f40fc1f'
                : item.category === 'drinks'
                ? '1554866585-acbb35801931'
                : '1560080876-8f0cc5f87ec3'
            }?w=500&q=80`
          }
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = `https://images.unsplash.com/photo-1568901346375-23c9450ad190?w=500&q=80`
          }}
        />

        {/* Popular Badge */}
        {item.popular && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-medium">Popular</span>
          </div>
        )}

        {/* Add/Quantity Controls */}
        <div className="absolute bottom-3 right-3">
          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-warm-md hover:bg-primary/90 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Add</span>
            </button>
          ) : (
            <div className="flex items-center gap-1 bg-primary text-primary-foreground rounded-full px-2 py-1 shadow-warm-md">
              <button
                onClick={handleDecrement}
                className="p-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center text-sm font-semibold">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="p-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Badge + Name */}
        <div className="flex items-start gap-2 mb-2">
          {item.type === 'veg' ? <VegBadge /> : <NonVegBadge />}
          <h3 className="font-display font-semibold text-foreground truncate flex-1">
            {item.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div className="font-display font-bold text-lg text-foreground">
            ₹{item.price}
          </div>
          {!item.available && (
            <div className="text-xs font-medium text-destructive">Unavailable</div>
          )}
        </div>
      </div>
    </div>
  )
}
