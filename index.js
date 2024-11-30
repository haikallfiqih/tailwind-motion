const plugin = require('tailwindcss/plugin')
const fadeAnimations = require('./src/animations/fade')
const slideAnimations = require('./src/animations/slide')
const bounceAnimations = require('./src/animations/bounce')
const rotateAnimations = require('./src/animations/rotate')
const utils = require('./src/utils')

module.exports = plugin(function({ addUtilities, theme, matchUtilities }) {
  // Add all keyframes
  const allKeyframes = {
    ...fadeAnimations.keyframes,
    ...slideAnimations.keyframes,
    ...bounceAnimations.keyframes,
    ...rotateAnimations.keyframes,
  }

  // Add all animation utilities
  addUtilities({
    ...fadeAnimations.utilities,
    ...slideAnimations.utilities,
    ...bounceAnimations.utilities,
    ...rotateAnimations.utilities,
  })

  // Duration utilities
  matchUtilities(
    {
      'animate-duration': (value) => ({
        animationDuration: value,
      }),
    },
    { values: theme('animationDuration') }
  )

  // Timing function utilities
  matchUtilities(
    {
      'animate-timing': (value) => ({
        animationTimingFunction: value,
      }),
    },
    { values: theme('animationTiming') }
  )

  // Direction utilities
  addUtilities(utils.direction)

  // Fill mode utilities
  addUtilities(utils.fillMode)

  // Add keyframes to CSS
  Object.entries(allKeyframes).forEach(([name, keyframe]) => {
    addUtilities({
      [`@keyframes ${name}`]: keyframe,
    })
  })
}, {
  theme: {
    animationDuration: utils.duration,
    animationTiming: utils.timing,
  },
})
