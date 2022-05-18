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
      colors: {
        'body': '#457B9D',
        'card': '#EDFAFD',
        'body-end': '#A8DADC',
        'selected-text': '#ff5f5f',
        'main': '#1D3557',
        'nav': '#F1FAEE',
        'dot': '#20D5A8'
      },
      fontFamily: {
        'lato': ["'Lato'", 'sans-serif'],
        'rationale': ["'Rationale'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
