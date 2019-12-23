import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import MyPages from 'pages/MyPages';
import Page from 'pages/Page';
import Header from 'components/Header/Header';
import styled from 'styled-components';
import { marginApp } from 'styles/layout';
import NewPage from 'pages/NewPage';

const Router: FunctionComponent = () => {

  const RouterInner = styled.main `
    padding: ${marginApp.vertical} ${marginApp.horizontal};
    max-width: 840px;
    min-width: 300px;
    margin: auto;
  `

  return (
    <>
      <Header />
      <Switch>
        <RouterInner>
          <Route exact path="/" component={Home} />
          <Route exact path="/myPages" component={MyPages} />
          <Route exact path="/pages/:pageSlug" component={Page} />
          <Route exact path="/newPage" component={NewPage} />
        </RouterInner>
      </Switch>
    </>
  )
}

export default Router

