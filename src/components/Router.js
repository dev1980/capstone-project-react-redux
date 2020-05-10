/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/index';
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
