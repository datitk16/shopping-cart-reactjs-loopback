import React from 'react';
import ProductList from '../components/Products/ProductList';
import EditProduct from '../components/EditProduct/EditProduct';



const routes = [

    {
        path: '/',
        exact: true,
        main: () => <ProductList />
    },
    {
        path: '/edit',
        exact: false,
        main: () => <EditProduct />
    }

]
export default routes;