import './reset.css'
import { createGlobalStyle } from "styled-components"
import { black, white, purple, lightGrey } from './color'
import { groteskMedium } from './fonts'

export default createGlobalStyle`
  body {
    color: ${black};
    font-family: ${groteskMedium}
  }

  a {
    color: ${black};
  }

  .page-title {
    font-size: 36px;
    margin-bottom: 80px;
  }

  .mineraux-form {
    display: flex;
    flex-wrap: wrap;

    .input-wrapper {
      display: flex;
      flex-direction: column;
      margin-right: 15px;

      span {
        max-width: 500px;
        margin-bottom: 5px;
        font-size: 16px;
      }

      input {
        appearance: none;
        outline: none;
        padding: 15px 12px;
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 19px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: ${lightGrey};
        background-color: ${white};
        transition: border-color 0.2s ease;

        &:focus {
          border-color: ${purple};
        }

      }
    }

    hr {
      width: 100%;
      flex-basis: 100%;
      height: 0;
      margin: 0;
      border: 0;
    }
  }
`
