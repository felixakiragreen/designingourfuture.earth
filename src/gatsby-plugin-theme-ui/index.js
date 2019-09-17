import { limeGreen as lime, tailwindColors } from './colors'

const {
  white,
  black,
  transparent,
  grey,
  red,
  orange,
  yellow,
  green,
  teal,
  blue,
  indigo,
  purple,
  pink,
} = tailwindColors

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
}

const colors = {
  text: grey[800],
  background: grey[100],
  muted: grey[200],
  primary: lime[500],
  secondary: lime[700],
  highlight: lime[300],
  modes: {
    dark: {
      text: grey[100],
      background: grey[900],
      muted: grey[800],
      primary: lime[500],
      secondary: lime[300],
      highlight: lime[700],
    },
  },
  lime,
  ...tailwindColors,
}
// const colors = {
//   text: 'hsl(10, 20%, 20%)',
//   background: 'hsl(10, 10%, 98%)',
//   primary: 'hsl(10, 80%, 50%)',
//   secondary: 'hsl(10, 60%, 50%)',
//   highlight: 'hsl(10, 40%, 90%)',
//   purple: 'hsl(250, 60%, 30%)',
//   muted: 'hsl(10, 20%, 94%)',
//   gray: 'hsl(10, 20%, 50%)',
//   modes: {
//     dark: {
//       text: 'hsl(210, 50%, 96%)',
//       background: 'hsl(230, 25%, 18%)',
//       primary: 'hsl(260, 100%, 80%)',
//       secondary: 'hsl(290, 100%, 80%)',
//       highlight: 'hsl(260, 20%, 40%)',
//       purple: 'hsl(290, 100%, 80%)',
//       muted: 'hsla(230, 20%, 0%, 20%)',
//       gray: 'hsl(210, 50%, 60%)',
//     },
//   },
// }

// const defaultSpace = [
//   0, 4, 8, 16, 32, 64, 128, 256, 512
// ]
/* fibonacci would be cool = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
]
*/
export const space = [
  0,
  4,
  8,
  12,
  16,
  24,
  32,
  64,
  96,
  128,
  196,
  256,
  384,
  512,
  640,
  768,
]

// 3 -> 4
// 4 -> 6

const link = {
  a: {
    color: 'primary',
    textDecoration: 'underline',
    ':hover': {
      color: 'secondary',
      textDecoration: 'none',
    },
  },
}
const hLink = {
  a: {
    color: 'inherit',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
}

export default {
  initialColorMode: 'light',
  colors,
  fonts: {
    body: 'Public Sans Web, system-ui, sans-serif',
    heading: 'inherit',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.618,
    heading: 1.25,
  },
  space,
  borderWidths: [0, 1, 2, 4, 8, 12, 16],
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '12px solid',
    '16px solid',
  ],
  textStyles: {
    heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
      bg: 'background',
      fontSize: 3,
    },
    p: {
      marginBlockStart: space[5],
      marginBlockEnd: space[5],
    },
    ...link,
    h1: {
      variant: 'textStyles.display',
      a: {
        color: 'inherit',
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'none',
        },
      },
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5,
      ...hLink,
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4,
      ...hLink,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3,
      ...hLink,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2,
      ...hLink,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1,
      ...hLink,
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      borderColor: grey[500],
    },
    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      pt: 1,
      pb: 1,
      pr: 1,
      pl: 0,
      borderBottom: 2,
      borderColor: 'inherit',
      color: 'secondary',
    },
    td: {
      textAlign: 'left',
      verticalAlign: 'top',
      pt: 1,
      pb: 1,
      pr: 1,
      pl: 0,
      borderBottom: 1,
      borderColor: 'inherit',
    },
    // hr: {
    //   border: 0,
    //   borderBottom: '1px solid',
    //   borderColor: 'lightgray',
    // },
  },
}
