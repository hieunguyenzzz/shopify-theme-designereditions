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
      fontFamily: {
        'body': ['var(--main-family)'],
        'heading': ['var(--heading-family)'],
      },
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
      {
        light: {
          ...require("daisyui/colors/themes")["[data-theme=light]"],
          "--rounded-box": "0rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0rem", // border radius rounded-btn utility class, used in buttons and similar element
        },
      },
    ],
  },
}
