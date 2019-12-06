import React, { Component } from 'react';
import './Admin.css'
import Footer from '../footer/Footer';
import Profile from '../profileUser/Profile';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import AdminHome from '../adminHome/AdminHome';
class Admin extends Component {
    render() {
        return (
            <section id="container">
                <Header />
                <aside>
                    <Sidebar />
                </aside>
                {/* <Profile/> */}
                <AdminHome/>
                {/* <Footer /> */}
            </section>
        );
    }
}

export default Admin;