export default {
  breakpoints: [
    '769px', '1025px', '1280px'
  ],
  space: [
    0,
    2,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    body: 'RobotoMono, monospace',
    // heading: '"Quarto A", "Quarto B", serif',
    heading: 'Lato, serif',
  },
  fontSizes: [
    14,
    16,
    18,
    19,
    24,
    27,
    30,
    38,
    42,
    48,
    56,
    64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  sizes: {
    default: "90vw",
    xsmall: "375px",
    small: "640px",
    medium: "768px",
    large: "1024px",
    max: "1400px",
  },
  layout: {
    container: {
      width: ['90%','80%'],
      maxWidth: 'max',
      mx: 'auto'
    },
    medium: {
      width: '100%',
      maxWidth: 'medium',
      px: 4,
      mx: 'auto'
    }
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#9ABCAA',
    secondary: '#C05E3A',
    muted: '#FCEEE4',
    dark: '#1E251E',
    light: '#FCF9F8',
    lightGray: '#fafafa',
    gray: "#e0e0e0",
    lightblue: "#BFEEF9",
    bidetBlue: '#00B3DC',
    holidayRed: '#D6001C'
  },
  shadows: {
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    regular: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    large: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  },
  radii: {
    small: "1px",
    regular: "3px",
    medium: "6px",
    round: "99px",
  },
  buttons: {
    primary: {
      px: 4,
      py: 4,
      fontWeight: 'heading',
      fontFamily: 'body',
      color: 'white',
      borderRadius: '1px',
      bg: 'primary',
      cursor: 'pointer',
    },
    secondary: {
      px: 4,
      py: 4,
      fontWeight: 'heading',
      fontFamily: 'body',
      color: 'dark',
      borderRadius: '1px',
      bg: 'light',
      border: '3px solid',
      borderColor: 'dark',
      cursor: 'pointer',
    },
    dark: {
      px: 4,
      py: 4,
      fontWeight: 'heading',
      fontFamily: 'body',
      color: 'white',
      borderRadius: '1px',
      bg: 'dark',
      cursor: 'pointer',
    },
    smallText: {
      px: 4,
      py: 4,
      fontWeight: 'heading',
      fontFamily: 'body',
      color: 'white',
      textTransform: 'uppercase',
      borderRadius: '1px',
      fontSize: ["12px","14px","18px"],
      bg: 'dark',
      cursor: 'pointer',
    },
    nav: {
      px: 3,
      py: 2,
      fontWeight: 'heading',
      fontFamily: 'heading',
      color: 'dark',
      textTransform: 'uppercase',
      borderRadius: '3px',
      bg: 'white',
      cursor: 'pointer',
    },
    light: {
      px: 4,
      py: 4,
      fontWeight: 'heading',
      fontFamily: 'body',
      color: 'light',
      borderRadius: '1px',
      bg: 'transparent',
      border: '3px solid',
      borderColor: 'light',
      cursor: 'pointer',
    },
    red: {
      px: 4,
      py: 4,
      fontWeight: 'heading',
      fontFamily: 'body',
      color: 'white',
      borderRadius: '1px',
      border: '1px solid #fff',
      bg: 'holidayRed',
      cursor: 'pointer',
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      borderRadius: 'regular',
      my: 4,
      p: 4,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: 'medium',
        outline: 'none',
      },
    },
    select: {
      backgroundColor: 'white',
      borderColor: 'gray',
      borderRadius: 'regular',
      width: "100%",
      my: 4,
      p: 4,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: 'medium',
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'dark',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: 'medium',
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'dark',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      fontSize: [6,6,7,8],
      mt: "0px",
      light: {
        color: 'light'
      }
    },
    h2: {
      color: 'dark',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [6,6,6,7],
      mt: "0px",
      light: {
        color: 'light'
      }
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4,4,5,5],
      light: {
        color: 'light'
      }
    },
    h4: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [3,3,3,3],
      light: {
        color: 'light'
      }
    },
    h5: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: [1,1,2,2],
    },
    h6: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: [0,1,1],
      light: {
        color: 'light'
      }
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: [2,2,2,3],
    },
    a: {
      color: 'primary',
      fontFamily: 'body',
      fontWeight: 'heading',
      lineHeight: 'body',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    li: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      my: 3,
      fontSize: [1],
      header: {
        fontFamily: 'heading',
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    img: {
      maxWidth: '100%'
    }
  }
}