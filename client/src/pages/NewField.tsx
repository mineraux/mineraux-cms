import React, { FunctionComponent, useState } from 'react'
import { useCreateNewFieldMutation, FieldType, CreateNewFieldMutationVariables } from 'graphql/components'
import { useLocation } from 'react-router-dom'
import Button, { ButtonType } from 'components/Button'

const generateFieldTypeDom = (): JSX.Element[] => Object.values(FieldType).map((value, index) => <option key={index}>{value}</option>)

const NewField: FunctionComponent = () => {
  const { SUBMIT } = ButtonType

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
      <h2  className='page-title'>New field</h2>
      <form className="mineraux-form" action="" onSubmit={async (e) => {
        e.preventDefault()
        await createField({variables:field})
      }}>
        <div className="input-wrapper">
          <span>Field type</span>
          <input list="fieldTypes" placeholder="Select a field type" onChange={ e => {setField({...field, type:e.target.value as FieldType})}}/>
          <datalist id="fieldTypes">{generateFieldTypeDom()}</datalist>
        </div>

        <div className="input-wrapper">
          <span>Value</span>
          <input placeholder="Please set a value" onChange={ e => { setField({...field, value:e.target.value})}} />
        </div>

        <div className="input-wrapper">
          <span>Order</span>
          <input placeholder="Please set an order" onChange={ e => {setField({...field, order:parseInt(e.target.value)})}} />
        </div>
        <hr />
        <Button type={SUBMIT} label="Create field"/>
      </form>
    </>
  )
}

export default NewField