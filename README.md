![](https://github.com/haikallfiqih/tailwind-motion/blob/main/assets/20241201_031216_tm.png)
# Tailwind Motion

A powerful Tailwind CSS plugin that adds advanced animation utilities to your project. 

## Installation

1. Install the plugin:

```bash
npm install @haikallfiqih/tailwind-motion
```

2. Add the plugin to your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('@haikallfiqih/tailwind-motion')
  ],
}
```

## Available Animations

### Fade Animations

```html
<div class="animate-fade-in">Fades in</div>
<div class="animate-fade-out">Fades out</div>
<div class="animate-fade-in-up">Fades in while moving up</div>
<div class="animate-fade-in-down">Fades in while moving down</div>
```

### Slide Animations

```html
<div class="animate-slide-in-up">Slides in from bottom</div>
<div class="animate-slide-in-down">Slides in from top</div>
<div class="animate-slide-in-left">Slides in from left</div>
<div class="animate-slide-in-right">Slides in from right</div>
```

### Bounce Animations

```html
<div class="animate-bounce">Bounces up and down</div>
<div class="animate-bounce-left">Bounces left</div>
<div class="animate-bounce-right">Bounces right</div>
<div class="animate-bounce-scale">Bounces with scale</div>
```

### Rotate Animations

```html
<div class="animate-spin">Spins clockwise</div>
<div class="animate-spin-reverse">Spins counter-clockwise</div>
<div class="animate-spin-bounce">Spins with bounce effect</div>
```

## Customization Options

### Duration

```html
<div class="animate-duration-75">75ms</div>
<div class="animate-duration-100">100ms</div>
<div class="animate-duration-150">150ms</div>
<div class="animate-duration-200">200ms</div>
<div class="animate-duration-300">300ms</div>
<div class="animate-duration-500">500ms</div>
<div class="animate-duration-700">700ms</div>
<div class="animate-duration-1000">1000ms</div>
```

### Timing Functions

```html
<div class="animate-timing-linear">Linear timing</div>
<div class="animate-timing-ease">Ease timing</div>
<div class="animate-timing-ease-in">Ease-in timing</div>
<div class="animate-timing-ease-out">Ease-out timing</div>
<div class="animate-timing-ease-in-out">Ease-in-out timing</div>
<div class="animate-timing-step-start">Step-start timing</div>
<div class="animate-timing-step-end">Step-end timing</div>
```

### Direction

```html
<div class="animate-normal">Normal direction</div>
<div class="animate-reverse">Reverse direction</div>
<div class="animate-alternate">Alternate direction</div>
<div class="animate-alternate-reverse">Alternate reverse direction</div>
```

### Fill Mode

```html
<div class="animate-none">No fill mode</div>
<div class="animate-forwards">Forwards fill mode</div>
<div class="animate-backwards">Backwards fill mode</div>
<div class="animate-both">Both fill mode</div>
```

## Combining Utilities

You can combine different animation utilities to create custom animations:

```html
<!-- Fade in slowly with ease-in timing and maintain final state -->
<div class="animate-fade-in animate-duration-1000 animate-timing-ease-in animate-forwards">
  Customized fade in
</div>

<!-- Bounce animation that alternates direction -->
<div class="animate-bounce animate-duration-700 animate-alternate">
  Alternating bounce
</div>

<!-- Slide in from right with custom timing -->
<div class="animate-slide-in-right animate-duration-500 animate-timing-ease-out">
  Smooth slide in
</div>
```

## Advanced Customization

### Custom Animation Duration

Add your own duration values in your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      animationDuration: {
        '2000': '2000ms',  // Custom 2 second duration
        '3000': '3000ms',  // Custom 3 second duration
        'slow': '5000ms',  // Named duration
      },
    },
  },
}
```

### Custom Timing Functions

Add custom easing functions:

```js
module.exports = {
  theme: {
    extend: {
      animationTiming: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'sharp': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
}
```

### Custom Animations

Create your own animations by adding keyframes and utilities:

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    require('@haikallfiqih/tailwind-motion'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.animate-custom': {
          animation: 'custom 1s ease-in-out',
        },
      }
      const newKeyframes = {
        '@keyframes custom': {
          '0%': { transform: 'scale(1) rotate(0)' },
          '50%': { transform: 'scale(1.5) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        },
      }
      addUtilities(newUtilities)
      addUtilities(newKeyframes)
    }),
  ],
}
```

Then use your custom animation:

```html
<div class="animate-custom">Custom animation</div>
```

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](https://github.com/haikallfiqih/tailwind-motion/blob/main/CONTRIBUTING.md).

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).
