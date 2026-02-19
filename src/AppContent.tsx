import { useState } from 'react'
import { useCart } from './contexts/CartContext'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryTabs from './components/CategoryTabs'
import MenuGrid from './components/MenuGrid'
import FloatingCartBar from './components/FloatingCartBar'
import CartSheet from './components/CartSheet'
import CheckoutSheet from './components/CheckoutSheet'
import OrderConfirmation from './components/OrderConfirmation'
import ScrollToTop from './components/ScrollToTop'

type View = 'menu' | 'confirmation'

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentView, setCurrentView] = useState<View>('menu')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const { lastOrder } = useCart()

  const handleCheckout = () => {
    setIsCheckoutOpen(true)
  }

  const handleOrderSuccess = () => {
    setCurrentView('confirmation')
    setIsCheckoutOpen(false)
    setIsCartOpen(false)
  }

  const handleNewOrder = () => {
    setCurrentView('menu')
  }

  if (currentView === 'confirmation' && lastOrder) {
    return <OrderConfirmation order={lastOrder} onNewOrder={handleNewOrder} />
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <Header />
      <div className="container mx-auto px-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoryTabs
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <MenuGrid searchQuery={searchQuery} category={selectedCategory} />
      </div>

      <FloatingCartBar
        onViewCart={() => setIsCartOpen(true)}
      />

      <CartSheet
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <CheckoutSheet
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccess={handleOrderSuccess}
      />

      <ScrollToTop />
    </div>
  )
}

export default AppContent
