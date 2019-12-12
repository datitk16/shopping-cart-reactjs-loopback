import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './Login.css'
import ForgotPass from '../forgotPass/ForgotPass';
import axios from 'axios';
import CallApi from './../../utils/CallApi';
import swal from "sweetalert2";
import { createHashHistory } from 'history';
import {actUserRequest} from './../../actions/index'
class Login extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            code:false
        }
    }
    onChange = (event) => {
        //target thay doi input
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (e) => {
        actUserRequest()
        console.log(this.props)
        e.preventDefault();
      
        const { username, password } = this.state;
        console.log(this.state);
       
        return CallApi('login', 'POST', {
            "username": username,
            "password": password,
            "lang": "en"
        }, {
            "x-timo-devicereg": "1494035533:WEB:WEB:83:chrome",
            'Content-Type': 'application/json'
        }).then(res => {
            console.log(res.data)
            this.setState({
                code:!this.state.code
            })
            //truyen du lieu sang UthisserLogin/containers
            if (res.data.code == 200) {
                console.log(res.data.code)
                // console.log(this.props[0].history)
                
                localStorage.setItem('tokenTimo', res.data.data.token);
                swal.fire({
                    icon: 'success',
                    title: 'Bạn đã đăng nhập thành công!',
                    showConfirmButton: false,
                    timer: 2000

                })
                
                this.props[0].history.push("/admin")
            
            }
            else {
                swal.fire({
                    icon: 'error',
                    title: 'Lỗi rồi',
                    text: 'Tài khoản hoặc mật khẩu không chính xác!',
                })
               
            }
          
        })
            .catch(() => {
                // this.props.history.push('/login')
            })
    }

    render() {
        const {code}=this.state;
        console.log(code)
        
        return (
            <div id="login-page">
                <div className="container">
                    <form className="form-login" onSubmit={this.onSubmit}>
                        <h2 className="form-login-heading">Login Ibanking</h2>
                        <div className="login-wrap">
                            <input type="text"
                                className="form-control login__user"
                                placeholder="User ID"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            <input type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                      <button className="btn btn-theme btn-block login__user" type="submit"><i className="fa fa-lock"></i> ĐĂNG NHẬP</button>
                            <label className="checkbox ">
                                <a data-toggle="modal" href="login.html#myModal"> Quên mật khẩu?</a>
                            </label>
                        </div>
                        <ForgotPass />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;