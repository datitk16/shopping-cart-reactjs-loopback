import React, { Component } from 'react';
import Product from './components/Products/Product';
import Header from './components/Header/Header';
import LayoutLeft from './components/LayouLeft/LayoutLeft';
import ProductList from './components/Products/ProductList';

class App extends Component {
  render() {
    return (
      <div class="total-ads main-grid-border">
                <div class="container">
                    <Header />
                    <div class="ads-grid">
                        <LayoutLeft/>
                      <ProductList/>
                    </div>
                </div>
            </div>
    );
  }
}

export default App;