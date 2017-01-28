import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ContestPage from './components/ContestPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="contest/:id" component={ContestPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;