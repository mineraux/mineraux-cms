import React, { FunctionComponent, useState } from 'react'
import { useCreateNewPageMutation } from 'graphql/components'

const NewPage: FunctionComponent = () => {
  const [title, setTitle] = useState('')
  const [createPage] = useCreateNewPageMutation()

  return (
    <>
      <h2>New Page</h2>
      <form action="" onSubmit={(e) => {
        e.preventDefault()
        createPage({variables:{title}})
      }}>
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <button type="submit">Add new page</button>
      </form>
    </>
  )
}

export default NewPage