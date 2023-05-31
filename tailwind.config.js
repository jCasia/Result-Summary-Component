/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      lightRed: '#ff5757',
      orangeYellow: '	#ffb01f',
      greenTeal: 'hsl(166, 100%, 37%)',
      cobaltBlue: 'hsl(234, 85%, 45%)',

      slateBlue: 'hsl(252, 100%, 67%)',
      royalBlue: 'hsl(241, 81%, 54%)',

      violetBlue: 'hsla(256, 72%, 46%, 1)',
      persianBlue: 'hsla(241, 72%, 46%, 0)',

      white: 'hsl(0, 0%, 100%)',
      paleBlue: 'hsl(221, 100%, 96%)',
      lightLavender: 'hsl(241, 100%, 89%)',
      darkGreyBlue: 'hsl(224, 30%, 27%)',
    },
    fontFamily: {
      HankenG: ['Hanken Grotesk'],
    },

    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      tall: { raw: '(min-height:800px)' },
      // => @media (min-height: 800px) { ... }
      //custom media
    },
  },
  plugins: [],
};
