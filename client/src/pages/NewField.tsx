import React, { FunctionComponent, useState } from 'react'
import { useCreateNewFieldMutation, FieldType, CreateNewFieldMutationVariables } from 'graphql/components'
import { useLocation } from 'react-router-dom'

const NewField: FunctionComponent = () => {
  const locationState = useLocation().state

  const [field, setField] = useState<CreateNewFieldMutationVariables>({
    order: 0,
    type: FieldType.Text,
    value: '',
    linkedPageId: locationState.id as string
  })
  const [createField] = useCreateNewFieldMutation()

  return (
    <>
      <h2>New field</h2>

      <form action="" onSubmit={async (e) => {
        e.preventDefault()
        await createField({variables:field})
      }}>
        <span>Field type</span>
        <input list="fieldTypes" placeholder="Select a field type" onChange={ e => {
          setField({...field, type:e.target.value as FieldType})
        }}/>
        <datalist id="fieldTypes">
          <option>text</option>
          <option>link</option>
        </datalist>

        <span>Value</span>
        <input placeholder="Please set a value" onChange={ e => {
          setField({...field, value:e.target.value})
        }} />

        <span>Order</span>
        <input placeholder="Please set an order" onChange={ e => {
          setField({...field, order:parseInt(e.target.value)})
        }} />

        <button type="submit">Create field</button>
      </form>
    </>
  )
}

export default NewField