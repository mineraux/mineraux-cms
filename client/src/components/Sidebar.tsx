import React, { FunctionComponent, Fragment } from 'react'
import styled from 'styled-components'
import { green, white } from 'styles/color'
import profilPicture from '../assets/images/profil_picture.jpg'
import { marginApp } from 'styles/layout'
import { Link } from 'react-router-dom'
import config from '../config/config'

const SideBarInner = styled.div`
  height: 100vh;
  width: calc(200px + ${marginApp.horizontal}*2);
  padding: ${marginApp.vertical} ${marginApp.horizontal} ;
  box-shadow: 0 5px 15px 0 rgba(90,50,40,.15), 0 4px 8px 0 rgba(80,40,30,.1);
  background-color: ${white};

  .profil-picture {
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
    display: block;
    margin: 0 auto 80px auto;
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 14px;
    font-weight: 500;

    &.active {
      background-color: ${green};
      color: ${white};
      padding: 6px 15px;
    }

    &:not(:last-of-type){
      margin-bottom: 30px;
    }
  }
`

const SideBar: FunctionComponent = () => {
  return (
    <SideBarInner>
      <header>
        <img src={profilPicture} alt="" className="profil-picture"/>
        <nav>
          {Object.values(config.routes).map(link => {
            return (
              <Fragment key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </Fragment>
            )
          })}
        </nav>
      </header>
    </SideBarInner>
  )
}

export default SideBar

