module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
        extend: {
            animation: {
              'fade-in': 'fadeIn 1.5s ease-out',
            },
            keyframes: {
              fadeIn: {
                '0%': { opacity: '0', filter: 'blur(12px)' },
                '100%': { opacity: '1', filter: 'blur(0px)' },
              },
            },
          },
    },
    plugins: [],
  }