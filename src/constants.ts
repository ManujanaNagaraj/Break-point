/**
 * Application constants
 */

export const APP_NAME = 'Break Point Café'
export const TABLE_NUMBER = 'Table 12'
export const DEFAULT_IMAGE_URL = 'https://images.unsplash.com/photo-1568901346375-23c9450ad190?w=500&q=80'

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
}

export const TOAST_DURATION = 2000

export const SEARCH_DEBOUNCE_DELAY = 300

export const MAX_QUANTITY = 10
export const MIN_QUANTITY = 1

export const RUPEE_SYMBOL = '₹'

export const ORDER_STATUS = {
  NEW: 'new',
  PREPARING: 'preparing',
  READY: 'ready',
  COMPLETED: 'completed',
} as const

export const ORDER_TYPES = {
  DINE_IN: 'dine-in',
  TAKEAWAY: 'takeaway',
} as const

export const PAYMENT_MODES = {
  CASH: 'cash',
  UPI: 'upi',
} as const

export const ITEM_TYPES = {
  VEG: 'veg',
  NON_VEG: 'non-veg',
} as const
