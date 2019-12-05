import React, { Component } from 'react';
import './Sidebar.css'
class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar" class="nav-collapse ">
                <ul class="sidebar-menu" id="nav-accordion">
                    <p class="centered"><a href="profile.html">
                        <img src={require('./../../img/mrdat.jpg')} class="img-circle" width="80" />
                    </a></p>
                    <h5 class="centered">Mr.Đạt</h5>
                    <li class="mt">
                        <a href="index.html" >
                            <i class="fa fa-dashboard"></i>
                            <span>Trang chủ</span>
                        </a>
                    </li>
                    <li class="sub-menu">
                        <a href="javascript:;">
                            <i class="fa fa-desktop"></i>
                            <span>Tài khoản</span>
                        </a>
                        <ul class="sub">
                            <li><a href="general.html">General</a></li>
                            <li><a href="buttons.html">Buttons</a></li>
                            <li><a href="panels.html">Panels</a></li>
                            <li><a href="font_awesome.html">Font Awesome</a></li>
                        </ul>
                    </li>
                    <li class="sub-menu">
                        <a href="javascript:;">
                            <i class="fa fa-cogs"></i>
                            <span>Tiện ích</span>
                        </a>
                        <ul class="sub">
                            <li><a href="grids.html">Grids</a></li>
                            <li><a href="calendar.html">Calendar</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="todo_list.html">Todo List</a></li>
                            <li><a href="dropzone.html">Dropzone File Upload</a></li>
                            <li><a href="inline_editor.html">Inline Editor</a></li>
                            <li><a href="file_upload.html">Multiple File Upload</a></li>
                        </ul>
                    </li>
                    <li class="sub-menu">
                        <a href="javascript:;">
                            <i class="fa fa-book"></i>
                            <span>Sản phẩm khác</span>
                        </a>
                        <ul class="sub">
                            <li><a href="blank.html">Blank Page</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="lock_screen.html">Lock Screen</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="pricing_table.html">Pricing Table</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="404.html">404 Error</a></li>
                            <li><a href="500.html">500 Error</a></li>
                        </ul>
                    </li>
                  
                    <li class="sub-menu">
                        <a href="javascript:;">
                            <i class="fa fa-th"></i>
                            <span>Thanh toán</span>
                        </a>
                        <ul class="sub">
                            <li><a href="basic_table.html">Basic Table</a></li>
                            <li><a href="responsive_table.html">Responsive Table</a></li>
                            <li><a href="advanced_table.html">Advanced Table</a></li>
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