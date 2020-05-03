/*eslint no-trailing-spaces: [2, { "skipBlankLines": true }]*/
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../App';
import Recipe from './Recipe';

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />  
        <Route path="/recipe/:id" component={Recipe} />  
      </Switch>
    </BrowserRouter>
  </Provider>

);

export default Router;
