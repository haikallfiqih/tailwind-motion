# Tailwind Motion

A powerful Tailwind CSS plugin that adds advanced animation utilities to your project. Features modular animation types including fade, slide, bounce, and rotate animations with customizable duration, timing, direction, and fill modes.

## Installation

1. Install the plugin:
```bash
npm install @haikalfiqih/tailwind-motion
```

2. Add the plugin to your `tailwind.config.js`:
```js
module.exports = {
  plugins: [
    require('@haikalfiqih/tailwind-motion')
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

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](https://github.com/haikallfiqih/tailwind-motion/).

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).
