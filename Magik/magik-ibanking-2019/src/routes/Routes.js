import React from 'react';
import Login from '../components/login/Login';
import Admin from '../components/admin/Admin';


const routes=[

    {
        path:'/',
        exact:true,
        main:()=><Login/>
    },
    {
        path:'/admin',
        exact:false,
        main:()=><Admin/>
    }
]
export default routes;