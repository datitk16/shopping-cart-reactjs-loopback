import React from 'react';
import AdminHome from '../components/adminHome/AdminHome';
import AdminAccContainer from '../containers/AdminAccContainer/AdminAccContainer';
import NotFound from '../containers/NotFound/NotFound';
import AdminUtilities from '../components/AdminUtilities/AdminUtilities';

const routes=[

    {
        path:'/admin/account',
        exact:false,
        main:()=><AdminAccContainer/>
    },
    {
        path:'/admin',
        exact:false,
        main:()=><AdminHome/>
    },
    {
        path:'/utilities',
        exact:false,
        main:()=><AdminUtilities/>
    }
    
]
export default routes;