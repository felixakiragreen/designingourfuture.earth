/** @jsx jsx */
import { jsx } from 'theme-ui'

import Blockquote from '../components/blockquote'

const heading = Tag => props =>
  !!props.id ? (
    <Tag {...props}>
      <a
        href={`#${props.id}`}
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {props.children}
      </a>
    </Tag>
  ) : (
    <Tag {...props} />
  )

export default {
  pre: ({ children }) => <div>{children}</div>,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  p: ({ children, ...props }) => <div {...props}>{children}</div>,
  blockquote: props => <Blockquote {...props} />,
}

// sx={{
//   marginBlockStart: theme =>
//     console.warn({ theme }) || `${theme.space[5]}px`,
//   marginBlockEnd: theme => `${theme.space[5]}px`,
// }}
