module.exports = {
  keyframes: {
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    'fade-out': {
      '0%': { opacity: '1' },
      '100%': { opacity: '0' },
    },
    'fade-in-up': {
      '0%': {
        opacity: '0',
        transform: 'translateY(10px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
    'fade-in-down': {
      '0%': {
        opacity: '0',
        transform: 'translateY(-10px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
  utilities: {
    '.animate-fade-in': {
      animation: 'fade-in 0.5s ease-in-out',
    },
    '.animate-fade-out': {
      animation: 'fade-out 0.5s ease-in-out',
    },
    '.animate-fade-in-up': {
      animation: 'fade-in-up 0.5s ease-out',
    },
    '.animate-fade-in-down': {
      animation: 'fade-in-down 0.5s ease-out',
    },
  },
}
