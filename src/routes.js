import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import PollPageContainer from './components/PollPageContainer';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="poll/:id" component={PollPageContainer}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;