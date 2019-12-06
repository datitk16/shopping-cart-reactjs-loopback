import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './components/admin/Admin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/Routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {this.contentMenu(routes)}
        </div>
      </Router>

    );
  }
  contentMenu = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>;
  }

}

export default App;
