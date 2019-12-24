import React, { FunctionComponent, Fragment } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import config from '../../config/config'
import { white, purple } from 'styles/color'
import profilPicture from '../../assets/images/profil_picture.jpg'
import { groteskSemiBold } from 'styles/fonts'

const HeaderInner = styled.header`
  padding: 15px 30px ;
  box-shadow: 0 5px 15px 0 rgba(90,50,40,.15), 0 4px 8px 0 rgba(80,40,30,.1);
  background-color: ${white};
  font-family: ${groteskSemiBold};

  .header-wrapper {
    max-width: 840px;
    min-width: 300px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      a {
        position: relative;

        &:before {
            position: absolute;
            left: 0;
            bottom: -3px;
            content: '';
            background-color: ${purple};
            width : 100%;
            height: 1px;
            transform: scaleX(0);
            transition: transform ease .3s;
            transform-origin: left;
          }

        &.active, &:hover {
          &:before {
            transform: scaleX(1);
          }
        }

        &:not(:last-of-type){
          margin-right: 30px;
        }
      }
    }

    .profil-picture {
      max-width: 40px;
      max-height: 40px;
      border-radius: 50%;
    }
  }
`

const Header: FunctionComponent = () => {
  let location = useLocation()

  return (
    <HeaderInner>
      <div className="header-wrapper">
        <nav>
          {Object.values(config.routes).map(link => {
            return (
              <Fragment key={link.path}>
                <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>{link.name}</Link>
              </Fragment>
            )
          })}
        </nav>
        <img src={profilPicture} alt="" className="profil-picture"/>
      </div>
    </HeaderInner>
  )
}

export default Header

