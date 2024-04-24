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
        'gray-custom-50': '#F4F4F4',
        'gray-custom-100': '#DCDCDC',
        'gray-custom-300': '#787878',
        'gray-custom-500': '#404040',
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
