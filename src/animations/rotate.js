module.exports = {
  keyframes: {
    'spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    'spin-reverse': {
      '0%': { transform: 'rotate(360deg)' },
      '100%': { transform: 'rotate(0deg)' },
    },
    'spin-bounce': {
      '0%': { transform: 'rotate(0deg)' },
      '50%': { transform: 'rotate(180deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
  utilities: {
    '.animate-spin': {
      animation: 'spin 1s linear infinite',
    },
    '.animate-spin-reverse': {
      animation: 'spin-reverse 1s linear infinite',
    },
    '.animate-spin-bounce': {
      animation: 'spin-bounce 1.5s ease-in-out infinite',
    },
  },
}
