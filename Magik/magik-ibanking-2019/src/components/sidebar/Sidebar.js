import React, { Component } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom'
class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar" class="nav-collapse ">
                <ul class="sidebar-menu" id="nav-accordion">
                    <p class="centered">
                        <NavLink to="/admin/account">
                        <img src={require('./../../img/mrdat.jpg')} class="img-circle" width="80" />
                        </NavLink>
                       
                    </p>
                    <h5 class="centered">Mr.Đạt</h5>
                    <li class="mt">
                        <NavLink to="/admin">
                            <i class="fa fa-dashboard"></i>
                            <span>Trang chủ</span>
                        </NavLink>


                    </li>
                    <li class="sub-menu">
                        <a href="javascript:;">
                            <i class="fa fa-desktop"></i>
                            <span>Tài khoản</span>
                        </a>
                        <ul class="sub">
                            <li><NavLink to="/admin/account">Thông tin người dùng</NavLink></li>
                            <li><NavLink to="/">Thông tài khoản</NavLink></li>
                            <li><NavLink to="/">Thông tin giao dịch</NavLink></li>
                        </ul>
                    </li>
                    <li class="sub-menu">
                        <a href="javascript:;">
                            <i class="fa fa-cogs"></i>
                            <span>Tiện ích</span>
                        </a>
                        <ul class="sub">
                            <li><a href="#">Du lịch</a></li>
                            <li><a href="calendar.html">Chuyển tiền từ nước ngoài</a></li>
                            
                        </ul>
                    </li>
                    <li class="sub-menu">
                        <a href="javascript:;">
                            <i class="fa fa-book"></i>
                            <span>Sản phẩm khác</span>
                        </a>
                        <ul class="sub">
                            <li><a href="blank.html">Timo Mastercard</a></li>
                            <li><a href="login.html">Bảo hiểm nhân thọ</a></li>
                            <li><a href="lock_screen.html">Biểu Liberty</a></li>
                            <li><a href="profile.html">Past Cash</a></li>
                            <li><a href="invoice.html">Đầu tư tích lũy</a></li>
                            <li><a href="pricing_table.html">Khoản vay VPBank</a></li>
                            
                        </ul>
                    </li>

                    <li class="sub-menu">
                        <a href="javascript:;">
                            <i class="fa fa-th"></i>
                            <span>Thanh toán</span>
                        </a>
                        <ul class="sub">
                            <li><a href="basic_table.html">Nhắc nợ</a></li>
                            <li><a href="responsive_table.html">Thanh hóa đơn</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="inbox.html">
                            <i class="fa fa-envelope"></i>
                            <span>Mail </span>
                            <span class="label label-theme pull-right mail-info">2</span>
                        </a>
                    </li>


                    <li>
                        <a href="google_maps.html">
                            <i class="fa fa-map-marker"></i>
                            <span>Ngân hàng quanh đây </span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;