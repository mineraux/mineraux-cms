import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { green, white } from 'styles/color'

const InnerButton = styled.button `
  background: ${green};
  color: ${white};
  font-size: 18px;
  line-height: 24px;
  border-radius: 5px;
  padding: 6px 15px;

  &:hover {
    cursor: pointer;
  }
`


const Button: FunctionComponent = () => {
  return (
    <InnerButton className="button">Add new</InnerButton>
  )
}

export default Button