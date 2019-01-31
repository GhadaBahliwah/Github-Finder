import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserDetails from './components/user-details';
import Home from './container/home';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/user-details' component={UserDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

