export interface MenuItem {
  id: string
  name: string
  category: 'burgers' | 'pizza' | 'fries' | 'drinks' | 'desserts'
  type: 'veg' | 'non-veg'
  price: number
  description: string
  popular: boolean
  image?: string
  available?: boolean
}

export interface CartItem extends MenuItem {
  quantity: number
}

export interface Order {
  orderId: string
  items: CartItem[]
  totalAmount: number
  orderType: 'dine-in' | 'takeaway'
  paymentMode: 'cash' | 'upi'
  status: 'new' | 'preparing' | 'ready' | 'completed'
  createdAt: Date
  tableNumber?: string
}

export type OrderType = 'dine-in' | 'takeaway'
export type PaymentMode = 'cash' | 'upi'
