import React, { FunctionComponent, useState } from 'react'
import { useCreateNewPageMutation } from 'graphql/components'
import { useHistory } from 'react-router-dom'

const NewPage: FunctionComponent = () => {
  const [title, setTitle] = useState('')
  const [createPage] = useCreateNewPageMutation()
  const history = useHistory()

  return (
    <>
      <h2>New Page</h2>
      <form action="" onSubmit={async (e) => {
        e.preventDefault()
        await createPage({variables:{title}})
        history.push('./myPages')
      }}>
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <button type="submit">Add new page</button>
      </form>
    </>
  )
}

export default NewPage