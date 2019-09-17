/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './components/layout'

// fullwidth={props.location.pathname === '/'}
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props} fullwidth={false} children={element} />
)
