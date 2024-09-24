/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  
  plugins: [
    // Custom utility for the gradient mask
    function ({ addUtilities }) {
      addUtilities(
        {
          '.mask-gradient': {
            'mask-image': 'linear-gradient(to right, transparent, black 75%)',
            '-webkit-mask-image': 'linear-gradient(to right, transparent, black 75%)',
          },
        },
        ['responsive', 'hover']
      );
    },

    // Custom utility to hide scrollbars
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hide': {
            /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            /* Hide scrollbar for IE and Edge */
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none', /* For Firefox */
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}
