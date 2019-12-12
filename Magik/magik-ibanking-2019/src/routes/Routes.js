import React from 'react';
import Login from '../components/login/Login';
import Admin from '../components/admin/Admin';
import NotFound from '../containers/NotFound/NotFound';


const routes=[

    {
        path:'/admin',
        exact:false,
        main:()=><Admin/>
    },
    {
        path:'/',
        exact:true,
        main:(...props)=><Login  {...props}/>
    }
   
]
export default routes;