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

## Testing

1. Create test cases in the `test` directory
2. Test with different Tailwind CSS versions
3. Test in different browsers
4. Test with different screen sizes

## Code Style

- Use consistent indentation (2 spaces)
- Follow JavaScript best practices
- Use meaningful variable and function names
- Add comments for complex logic

## Questions or Issues?

If you have questions or run into issues:
1. Check existing issues
2. Create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
