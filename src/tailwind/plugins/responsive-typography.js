const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
  const typography = {
    '.text-body': {
      fontSize: '1rem',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
    },
    '.text-body-2': {
      fontSize: '1.125rem',
      lineHeight: '1.2',
      textAlign: 'center',
      letterSpacing: '0.06em',
    },
    '.text-h1': {
      fontSize: '2.25rem',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
    },
    '.text-h2': {
      fontSize: '2rem',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
    },
    '.text-h3': {
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h4': {
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
    },
    '.text-h5': {
      fontSize: '1.125rem',
      textTransform: 'uppercase',

      lineHeight: '1.2',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h6': {
      fontSize: '0.875rem',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h7': {
      fontSize: '0.875rem',
      lineHeight: '1.2',
      letterSpacing: '0.08em',
    },
    '.text-subtitle': {
      fontFamily: 'Montserrat',
      fontSize: '0.875rem',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
      color: '#5E5E5E',
    },
    '.text-button': {
      fontFamily: 'Montserrat',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: 500,
      lineHeight: '1.2',
      letterSpacing: '0.15em',
    },
    '.header-1': {
      fontSize: '1rem',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
    },
    '.header-2': {
      fontSize: '0.875rem',
      lineHeight: '1.2',
      fontWeight:'bold',
      letterSpacing: '0.06em',
    },
    '.categories': {
      fontFamily: 'Montserrat',
      fontSize: '0.875rem',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
    },
    '.text-title-2': {
      fontSize: '0.875rem',
      lineHeight: '1.2',
      letterSpacing: '0.06em',
    },
    '.notification': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '0.75rem',
      lineHeight: '1.25',
      letterSpacing: '0.06em',
    },
  }
  addComponents(typography)
})
