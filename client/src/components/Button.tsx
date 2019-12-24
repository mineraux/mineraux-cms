import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { purple, white } from 'styles/color'
import { Link } from 'react-router-dom'

const InnerButton = styled.div `
  button,
  a {
    display: inline-block;
    cursor: pointer;
    padding: 0 16px;
    color: ${white};
    background-color: ${purple};
    font-size: 16px;
    line-height: 48px;
    outline: none;
    border-style: none;
    border-radius: 3px;
  }
`

export enum ButtonType {
  DEFAULT = 'default',
  LINK = 'link',
  SUBMIT = 'submit'
}

export type ButtonProps = {
  label: string
  type?: ButtonType
  onClick?: () => void
  to?: string
}

const Button: FunctionComponent<ButtonProps> = ({type = 'default', label, onClick, to}) => {
  const buttonDOM = (): JSX.Element => {
    if (type === ButtonType.LINK && to) {
      return <Link to={to}>{label}</Link>
    }

    if (type === ButtonType.SUBMIT) {
      return <button type="submit" onClick={onClick}>{label}</button>
    }

    return <button onClick={onClick}>{label}</button>
  }
  return (
    <InnerButton>
      {buttonDOM()}
    </InnerButton>
  )
}

export default Button