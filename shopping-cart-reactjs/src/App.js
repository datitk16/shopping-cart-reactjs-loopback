import React, { Component } from 'react';
import Product from './components/Products/Product';
import Header from './components/Header/Header';
import LayoutLeft from './components/LayouLeft/LayoutLeft';
import routes from './routes/routes';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div class="total-ads main-grid-border">
            <div class="container">
              <Header />
              <div class="ads-grid">
                <LayoutLeft />
                {this.contentMenu(routes)}

              </div>
            </div>
          </div>
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