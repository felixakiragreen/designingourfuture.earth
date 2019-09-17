/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, ThemeProvider } from 'theme-ui'
import { space } from '../gatsby-plugin-theme-ui'

export default ({ label = '‡', open = false, children }) => {
  const [show, setShow] = useState(open)
  // TODO: style it :)
  return (
    <>
      <span
        sx={{
          px: 1,
          py: 2,
          bg: 'muted',
          color: 'secondary',
          cursor: 'help',
        }}
        onClick={() => setShow(!show)}
      >
        {label}
      </span>
      {show && (
        <ThemeProvider
          theme={{
            styles: {
              p: {
                marginBlockStart: space[4],
                marginBlockEnd: space[4],
              },
            },
          }}
        >
          <div
            sx={{
              my: 1,
              mx: -3,
              px: 5,
              py: '0.1px',
              bg: 'muted',
              color: 'text',
              borderLeft: 2,
              borderRight: 2,
              borderColor: 'secondary',
            }}
          >
            {children}
          </div>
        </ThemeProvider>
      )}
    </>
  )
}
