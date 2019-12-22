import React, { FunctionComponent, Suspense } from 'react'
import Button from 'components/Button'
import Table from 'components/Table'
import styled from 'styled-components'
import { useFieldListQuery, Field } from 'graphql/components'
import { uniq, flatten, initial, pipe } from 'lodash/fp'

const TableFields: FunctionComponent = () => {
  const { data, error } = useFieldListQuery()

  if (error) {
    return <div>Something went wrong loading your fields.</div>
  }

  if (data) {
    const tableHeaderData = pipe(
      (fieldList: ReadonlyArray<Field>) => fieldList.map(field => Object.keys(field)),
      flatten,
      uniq,
      initial
    )(data.fieldList)

    const tableBodyData = data.fieldList.map(field => initial(Object.values(field) as string[]))

    return <Table rowHeader={tableHeaderData} rowList={tableBodyData} />
  }

  return null
}

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
      <Suspense fallback={<div>Your fields are loading...</div>}>
        <TableFields />
      </Suspense>
      <Button/>
    </InnerMyPages>
  )
}

export default MyPages