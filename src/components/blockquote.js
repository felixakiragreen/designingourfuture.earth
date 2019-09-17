/** @jsx jsx */
import { jsx, css } from 'theme-ui'

export default ({ children, ...props }) => (
  <blockquote
    {...props}
    css={css`
      background-color: nothing;
      &::before {
        content: '\201C';
        position: absolute;
        top: 50px;
        left: 12px;
        font-size: 128px;
        line-height: 32px;
        opacity: 0.15;
      }
      &::after {
        content: '\201D';
        position: absolute;
        bottom: -10px;
        right: 24px;
        font-size: 128px;
        line-height: 30px;
        opacity: 0.15;
      }
    `}
    sx={{
      position: 'relative',
      fontFamily: 'inherit',
      fontSize: 3,
      fontStyle: 'italic',
      bg: 'muted',
      mx: -6,
      px: 6,
      py: 4,
      borderLeft: 3,
      borderColor: 'secondary',
    }}
  >
    {children}
  </blockquote>
)
