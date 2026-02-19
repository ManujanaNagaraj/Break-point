import React, { createContext, useContext, useState, useCallback } from 'react'
import { MenuItem, CartItem, Order, OrderType, PaymentMode } from '../types'

interface CartContextType {
  items: CartItem[]
  addItem: (item: MenuItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalAmount: number
  orderType: OrderType | null
  paymentMode: PaymentMode | null
  setOrderType: (type: OrderType) => void
  setPaymentMode: (mode: PaymentMode) => void
  placeOrder: () => Order | null
  lastOrder: Order | null
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [orderType, setOrderType] = useState<OrderType | null>(null)
  const [paymentMode, setPaymentMode] = useState<PaymentMode | null>(null)
  const [lastOrder, setLastOrder] = useState<Order | null>(null)

  const addItem = useCallback((item: MenuItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }, [])

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId)
      return
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const placeOrder = useCallback(() => {
    if (!orderType || !paymentMode || items.length === 0) {
      return null
    }

    const orderId = generateOrderId()
    const order: Order = {
      orderId,
      items: [...items],
      totalAmount,
      orderType,
      paymentMode,
      status: 'new',
      createdAt: new Date(),
    }

    setLastOrder(order)
    clearCart()
    setOrderType(null)
    setPaymentMode(null)

    return order
  }, [items, totalAmount, orderType, paymentMode, clearCart])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalAmount,
        orderType,
        setOrderType,
        paymentMode,
        setPaymentMode,
        placeOrder,
        lastOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const generateOrderId = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `BP${timestamp}${random}`
}
