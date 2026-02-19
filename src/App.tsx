import { CartProvider } from './contexts/CartContext'
import AppContent from './AppContent'

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
