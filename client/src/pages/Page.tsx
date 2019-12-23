import React, { FunctionComponent, Suspense } from 'react'
import { useFieldListQuery, Field, usePageFieldsQuery } from 'graphql/components'
import Table, { Row } from 'components/Table'
import { defaultTo, uniq, flatten, initial, pipe } from 'lodash/fp'
import { useLocation } from 'react-router-dom'

const TableFields: FunctionComponent = () => {
  const locationState = useLocation().state
  const { data, error } = usePageFieldsQuery({variables:{pageId:locationState.id}})


  if (error) {
    return <div>Something went wrong loading your fields.</div>
  }

  if (data) {

    const tableHeaderData: Row = {
      labels: pipe(
        (pageList: ReadonlyArray<Pick<Field, '_id' | 'type' | 'order' | 'value'>>) => pageList.map(page => Object.keys(page)),
        flatten,
        uniq,
        initial
      )(data!.singlePage!.linkedFields!)
    }

    const tableBodyData: Row[] = data!.singlePage!.linkedFields!.map(fields => {
      return {
        labels: defaultTo([], initial(Object.values(fields) as string[]))
      }
    })

    return <Table rowHeader={tableHeaderData} rowList={tableBodyData} />
  }

  return null
}

const Page: FunctionComponent = () => {
  return (
    <>
      <h2>Page</h2>
      <Suspense fallback={<div>Your fields are loading...</div>}>
        <TableFields />
      </Suspense>
    </>
  )
}

export default Page