import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#150050',
        secondary: '#F4F4F4',
        accent: '#FFE377',
        'accent-dark': '#00CC61',
        'accent-dark-bg': '#EBFBF3',
        'gray-custom': {
          100: '#DCDCDC',
          200: '#777777',
          300: '#787878',
          500: '#404040',
          600: '#3B3A40',
        },
      },
      screens: {
        wide: '1140px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container-feed': {
          display: 'grid',
          'grid-template-columns': 'repeat(6, minmax(0, 1fr))',
          gap: '28px',
        },
        '.full-row': {
          'grid-column': 'span 6 / span 6',
        },
        '.half-row': {
          'grid-column': 'span 3 / span 3',
          'grid-row-start': '4',
          'grid-row-end': '7',
        },
        '.one-third': {
          'grid-column': 'span 2 / span 2',
          'grid-row': 'span 4 / span 1',
        },
        '.second-half-1': {
          'grid-column-start': '4',
          'grid-column-end': '-1',
          // 'grid-row-start': '4',
        },
        '.second-half-2': {
          'grid-column-start': '4',
          'grid-column-end': '-1',
          // 'grid-row-start': '5',
        },
        '.second-half-3': {
          'grid-column-start': '4',
          'grid-column-end': '-1',
          // 'grid-row-start': '6',
        },
      });
    }),
  ],
};
export default config;
