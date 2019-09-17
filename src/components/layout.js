/** @jsx jsx */
import React, { useState, useRef } from 'react'
import { jsx, Styled, Layout, Main, Container } from 'theme-ui'
import { Global } from '@emotion/core'

import './publicsans.css'

import Head from './head'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

export default props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  return (
    <Styled.root>
      <Head {...props} />
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            margin: 0,
          },
        }}
      />
      <Layout>
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main>
          <Container
            sx={{
              pt: 0,
              pb: 5,
              px: props.fullwidth ? 0 : 3,
              maxWidth: props.fullwidth ? 'none' : '',
            }}
          >
            <div
              sx={{
                display: ['block', 'flex'],
                mx: props.fullwidth ? 0 : -3,
              }}
            >
              <div
                ref={nav}
                onFocus={e => {
                  setMenuOpen(true)
                }}
                onBlur={e => {
                  setMenuOpen(false)
                }}
                onClick={e => {
                  setMenuOpen(false)
                }}
              >
                <Sidebar
                  open={menuOpen}
                  sx={{
                    display: [null, props.fullwidth ? 'none' : 'block'],
                  }}
                />
              </div>
              <div
                id="content"
                sx={{
                  width: '100%',
                  minWidth: 0,
                  px: props.fullwidth ? 0 : 3,
                }}
              >
                {props.children}
              </div>
            </div>
          </Container>
        </Main>
        <Footer />
      </Layout>
    </Styled.root>
  )
}
