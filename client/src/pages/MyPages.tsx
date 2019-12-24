import React, { FunctionComponent, Suspense } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Table, { Row } from 'components/Table'
import { usePagesNameQuery, Page } from 'graphql/components'
import { uniq, flatten, initial, pipe } from 'lodash/fp'
import Button, { ButtonType } from 'components/Button'

const TablePages: FunctionComponent = () => {
  const { data, error } = usePagesNameQuery()
  const history = useHistory()

  if (error) {
    return <div>Something went wrong loading your fields.</div>
  }

  if (data) {
    const tableBodyData: Row[] = data.pages.map(page => {
      return {
        onClick: () => history.push(`/pages/${page.title}`, {id:page._id}),
        labels: initial(Object.values(page) as string[])
      }
    })

    const tableHeaderData: Row = {
      labels: pipe(
          (pageList: ReadonlyArray<Pick<Page, 'title' | '_id'>>) => pageList.map(page => Object.keys(page)),
          flatten,
          uniq,
          initial
        )(data.pages)
    }

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

  const { LINK } = ButtonType

  return (
    <InnerMyPages>
      <h2 className='page-title'>My Pages</h2>
      <Button type={LINK} to="/newPage" label="Add new page"/>
      {/* <Link to="/newPage" className="button">Add new</Link> */}
      <Suspense fallback={<div>Your pages are loading...</div>}>
        <TablePages />
      </Suspense>
    </InnerMyPages>
  )
}

export default MyPages