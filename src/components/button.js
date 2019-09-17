/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <button
    {...props}
    sx={{
      appearance: 'none',
      fontFamily: 'inherit',
      fontSize: 1,
      fontWeight: 'bold',
      m: 0,
      px: 2,
      py: 2,
      color: 'text',
      bg: 'muted',
      border: 0,
      borderRadius: 2,
      ':focus': {
        outline: 'none',
        boxShadow: theme => `0 0 2px 3px ${theme.colors.primary}`,
      },
    }}
  />
)
