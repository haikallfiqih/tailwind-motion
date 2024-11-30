module.exports = {
  keyframes: {
    'bounce': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-25%)' },
    },
    'bounce-left': {
      '0%, 100%': { transform: 'translateX(0)' },
      '50%': { transform: 'translateX(-25%)' },
    },
    'bounce-right': {
      '0%, 100%': { transform: 'translateX(0)' },
      '50%': { transform: 'translateX(25%)' },
    },
    'bounce-scale': {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.1)' },
    },
  },
  utilities: {
    '.animate-bounce': {
      animation: 'bounce 1s ease-in-out infinite',
    },
    '.animate-bounce-left': {
      animation: 'bounce-left 1s ease-in-out infinite',
    },
    '.animate-bounce-right': {
      animation: 'bounce-right 1s ease-in-out infinite',
    },
    '.animate-bounce-scale': {
      animation: 'bounce-scale 1s ease-in-out infinite',
    },
  },
}
