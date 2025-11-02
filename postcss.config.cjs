// postcss.config.cjs (CORRECT CJS SYNTAX)

module.exports = {
  plugins: {
    // This line tells PostCSS to run the 'tailwindcss' package
    // to process the @tailwind directives in your CSS.
    'tailwindcss': {},
    
    // Autoprefixer is optional but recommended
    'autoprefixer': {},
  }
}