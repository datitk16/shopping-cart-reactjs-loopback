import React from 'react';
import AdminHome from '../components/adminHome/AdminHome';
import AdminAccContainer from '../containers/AdminAccContainer/AdminAccContainer';
import AdminUtilities from '../components/AdminUtilities/AdminUtilities';
import AdminProducts from '../components/adminProducts/AdminProducts';
import AdminPay from '../components/adminPayBill/AdminPay';
import TransactionContainer from '../containers/TransactionContainer/TransactionContainer';

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
    },
    {
        path:'/admin/transaction',
        exact:false,
        main:()=><TransactionContainer/>
    }
    
]
export default routes;