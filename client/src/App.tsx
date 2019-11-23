import { hot } from "react-hot-loader/root"
import React, { FC } from "react"
import styled from "styled-components/macro"
import Sidebar from './components/Sidebar'
import Table from 'components/Table'
import { lightPink } from 'styles/color'
import { marginApp } from 'styles/layout'
import Button from 'components/Button'

const AppInner = styled.div`
  display:flex;
  max-width: 100%;
  background-color: ${lightPink};


  main {
    width: 100%;
    padding: ${marginApp.vertical} ${marginApp.horizontal};

    .table {
      margin-bottom: 23px;
    }
    .button {
      margin-left: 25px;
    }

  }
`

const App: FC = () => {
  return (
    <AppInner>
      <Sidebar />
      <main>
        <h2 className='page-title'>My Pages</h2>
        <Table/>
        <Button/>
      </main>
    </AppInner>
  );
}

export default hot(
  App
)
