import React, { FunctionComponent, useState } from 'react'
import { useCreateNewPageMutation } from 'graphql/components'
import { useHistory } from 'react-router-dom'

const NewPage: FunctionComponent = () => {
  const [title, setTitle] = useState('')
  const [createPage] = useCreateNewPageMutation()
  const history = useHistory()

  return (
    <>
      <h2 className='page-title'>New page</h2>
      <form className="mineraux-form" action="" onSubmit={async (e) => {
        e.preventDefault()
        await createPage({variables:{title}})
        history.push('./myPages')
      }}>
        <div className="input-wrapper">
          <span>Page title</span>
          <input type="text" onChange={e => setTitle(e.target.value)} />
        </div>
        <hr />
        <button className="button "type="submit">Add new page</button>
      </form>
    </>
  )
}

export default NewPage