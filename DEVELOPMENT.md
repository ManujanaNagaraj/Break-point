# Break Point Café - Development Guide

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm 7+

### Installation

```bash
# Clone the repository
git clone https://github.com/ManujanaNagaraj/Break-point.git
cd Break-point

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Architecture

### Directory Structure

```
src/
├── components/          # Reusable React components
├── contexts/           # React Context API providers
├── hooks/              # Custom React hooks
├── data.ts             # Static menu data
├── types.ts            # TypeScript type definitions
├── constants.ts        # App constants
├── utils.ts            # Utility functions
├── App.tsx             # Root component
├── AppContent.tsx      # Main app logic
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Component Documentation

### Core Components

#### Header
- **Purpose**: Display restaurant name, location, and open status
- **Props**: None
- **State**: None
- **Features**: Sticky positioning, animated status indicator

#### SearchBar
- **Purpose**: Search menu items by name or description
- **Props**: `value`, `onChange`
- **Features**: Real-time filtering, icon integration

#### CategoryTabs
- **Purpose**: Filter menu by category
- **Props**: `selectedCategory`, `onCategoryChange`
- **Features**: Horizontal scroll on mobile, active state styling

#### FoodCard
- **Purpose**: Display individual menu item
- **Props**: `item: MenuItem`
- **Features**: 
  - Image zoom on hover
  - Popular badge
  - Quantity controls
  - Add to cart functionality

#### CartSheet
- **Purpose**: Display cart items in bottom drawer
- **Props**: `isOpen`, `onClose`, `onCheckout`
- **Features**:
  - Item quantity management
  - Remove item button
  - Subtotal calculation
  - Proceed to checkout button

#### CheckoutSheet
- **Purpose**: Handle order type and payment selection
- **Props**: `isOpen`, `onClose`, `onSuccess`
- **Features**:
  - Order type selection (Dine-in/Takeaway)
  - Payment method selection (Cash/UPI)
  - Order summary
  - Place order functionality

#### OrderConfirmation
- **Purpose**: Display successful order confirmation
- **Props**: `order: Order`, `onNewOrder: () => void`
- **Features**:
  - Order ID display with copy button
  - Itemized receipt
  - Payment info display
  - Place new order button

### Utility Components

#### EmptyState
- **Purpose**: Display empty state messages
- **Props**: `type`, `title`, `description`, `actionLabel`, `onAction`
- **States**: `search`, `cart`, `generic`

#### Toast
- **Purpose**: Display temporary notifications
- **Props**: `message`, `type`, `onClose`
- **Types**: `success`, `error`, `warning`, `info`

#### ErrorBoundary
- **Purpose**: Catch and handle React errors
- **Features**: Error recovery UI, console logging

## State Management

### CartContext
Manages the global cart state including:
- `items`: CartItem[] - Items in cart
- `totalItems`: number - Total number of items
- `totalAmount`: number - Total price
- `orderType`: OrderType | null - Selected order type
- `paymentMode`: PaymentMode | null - Selected payment mode
- `lastOrder`: Order | null - Last placed order

### ToastContext
Manages toast notifications with methods:
- `addToast(message, type, duration)` - Add notification
- `removeToast(id)` - Remove notification

## Data Flow

1. **Menu Display**
   - Load menu data from `data.ts`
   - Filter by category and search query
   - Render FoodCard components

2. **Adding to Cart**
   - User clicks "Add" button on FoodCard
   - CartContext updates items array
   - FloatingCartBar appears

3. **Cart Management**
   - User can view/edit cart in CartSheet
   - Update quantities or remove items
   - Subtotal recalculates automatically

4. **Checkout**
   - Select order type and payment method
   - Form validation ensures both are selected
   - Submit order via `placeOrder()` method

5. **Order Confirmation**
   - Generate unique order ID
   - Display confirmation page with receipt
   - Option to place new order

## Styling

### Using Tailwind CSS

The app uses a custom Tailwind configuration with warm, appetizing colors:

- **Primary**: `hsl(24, 95%, 53%)` - Warm orange
- **Success**: `hsl(142, 71%, 40%)` - Green
- **Destructive**: `hsl(0, 72%, 50%)` - Red

### Custom Classes

```css
/* Scroll hiding */
.scrollbar-hide { /* Hides scrollbar while keeping scroll functionality */ }

/* Animations */
@keyframes fadeIn { /* 0→1 opacity, 10px down slide */ }
@keyframes slideUp { /* 20px up slide, 0→1 opacity */ }
@keyframes scaleIn { /* 0.9→1 scale, 0→1 opacity */ }

/* Shadows */
.shadow-warm-sm { /* Subtle warm shadow */ }
.shadow-warm-md { /* Medium warm shadow */ }
.shadow-warm-lg { /* Large warm shadow */ }
```

## Custom Hooks

### useLocalStorage
```typescript
const [value, setValue] = useLocalStorage(key, initialValue)
```

### useDebounce
```typescript
const debouncedValue = useDebounce(value, delay)
```

### useClickOutside
```typescript
useClickOutside(ref, callback)
```

### useKeyPress
```typescript
useKeyPress(targetKey, callback)
```

## Performance Optimization

1. **Code Splitting**: Components are modular and can be lazy-loaded
2. **Image Optimization**: Using optimized Unsplash images
3. **Memoization**: Use React.memo for expensive components
4. **Context Optimization**: Separate contexts to avoid unnecessary re-renders

## Common Tasks

### Adding a New Menu Item

```typescript
// In src/data.ts
{
  id: 'unique-id',
  name: 'Item Name',
  category: 'category',
  type: 'veg' | 'non-veg',
  price: 299,
  description: 'Item description',
  popular: false,
  available: true,
}
```

### Adding a New Toast Notification

```typescript
import { useToast } from './contexts/ToastContext'

const { addToast } = useToast()

// Show toast
addToast('Success message', 'success', 3000)
```

### Creating a New Component

```typescript
// src/components/NewComponent.tsx
import React from 'react'

interface NewComponentProps {
  prop1: string
  prop2: number
}

export default function NewComponent({ 
  prop1, 
  prop2 
}: NewComponentProps) {
  return (
    <div>
      {/* Component JSX */}
    </div>
  )
}
```

## Browser Compatibility

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: All modern versions

## Troubleshooting

### Cart not updating
- Check if CartContext is properly wrapping the app in App.tsx
- Verify CartProvider is placed above CartSheet and AppContent

### Styles not applied
- Clear Tailwind cache: `npm run build -- --reset`
- Check if tailwind.config.js content paths are correct

### TypeScript errors
- Run `npm run build` to check for compilation errors
- Verify all types are imported from types.ts

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit with clear messages
4. Push to your fork
5. Submit a pull request

## License

MIT

---

For more information, see [README.md](./README.md)
