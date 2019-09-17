/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'

export default props => (
  <ThemeProvider
    theme={{
      styles: {
        p: {
          fontSize: 3,
        },
      },
    }}
  >
    <div
      {...props}
      sx={
        {
          // swap colors for an inverted effect
          //bg: 'primary',
          //color: 'background',
          //px: 3,
          //py: 4,
        }
      }
    />
  </ThemeProvider>
)
