import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegistredCostumers from './pages/RegistredCostumers';
import Clients from './pages/Clients';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registred-costumers" component={RegistredCostumers} />
          <Route path="/clients" component={Clients} />
        </Switch>
      </BrowserRouter>
    )
  }
}
