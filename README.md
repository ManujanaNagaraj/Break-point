# Break Point Café - QR-Based Food Ordering App

A premium, mobile-first QR-based restaurant food ordering web application built with React, Vite, TypeScript, and Tailwind CSS. Perfect for dine-in and takeaway orders with a sleek Swiggy/Zomato-inspired design.

## Features

✨ **Core Features**
- QR-based ordering system
- Browse menu by categories
- Search and filter dishes
- Real-time cart management
- Multiple order types (Dine-in, Takeaway)
- Multiple payment methods (Cash, UPI)
- Order confirmation with unique Order ID
- Responsive mobile-first design

## Tech Stack

- **Framework**: React 18.2
- **Bundler**: Vite 5.0
- **Language**: TypeScript 5.2
- **Styling**: Tailwind CSS 3.3
- **Icons**: Lucide React 0.292

## Project Structure

```
src/
├── components/          # React components
│   ├── Badges.tsx      # Veg/Non-veg badges
│   ├── CartSheet.tsx   # Shopping cart drawer
│   ├── CategoryTabs.tsx # Category filter tabs
│   ├── CheckoutSheet.tsx # Checkout form
│   ├── FoodCard.tsx    # Individual menu item card
│   ├── FloatingCartBar.tsx # Floating cart button
│   ├── Header.tsx      # Top header bar
│   ├── MenuGrid.tsx    # Menu grid display
│   ├── OrderConfirmation.tsx # Success screen
│   └── SearchBar.tsx   # Search input
├── contexts/           # React Context
│   └── CartContext.tsx # Cart state management
├── data.ts            # Menu items and categories
├── types.ts           # TypeScript interfaces
├── App.tsx            # Root component
├── AppContent.tsx     # Main app logic
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Color Palette

- **Primary**: `hsl(24, 95%, 53%)` - Warm orange
- **Background**: `hsl(30, 50%, 97.5%)` - Off-white
- **Card**: `hsl(0, 0%, 100%)` - Pure white
- **Success**: `hsl(142, 71%, 40%)` - Green
- **Destructive**: `hsl(0, 72%, 50%)` - Red

## Menu Items

16 carefully curated menu items across 5 categories:

- **Burgers** (4 items)
- **Pizza** (4 items)
- **Fries** (3 items)
- **Drinks** (3 items)
- **Desserts** (2 items)

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm npm run preview
```

## State Management

The app uses React Context API for state management:

- `CartContext`: Manages cart items, order type, payment mode, and order placement

### Cart Context Methods

- `addItem(item)` - Add item to cart
- `removeItem(itemId)` - Remove item from cart
- `updateQuantity(itemId, quantity)` - Update item quantity
- `clearCart()` - Clear all items
- `placeOrder()` - Create order and show confirmation
- `setOrderType(type)` - Set order type (dine-in/takeaway)
- `setPaymentMode(mode)` - Set payment mode (cash/upi)

## Component Overview

### Header
Sticky navigation bar with restaurant name, table number, and open status indicator.

### SearchBar
Full-width search input with icon for finding dishes by name or description.

### CategoryTabs
Horizontal scrollable tabs to filter menu by category (All, Burgers, Pizza, etc.).

### FoodCard
Individual menu item card with:
- Item image with hover zoom effect
- Veg/Non-veg badge
- Popular indicator (star badge)
- Description and price
- Quantity controls

### CartSheet
Bottom drawer showing:
- All cart items with individual quantity controls
- Item removal option
- Subtotal
- Proceed to checkout button

### CheckoutSheet
Checkout form with:
- Order type selection (Dine-in/Takeaway)
- Payment method selection (Cash/UPI)
- Order summary
- Place order button

### OrderConfirmation
Success page showing:
- Animated checkmark
- Order ID with copy button
- Order type and status
- Itemized receipt
- Total amount
- Place new order button

## Keyboard Shortcuts

- `Escape` - Close active drawer/modal

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images with lazy loading
- CSS animations use GPU acceleration
- Minimal re-renders with React Context
- Production build ~150KB gzipped

## Future Enhancements

- [ ] User authentication
- [ ] Order history
- [ ] Favorites/Wishlist
- [ ] Coupon codes
- [ ] Real-time order tracking
- [ ] Push notifications
- [ ] Multiple language support

## License

MIT

## Author

Manujana Nagaraj

---

Built with ❤️ for a seamless food ordering experience
