import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './components/admin/Admin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/Routes'
import Login from './components/login/Login';
import AdminUtilities from './components/AdminUtilities/AdminUtilities';

class App extends Component {
  render() {
    return (
     
      <Router>
        <Switch> 
          {this.contentMenu(routes)} 
        </Switch>
      </Router>
    );
  }
  contentMenu = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          exact={route.exact}
          path={route.path} 
          component={route.main}
        />
      })
      
    return result
    }
  }

}

export default App;
