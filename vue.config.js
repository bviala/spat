module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Automatically import scss variables in all components
        additionalData: `
          @import '@/assets/scss/variables.scss';
        `
      }
    }
  }
}
