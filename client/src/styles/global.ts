import './reset.css'
import { createGlobalStyle } from "styled-components"
import { black, white, green } from './color'

export default createGlobalStyle`
  body, a {
    color: ${black};
    font-family:'Roboto', sans-serif;
  }

  .page-title {
    font-size: 36px;
    margin-bottom: 80px;
  }

  .button {
    background: ${green};
    color: ${white};
    font-size: 18px;
    line-height: 24px;
    border-radius: 5px;
    padding: 6px 15px;

    &:hover {
      cursor: pointer;
    }
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
        font-size: 15px;
      }

      input {
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: none;
        padding: 10px 15px;
        border: 1px solid #D8DDE2;
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
