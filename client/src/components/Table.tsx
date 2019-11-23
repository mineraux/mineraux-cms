import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { white, lightPink } from 'styles/color'

const TableInner = styled.div `
  width: 100%;
  padding: 15px 25px;
  background-color: ${white};
  /* display: grid;
  grid-template-areas:
    "table_header";
  grid-template-rows: 1fr 1fr 1fr 1fr; */

  .table-header {
    /* grid-area: table_header; */
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; */
  }

  .table-row {
    /* grid-area: table_row; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px 15px;
    border-radius: 5px;
    
    &:nth-of-type(2n) {
      background-color: ${lightPink};
    }
  }
`

const Table: FunctionComponent = () => {
  return (
    <TableInner className="table">
      <div className="table-header table-row">
        <span>order</span>
        <span>type</span>
        <span>value</span>
        <span>id</span>
      </div>
      <div className="table-row">
        <span>1</span>
        <span>titre</span>
        <span>Welcome on my blog</span>
        <span>#12</span>
      </div>
      <div className="table-row">
        <span>2</span>
        <span>link</span>
        <span>facebook</span>
        <span>#15</span>
      </div>
      <div className="table-row">
        <span>3</span>
        <span>text</span>
        <span>this start with ...</span>
        <span>#30</span>
      </div>
    </TableInner>
  )
}

export default Table