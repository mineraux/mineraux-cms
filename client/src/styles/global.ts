import './reset.css'
import { createGlobalStyle } from "styled-components"
import { black } from './color'

export default createGlobalStyle`
  body, a {
    color: ${black};
    font-family:'Roboto', sans-serif;
  }

  .page-title {
    font-size: 36px;
    margin-bottom: 80px;
  }
`
