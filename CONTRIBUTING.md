# Contributing to Tailwind Motion

Thank you for your interest in contributing to the Tailwind Motion plugin! We welcome contributions from the community to help make this plugin even better.

## Project Structure

The plugin is organized into modular files for easy maintenance and extensibility:

```
src/
  ├── animations/
  │   ├── fade.js    - Fade animations
  │   ├── slide.js   - Slide animations
  │   ├── bounce.js  - Bounce animations
  │   └── rotate.js  - Rotation animations
  └── utils.js       - Common utilities (duration, timing, etc.)
```

## Adding New Animations

1. Create a new file in `src/animations/` following this structure:
```js
module.exports = {
  keyframes: {
    'animation-name': {
      '0%': { /* initial state */ },
      '50%': { /* intermediate state (optional) */ },
      '100%': { /* final state */ },
    },
    // Add more keyframes as needed
  },
  utilities: {
    '.animate-name': {
      animation: 'animation-name 0.5s ease-out',
    },
    // Add more utilities as needed
  },
}
```

2. Import your animation file in `index.js`:
```js
const newAnimations = require('./src/animations/your-animation')

// Add to allKeyframes
const allKeyframes = {
  ...fadeAnimations.keyframes,
  ...newAnimations.keyframes,  // Add your keyframes
}

// Add to utilities
addUtilities({
  ...fadeAnimations.utilities,
  ...newAnimations.utilities,  // Add your utilities
})
```

## Animation Guidelines

### Naming Conventions
- Use descriptive, hyphen-separated names for animations (e.g., 'fade-in', 'slide-up')
- Prefix utility classes with 'animate-' (e.g., '.animate-fade-in')
- Use clear, descriptive names that indicate the animation's purpose

### Performance Best Practices
- Prefer transform and opacity animations for better performance
- Avoid animating layout properties (width, height, padding, margin)
- Keep animations simple and efficient
- Test animations on low-end devices
- Consider reducing animation complexity for mobile devices

### Browser Compatibility
- Test animations in multiple browsers
- Provide fallbacks for older browsers when necessary
- Use standard CSS properties when possible
- Document any browser-specific limitations


## Development Workflow

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/new-animation-type
```

3. Install dependencies:
```bash
npm install
```

4. Make your changes:
   - Add new animation files
   - Update existing animations
   - Add tests if applicable
   - Update documentation

5. Test your changes:
   - Test with different Tailwind CSS versions
   - Test in different browsers
   - Test with different screen sizes
   - Verify all existing animations still work

6. Commit your changes:
```bash
git add .
git commit -m "feat: add new animation type"
```

7. Push to your fork:
```bash
git push origin feature/new-animation-type
```

8. Create a pull request

## Pull Request Guidelines

### Description
- Clearly describe the new animations or changes
- Explain the purpose and use cases
- Include examples of usage
- List any breaking changes
- Reference related issues

### Code Quality
- Follow existing code style
- Keep changes focused and minimal
- Add comments for complex animations
- Ensure code is properly formatted
- Remove any console.logs or debugging code

### Documentation
- Update README.md with new animations
- Add examples of usage
- Document any new configuration options
- Update type definitions if necessary

### Testing
- Add test cases for new animations
- Test with different configurations
- Verify browser compatibility
- Check performance impact

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/haikallfiqih/tailwind-motion.git
cd tailwind-motion
```

2. Install dependencies:
```bash
npm install
```

3. Create a test environment:
```bash
npm run dev
```

## Code Style

### JavaScript
- Use ES6+ features when appropriate
- Follow consistent indentation (2 spaces)
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused

### CSS/Animation
- Use consistent naming patterns
- Keep animations performant
- Follow CSS best practices
- Document animation parameters
- Consider accessibility

## Testing

### Browser Testing
- Test in major browsers
- Test on different devices
- Test with different screen sizes
- Verify animation performance

## Questions or Issues?

If you have questions or run into issues:

1. Check existing issues first
2. Create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details:
     - Browser version
     - Tailwind CSS version
     - Node.js version
     - Operating system

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
