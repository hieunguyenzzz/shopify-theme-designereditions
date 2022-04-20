module.exports = {
  prefix: 'tw-',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    './**/*.liquid',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    namedGroups: ['one', 'two'],
    extend: {
    
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn','animate__fadeInDown','animate__fadeInUp', 'animate__bounceIn'],
      settings: {
        animatedSpeed: 500
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
  daisyui: {
    themes: [
      "light", // first one will be the default theme
    ],
  },
}
