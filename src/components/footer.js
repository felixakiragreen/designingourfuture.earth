/** @jsx jsx */
import { jsx, Footer, Container } from 'theme-ui'
// import NavLink from './nav-link'

export default props => (
  <Footer
    sx={{
      py: 3,
    }}
  >
    <Container>
      <div sx={{ display: 'flex' }}>
        <div sx={{ mx: 'auto' }} />
        {/* Do Something. TODO: add social links */}
        {/* <NavLink to="/">Theme UI</NavLink> */}
        {/* <NavLink href="https://github.com/system-ui/theme-ui">GitHub</NavLink> */}
      </div>
    </Container>
  </Footer>
)
