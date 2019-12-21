import React, { FunctionComponent, Fragment } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import config from '../../config/config'
import { green, white } from 'styles/color'
import profilPicture from '../../assets/images/profil_picture.jpg'

const HeaderInner = styled.header`
  padding: 15px 30px ;
  box-shadow: 0 5px 15px 0 rgba(90,50,40,.15), 0 4px 8px 0 rgba(80,40,30,.1);
  background-color: ${white};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .profil-picture {
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
  }

  nav {
    display: flex;

    a {
      font-size: 14px;
      font-weight: 500;
      position: relative;

      &:before {
          position: absolute;
          left: 0;
          bottom: -3px;
          content: '';
          background-color: ${green};
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
`

const Header: FunctionComponent = () => {
  let location = useLocation()

  return (
    <HeaderInner>
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
    </HeaderInner>
  )
}

export default Header

