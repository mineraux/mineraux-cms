import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { white, lightPink } from 'styles/color'

const TableInner = styled.div `
  padding: 15px 25px;
  background-color: ${white};

  .table-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px 15px;
    border-radius: 5px;
    
    &:nth-of-type(2n) {
      background-color: ${lightPink};
    }
  }
`

type Row = string[]

type TableProps = {
  rowHeader: Row
  rowList: Row[]
}

const Table: FunctionComponent<TableProps> = ({rowHeader, rowList}) => {
  return (
    <TableInner className="table">
      <div className="table-header table-row">
        {rowHeader.map((headerItem, index) => <span key={`header-table-${index}`}>{headerItem}</span>)}
      </div>
      {rowList.map((row, rowIndex) => {
        return (
          <div className="table-row" key={`row_${rowIndex}`}>
            {row.map((value, valueIndex) => <span key={`row_${rowIndex}-value_${valueIndex}`}>{value}</span>)}
          </div>
        )
      })}
    </TableInner>
  )
}

export default Table