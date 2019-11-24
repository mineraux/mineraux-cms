import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import MyPages from 'pages/MyPages';
import SideBar from 'components/Sidebar';
import styled from 'styled-components';
import { marginApp } from 'styles/layout';

const Router: FunctionComponent = () => {

  const RouterInner = styled.main `
    width: 100%;
    padding: ${marginApp.vertical} ${marginApp.horizontal};
  `

  return (
    <>
      <SideBar />
      <Switch>
        <RouterInner>
          <Route exact path="/" component={Home} />
          <Route exact path="/myPages" component={MyPages} />
        </RouterInner>
      </Switch>
    </>
  )
}

export default Router

