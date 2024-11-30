module.exports = {
  keyframes: {
    'slide-in-up': {
      '0%': { transform: 'translateY(100%)' },
      '100%': { transform: 'translateY(0)' },
    },
    'slide-in-down': {
      '0%': { transform: 'translateY(-100%)' },
      '100%': { transform: 'translateY(0)' },
    },
    'slide-in-left': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(0)' },
    },
    'slide-in-right': {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(0)' },
    },
  },
  utilities: {
    '.animate-slide-in-up': {
      animation: 'slide-in-up 0.5s ease-out',
    },
    '.animate-slide-in-down': {
      animation: 'slide-in-down 0.5s ease-out',
    },
    '.animate-slide-in-left': {
      animation: 'slide-in-left 0.5s ease-out',
    },
    '.animate-slide-in-right': {
      animation: 'slide-in-right 0.5s ease-out',
    },
  },
}
