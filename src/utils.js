// Duration and timing utilities
module.exports = {
  duration: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms',
  },
  timing: {
    'linear': 'linear',
    'ease': 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    'step-start': 'step-start',
    'step-end': 'step-end',
  },
  direction: {
    '.animate-normal': {
      animationDirection: 'normal',
    },
    '.animate-reverse': {
      animationDirection: 'reverse',
    },
    '.animate-alternate': {
      animationDirection: 'alternate',
    },
    '.animate-alternate-reverse': {
      animationDirection: 'alternate-reverse',
    },
  },
  fillMode: {
    '.animate-none': {
      animationFillMode: 'none',
    },
    '.animate-forwards': {
      animationFillMode: 'forwards',
    },
    '.animate-backwards': {
      animationFillMode: 'backwards',
    },
    '.animate-both': {
      animationFillMode: 'both',
    },
  },
}
