import React, { Component } from 'react';
import './Admin.css'
import Footer from '../footer/Footer';
import Profile from '../profileUser/Profile';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import AdminHome from '../adminHome/AdminHome';
import AdminAccount from '../adminAcc/AdminAccount';
import routes from './../../routes/RoutesAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminUtilities from '../AdminUtilities/AdminUtilities';


class Admin extends Component {
    //xử lý token khi đăng nhập liên tục và token dùng để truy cập vẫn dùng token cũ
   
    render() {
       
        return (
                <section id="container">
                   
                    <Header />
                    <aside>
                        <Sidebar />
                    </aside>
                   
                        {this.contentMenu(routes)}
                   

                    <Footer />
                </section>

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

export default Admin;