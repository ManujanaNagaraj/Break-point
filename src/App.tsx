import { CartProvider } from './contexts/CartContext'
import { ErrorBoundary } from './components/ErrorBoundary'
import AppContent from './AppContent'

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ErrorBoundary>
  )
}

export default App
