import React, { FunctionComponent, Suspense } from 'react'
import { Field, usePageFieldsQuery } from 'graphql/components'
import Table, { Row } from 'components/Table'
import { defaultTo, uniq, flatten, initial, pipe } from 'lodash/fp'
import { useLocation, Link } from 'react-router-dom'
import Button, { ButtonType } from 'components/Button'
import { ReadOnlyFieldPick } from 'interface/Field'

const TableFields: FunctionComponent = () => {
  const locationState = useLocation().state
  const { data, error } = usePageFieldsQuery({variables:{pageId:locationState.id}})

  if (error) {
    return <div>Something went wrong loading your fields.</div>
  }

  if (data) {

    const tableHeaderData: Row = {
      labels: pipe(
        (pageList: ReadOnlyFieldPick) => pageList.map(page => Object.keys(page)),
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
  const pathname = useLocation().pathname
  const locationState = useLocation().state
  const { LINK } = ButtonType

  return (
    <>
      <h2 className='page-title'>Page</h2>
      <Button label="Add new field" type={LINK} to={{ pathname:`${pathname}/newField`, state:{id:locationState.id} }} />
      <Suspense fallback={<div>Your fields are loading...</div>}>
        <TableFields />
      </Suspense>
    </>
  )
}

export default Page