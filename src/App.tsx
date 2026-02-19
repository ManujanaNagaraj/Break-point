import { CartProvider } from './contexts/CartContext'
import { ToastProvider } from './contexts/ToastContext'
import { ErrorBoundary } from './components/ErrorBoundary'
import AppContent from './AppContent'

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </CartProvider>
    </ErrorBoundary>
  )
}

export default App
