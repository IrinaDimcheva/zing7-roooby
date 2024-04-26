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
        primary: '#150050',
        secondary: '#F4F4F4',
        accent: '#FFE377',
        'accent-dark': '#00CC61',
        'gray-custom': {
          100: '#DCDCDC',
          300: '#787878',
          500: '#404040',
        },
      },
      screens: {
        wide: '1140px',
      },
    },
  },
  plugins: [],
};
export default config;
