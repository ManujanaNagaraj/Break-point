import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { ToastType } from '../contexts/ToastContext'

interface ToastProps {
  id: string
  message: string
  type: ToastType
  onClose: () => void
}

export default function Toast({
  message,
  type,
  onClose,
}: ToastProps) {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />
      case 'error':
        return <AlertCircle className="w-5 h-5" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />
      case 'info':
        return <Info className="w-5 h-5" />
      default:
        return null
    }
  }

  const getStyles = () => {
    const baseStyles = 'flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg pointer-events-auto'
    const typeStyles: Record<ToastType, string> = {
      success: 'bg-success text-success-foreground',
      error: 'bg-destructive text-destructive-foreground',
      warning: 'bg-yellow-500 text-white',
      info: 'bg-primary text-primary-foreground',
    }
    return `${baseStyles} ${typeStyles[type]}`
  }

  return (
    <div className={`${getStyles()} animate-slide-up`}>
      <span className="flex-shrink-0">{getIcon()}</span>
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 hover:opacity-75 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
