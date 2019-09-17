/** @jsx jsx */
import React from 'react'
import {
  jsx,
  Header,
  Container,
  Flex,
  useColorMode,
  useThemeUI,
} from 'theme-ui'
import MenuButton from './menuButton'
// import NavLink from './nav-link'
// import Button from './button'
import Logo from './logo'
import Box from './box'

import Switch from 'react-switch'

const modes = ['light', 'dark']
const modeLabels = { light: '☀️', dark: '🌙' }

export default ({ menuOpen, setMenuOpen, nav }) => {
  const [colorMode, setMode] = useColorMode()
  const mode = colorMode || modes[0]

  const {
    theme: { colors },
  } = useThemeUI()

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <Header>
      <Container sx={{ p: [2, 3] }}>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Flex sx={{ alignItems: 'center' }}>
            <MenuButton
              onClick={e => {
                setMenuOpen(!menuOpen)
                if (!nav.current) return
                const navLink = nav.current.querySelector('a')
                if (navLink) navLink.focus()
              }}
            />
          </Flex>
          <Logo sx={{ width: '64px' }} />
          <Flex sx={{ alignItems: 'center' }}>
            <Switch
              checked={mode === 'dark'}
              onChange={cycleMode}
              width={64}
              height={32}
              offColor={colors.grey[300]}
              onColor={colors.grey[700]}
              offHandleColor={colors.primary}
              onHandleColor={colors.primary}
              checkedIcon={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    pl: 1,
                  }}
                >
                  {modeLabels.dark}
                </Box>
              }
              uncheckedIcon={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    pr: 1,
                  }}
                >
                  {modeLabels.light}
                </Box>
              }
            />
            {/* <Button sx={{ fontSize: 4, my: 2 }} onClick={() => {}}>
              🇺🇸
            </Button> */}
            {/* TODO: add language button */}
          </Flex>
        </Flex>
      </Container>
    </Header>
  )
}
