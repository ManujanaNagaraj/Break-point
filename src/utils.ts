/**
 * Utility functions for the Break Point Café app
 */

/**
 * Format currency to Indian Rupees
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount)
}

/**
 * Generate unique order ID
 */
export const generateOrderId = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `BP${timestamp}${random}`
}

/**
 * Debounce function for search
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, length: number): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text
}

/**
 * Calculate total items count
 */
export const calculateTotalItems = (items: Array<{ quantity: number }>): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

/**
 * Calculate total amount
 */
export const calculateTotalAmount = (
  items: Array<{ price: number; quantity: number }>
): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

/**
 * Format date and time
 */
export const formatDateTime = (date: Date): string => {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}
