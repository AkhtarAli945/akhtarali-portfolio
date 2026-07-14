// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         bg: {
//           DEFAULT: '#0a0a14',
//           surface: '#12121f',
//           card: '#15152680',
//         },
//         border: {
//           DEFAULT: '#26263d',
//         },
//         brand: {
//           purple: '#8b5cf6',
//           blue: '#3b82f6',
//           violet: '#a855f7',
//         },
//         text: {
//           primary: '#f5f5fa',
//           secondary: '#9b9bb5',
//           muted: '#6b6b85',
//         },
//       },
//       fontFamily: {
//         display: ['"Space Grotesk"', 'sans-serif'],
//         body: ['"Inter"', 'sans-serif'],
//       },
//       backgroundImage: {
//         'brand-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
//         'hero-radial': 'radial-gradient(circle at 70% 30%, rgba(139,92,246,0.15), transparent 50%)',
//       },
//       boxShadow: {
//         glow: '0 0 40px rgba(139,92,246,0.25)',
//         card: '0 4px 24px rgba(0,0,0,0.4)',
//       },
//     },
//   },
//   plugins: [],
// }







/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          surface: 'var(--color-bg-surface)',
          card: 'var(--color-bg-card)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        },
        brand: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          violet: '#a855f7',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
        'hero-radial': 'radial-gradient(circle at 70% 30%, rgba(139,92,246,0.15), transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(139,92,246,0.25)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}