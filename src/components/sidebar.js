/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
// import { Sidenav, AccordionNav } from '@theme-ui/sidenav'
import { Sidenav } from '@theme-ui/sidenav'
import NavLink from './navLink'
import Navigation from '../navigation.mdx'

const components = {
  a: NavLink,
}

export default props => (
  <Sidenav
    {...props}
    components={components}
    sx={{
      width: 256,
      flex: 'none',
      px: 3,
      pt: 3,
      pb: 4,
      mt: [64, 0],
    }}
  >
    <Navigation />
  </Sidenav>
)