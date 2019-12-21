import { hot } from "react-hot-loader/root"
import React, { FC } from "react"
import styled from "styled-components/macro"
import { lightPink } from 'styles/color'
import { BrowserRouter } from 'react-router-dom'
import Router from 'config/Router'

const AppInner = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-color: ${lightPink};
`

const App: FC = () => {
  return (
    <AppInner>
      <BrowserRouter>
        <Router />
      </BrowserRouter>    
    </AppInner>
  )
}

export default hot(
  App
)
