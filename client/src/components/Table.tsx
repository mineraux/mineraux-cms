import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { white } from 'styles/color'

const TableInner = styled.div `
  padding: 15px 25px;
  background-color: ${white};

  .table-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 22px 25px;
    border-radius: 5px;
    position: relative;
    transition: background-color ease .2s;

    &:hover:not(.table-header) {
      cursor: pointer;
      background-color: rgba(249, 247, 255, .6);
    }

    &::before {
      position: absolute;
      content:'';
      background-color: #BAC1BE;
      left: 0;
      width: 100%;
      height: 1px;
      bottom: 0px;
    }

    .table-cell {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`

export type Row = {
  labels: string[]
  onClick?: <T>(args?:T) => void
}

export type TableProps = {
  rowHeader: Row
  rowList: Row[]
}

const Table: FunctionComponent<TableProps> = ({rowHeader, rowList}) => {
  return (
    <TableInner className="table">
      <div className="table-header table-row">
        {rowHeader.labels.map((headerItem, index) => <span key={`header-table-${index}`} className="table-cell">{headerItem}</span>)}
      </div>
      {rowList.map((row, rowIndex) => {
        return (
          <div className="table-row" key={`row_${rowIndex}`} onClick={row.onClick}>
            {row.labels.map((value, valueIndex) => {
              return <span key={`row_${rowIndex}-value_${valueIndex}`} className="table-cell">{value}</span>
            })}
          </div>
        )
      })}
    </TableInner>
  )
}

export default Table