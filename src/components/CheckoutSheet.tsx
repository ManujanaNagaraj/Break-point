import { X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { OrderType, PaymentMode } from '../types'

interface CheckoutSheetProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function CheckoutSheet({
  isOpen,
  onClose,
  onSuccess,
}: CheckoutSheetProps) {
  const { orderType, setOrderType, paymentMode, setPaymentMode, placeOrder, totalAmount } =
    useCart()

  const handlePlaceOrder = () => {
    const order = placeOrder()
    if (order) {
      onSuccess()
    }
  }

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
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-warm-lg max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between rounded-t-3xl">
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          <h2 className="text-xl font-bold font-display text-foreground">Checkout</h2>
          <div className="w-10" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Order Type Selection */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Order Type</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setOrderType('dine-in' as OrderType)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  orderType === 'dine-in'
                    ? 'border-primary bg-primary/5 shadow-warm-md'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">🍽️</span>
                </div>
                <div className="font-semibold text-foreground text-sm">Dine In</div>
                <div className="text-xs text-muted-foreground">Eat at restaurant</div>
              </button>

              <button
                onClick={() => setOrderType('takeaway' as OrderType)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  orderType === 'takeaway'
                    ? 'border-primary bg-primary/5 shadow-warm-md'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">🥡</span>
                </div>
                <div className="font-semibold text-foreground text-sm">Takeaway</div>
                <div className="text-xs text-muted-foreground">Pack to go</div>
              </button>
            </div>
          </div>

          {/* Payment Mode Selection */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Payment Method</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMode('cash' as PaymentMode)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMode === 'cash'
                    ? 'border-primary bg-primary/5 shadow-warm-md'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">💵</span>
                </div>
                <div className="font-semibold text-foreground text-sm">Cash</div>
                <div className="text-xs text-muted-foreground">Pay at counter</div>
              </button>

              <button
                onClick={() => setPaymentMode('upi' as PaymentMode)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMode === 'upi'
                    ? 'border-primary bg-primary/5 shadow-warm-md'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">📱</span>
                </div>
                <div className="font-semibold text-foreground text-sm">UPI</div>
                <div className="text-xs text-muted-foreground">Digital payment</div>
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-muted rounded-xl p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between font-display font-bold text-lg text-primary mt-3 pt-3 border-t border-border">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t border-border bg-card p-4">
          <button
            onClick={handlePlaceOrder}
            disabled={!orderType || !paymentMode}
            className={`w-full rounded-xl py-4 font-semibold text-lg transition-all ${
              orderType && paymentMode
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95'
                : 'bg-muted text-muted-foreground opacity-50 cursor-not-allowed'
            }`}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  )
}
