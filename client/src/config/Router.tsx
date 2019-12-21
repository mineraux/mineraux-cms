import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import MyPages from 'pages/MyPages';
import Header from 'components/Header/Header';
import styled from 'styled-components';
import { marginApp } from 'styles/layout';

const Router: FunctionComponent = () => {

  const RouterInner = styled.main `
    padding: ${marginApp.vertical} ${marginApp.horizontal};
  `

  return (
    <>
      <Header />
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

