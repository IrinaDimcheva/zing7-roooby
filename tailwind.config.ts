import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#150050',
        'green-medium': '#00CC61',
        'gray-50': '#F4F4F4',
        'gray-100': '#DCDCDC',
        'gray-300': '#787878',
        'gray-500': '#404040',
        yellow: '#FFE377',
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
