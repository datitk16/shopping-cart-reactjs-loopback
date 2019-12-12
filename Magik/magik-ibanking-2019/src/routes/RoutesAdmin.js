import React from 'react';
import AdminHome from '../components/adminHome/AdminHome';
import AdminAccContainer from '../containers/AdminAccContainer/AdminAccContainer';
import NotFound from '../containers/NotFound/NotFound';
import AdminUtilities from '../components/AdminUtilities/AdminUtilities';
import adminProducts from '../components/adminProducts/AdminProducts';
import AdminProducts from '../components/adminProducts/AdminProducts';
import AdminPay from '../components/adminPayBill/AdminPay';

const routes=[
    {
        path:'/admin',
        exact:true,
        main:()=><AdminHome/>
    },
    {
        path:'/admin/account',
        exact:false,
        main:()=><AdminAccContainer/>
    },
   
    {
        path:'/admin/utilities',
        exact:false,
        main:()=><AdminUtilities/>
    },
    {
        path:'/admin/products',
        exact:false,
        main:()=><AdminProducts/>
    },
    {
        path:'/admin/paybill',
        exact:false,
        main:()=><AdminPay/>
    }
    
]
export default routes;