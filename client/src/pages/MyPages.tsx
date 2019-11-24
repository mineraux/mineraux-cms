import React, { FunctionComponent } from 'react'
import Button from 'components/Button'
import Table from 'components/Table'
import styled from 'styled-components'

const MyPages: FunctionComponent = () => {
  const InnerMyPages = styled.div `
    .table {
      margin-bottom: 23px;
    }
    .button {
      margin-left: 25px;
    }
  `
  return (
    <InnerMyPages>
      <h2 className='page-title'>My Pages</h2>
      <Table/>
      <Button/>
    </InnerMyPages>
  )
}

export default MyPages