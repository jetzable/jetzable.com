module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    minWidth: {
      '1/2': '50%',
      '32': '8rem',
    },
    maxWidth: {
      '1/2': '50%',
      '32': '8rem',
      '36': '9rem',
    },
    maxHeight: {
      '1/2': '50%',
      '3/5': '60%',
      '32': '8rem',
      '36': '9rem',
    },
    extend: {
      backgroundImage: {
        'profile': "url('/assets/images/palm.jpg')"
      },
      boxShadow: {
        'neumorph': '-4px -4px 8px #d9d7d5, 4px 4px 5px #ffffff',
        'neuhover': '-2px -2px 6px rgba(255, 255, 255, .6), -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1)',
        'neuactive': 'inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15)'
      },
      colors: {
        'neumorph': '#efefef',
        'secondary': '#48BF84',
        'secondary-end': '#DE4D86',
        'body': '#457B9D',
        'card': '#efefef',
        'body-end': '#A8DADC',
        'selected-text': '#ff5f5f',
        'main': '#444',
        'nav': '#F1FAEE',
        'dot': '#20D5A8'
      },
      fontFamily: {
        'nunito': ["'Nunito'", 'sans-serif'],
        'lato': ["'Lato'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}
