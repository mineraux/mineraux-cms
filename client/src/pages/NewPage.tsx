import React, { FunctionComponent, useState } from 'react'
import { useCreateNewPageMutation } from 'graphql/components'
import { useHistory } from 'react-router-dom'
import Button, { ButtonType } from 'components/Button'

const NewPage: FunctionComponent = () => {
  const [title, setTitle] = useState('')
  const [createPage] = useCreateNewPageMutation()
  const history = useHistory()

  const { SUBMIT } = ButtonType

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
          <input type="text" onChange={e => setTitle(e.target.value)} placeholder="Enter the page title"/>
        </div>
        <hr />
        <Button type={SUBMIT} label="Add new page"/>
      </form>
    </>
  )
}

export default NewPage