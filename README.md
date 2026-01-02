# Artisan Haven - Handmade Store

Beautiful e-commerce storefront for handmade products built with React, Vite, and Tailwind CSS.

## Setup

1. Install dependencies:
```bash
   npm install
```

2. Run development server:
```bash
   npm run dev
```

3. Open browser to `http://localhost:5173`

## Build for Production
```bash
npm run build
```

## Project Structure

- `src/App.jsx` - Main application component
- `src/components/` - All UI components
- `src/data/` - Product catalog data
- `src/hooks/` - Custom React hooks (cart logic)

## Customization

- Edit `src/data/products.js` to modify products
- Update component styles in individual component files
- Add payment integration by following Stripe documentation

## Payment Integration

To add real payment processing:
1. Sign up for Stripe account
2. Install: `npm install @stripe/stripe-js @stripe/react-stripe-js`
3. Follow Stripe's React integration guide