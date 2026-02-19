import { Check, Copy, Clock } from 'lucide-react'
import { useState } from 'react'
import { Order } from '../types'
import { VegBadge, NonVegBadge } from './Badges'

interface OrderConfirmationProps {
  order: Order
  onNewOrder: () => void
}

export default function OrderConfirmation({ order, onNewOrder }: OrderConfirmationProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(order.orderId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getOrderTypeLabel = (type: string) => {
    return type === 'dine-in' ? '🍽️ Dining' : '🥡 Takeaway'
  }

  const getPaymentModeLabel = (mode: string) => {
    return mode === 'cash' ? 'Cash' : 'UPI'
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Success Header */}
      <div className="bg-success text-success-foreground px-6 py-12 text-center animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-success-foreground/20 flex items-center justify-center mx-auto mb-4 animate-scale-in">
          <Check className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold font-display mb-2">Order Placed!</h1>
        <p className="text-success-foreground/90">Your order has been received</p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-6 max-w-md">
        {/* Order ID Card */}
        <div className="bg-card rounded-2xl shadow-warm-lg p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📋</span>
            <span className="text-sm text-muted-foreground font-medium">Order ID</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-2xl font-bold tracking-wider text-foreground">
              #{order.orderId}
            </p>
            <button
              onClick={handleCopyOrderId}
              className="flex-shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {copied ? (
                <Check className="w-5 h-5 text-success" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>
          {copied && (
            <p className="text-xs text-success font-medium mt-2">Copied to clipboard!</p>
          )}
        </div>

        {/* Order Info Card */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-card rounded-xl p-4 shadow-warm-sm">
            <div className="text-xs text-muted-foreground font-medium mb-2">Order Type</div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <span className="text-lg">
                {order.orderType === 'dine-in' ? '🍽️' : '🥡'}
              </span>
            </div>
            <p className="font-semibold text-foreground text-sm">
              {getOrderTypeLabel(order.orderType)}
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 shadow-warm-sm">
            <div className="text-xs text-muted-foreground font-medium mb-2">Status</div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <p className="font-semibold text-foreground text-sm capitalize">
              {order.status}
            </p>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="bg-card rounded-2xl shadow-warm-lg p-6 mb-4">
          <h2 className="font-display font-semibold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4 pb-4 border-b border-border">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="flex-shrink-0">
                  {item.type === 'veg' ? <VegBadge /> : <NonVegBadge />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
                <div className="text-sm font-semibold text-foreground flex-shrink-0">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-4">
            <span className="font-display font-bold text-foreground">Total</span>
            <span className="font-display font-bold text-2xl text-primary">
              ₹{order.totalAmount}
            </span>
          </div>

          {/* Payment Method */}
          <div className="bg-muted rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium">Payment</span>
            <span className="text-sm font-semibold text-foreground">
              {getPaymentModeLabel(order.paymentMode)}
            </span>
          </div>
        </div>

        {/* New Order Button */}
        <button
          onClick={onNewOrder}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 font-semibold hover:bg-primary/90 active:scale-95 transition-all animate-slide-up"
        >
          Place New Order
        </button>
      </div>
    </div>
  )
}
