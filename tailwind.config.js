/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(24, 95%, 53%)',
          foreground: 'hsl(0, 0%, 100%)',
          50: 'hsl(24, 100%, 97%)',
          100: 'hsl(24, 98%, 95%)',
          200: 'hsl(24, 97%, 88%)',
          300: 'hsl(24, 96%, 75%)',
          400: 'hsl(24, 95%, 60%)',
          500: 'hsl(24, 95%, 53%)',
          600: 'hsl(24, 89%, 46%)',
          700: 'hsl(24, 84%, 39%)',
          800: 'hsl(24, 78%, 32%)',
          900: 'hsl(24, 73%, 27%)',
        },
        background: 'hsl(30, 50%, 97.5%)',
        card: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(20, 20%, 15%)',
        'muted-foreground': 'hsl(20, 10%, 45%)',
        secondary: 'hsl(30, 30%, 93%)',
        success: 'hsl(142, 71%, 40%)',
        'success-foreground': 'hsl(142, 71%, 97%)',
        destructive: 'hsl(0, 72%, 50%)',
        'destructive-foreground': 'hsl(0, 100%, 97%)',
        border: 'hsl(30, 20%, 90%)',
        muted: 'hsl(30, 30%, 93%)',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      borderRadius: {
        full: '9999px',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(234,88,12,0.08)',
        'warm-md': '0 4px 16px -4px rgba(234,88,12,0.12)',
        'warm-lg': '0 8px 32px -8px rgba(234,88,12,0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out forwards',
        'slide-up': 'slideUp 500ms ease-out forwards',
        'scale-in': 'scaleIn 300ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionProperty: {
        all: 'all',
      },
      transitionDuration: {
        200: '200ms',
        300: '300ms',
        500: '500ms',
      },
    },
  },
  plugins: [],
}
