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
  const tableHeaderData = ["order", "type", "value", "id"]
  const tableBodyData = [
    ["1", "titre", "Welcome on my blog", "#12"],
    ["2", "link", "facebook", "#15"],
    ["3", "text", "this start with ...", "#30"]
  ]
  return (
    <InnerMyPages>
      <h2 className='page-title'>My Pages</h2>
      <Table rowHeader={tableHeaderData} rowList={tableBodyData} />
      <Button/>
    </InnerMyPages>
  )
}

export default MyPages