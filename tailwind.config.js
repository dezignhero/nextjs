module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        lightest: '#F3F3F3',
        lighter: '#DDDDDD',
        light2: '#BBBBBB',
        light: '#9C9C9C',
        DEFAULT: '#6C6C6C',
        dark: '#4C4C4C',
        darker: '#333333',
        darkest: '#222222',
      },
      steel: {
        lightest: '#F1F5F8',
        lighter: '#8B949B',
        light: '#768089',
        DEFAULT: '#677078',
        darker: '#4B5E64',
      },
      green: {
        light: '#2AC991',
        DEFAULT: '#22BB86',
        dark: '#13A77D',
        saturated: '#40C413',
      },
      navy: {
        lighter: '#4F7294',
        light: '#354E67',
        DEFAULT: '#266070',
        dark: '#1E5D6D',
        darker: '#1F374C', // '#1F434C',
        darkest: '#1E2F37',
        saturated: '#1E2F37',
      },
      orange: {
        light: '#FFA500',
        DEFAULT: '#FF9700',
        dark: '#F59500',
        saturated: '#FF8B00',
      },
      purple: {
        light: '#AB66F3',
        DEFAULT: '#6553B9',
      },
      pink: {
        darker: '#E43F51',
        dark: '#FF596B',
        DEFAULT: '#E78B8F',
      },
      lightblue: {
        light: '#E7F7FF',
        DEFAULT: '#CFF0FF',
      },
      transparent: 'transparent',
      vendor: {
        twitter: '#00ACED',
        linkedin: '#266070',
      },
    },
    fontSize: {
      '2xs': '0.625rem', // 10px
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      '2lg': '1.25rem', // 20px
      '3lg': '1.35rem', //
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem', // 36px
      '4xl': '3rem', // 48px
      '5xl': '4rem', // 64px
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.75rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      21: '5.25rem',
      22: '5.5rem',
      24: '6rem',
      25: '6.25rem',
      28: '7rem',
      30: '7.5rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
    },
    extend: {
      borderWidth: {
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
