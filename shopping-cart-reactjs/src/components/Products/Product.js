import React, { Component } from 'react';
import Header from '../Header/Header';
import LayoutLeft from '../LayouLeft/LayoutLeft';
import { deleteProductById } from './../../api'
import Modal from './Modal';
import {NavLink} from 'react-router-dom'
class Product extends Component {
   delete=async(id)=>{
       await deleteProductById(id)
       await this.props.listenDeleteProduct()
   }
    render() {
        const { product } = this.props;
        console.log("product")
        return (
<li>
                                                    <img src={product.image} title="" alt="" />
                                                    <section class="list-left">
                                                        <h5 class="title">{product.name}</h5>
                                                        <span class="adprice">${product.price}</span>
                                                        <p class="catpath">Books, Sports & Hobbies » Musical Instruments</p>
                                                        <button
                                                            style={{
                                                                padding: 10, backgroundColor: "Yellow",
                                                                color: "white", border: 0,
                                                                margin: 10,
                                                            }}
                                                            onClick={() => {
                                                                this.delete(product.id)

                                                            }}

                                                        >Xóa</button>
                                                        <NavLink
                                                            to="/edit"
                                                            style={{
                                                                padding: 10, backgroundColor: "blue",
                                                                color: "white", border: 0
                                                            }}>Sửa</NavLink>
                                                    </section>
                                                    <section class="list-right">
                                                        <span class="date">Today, 17:55</span>
                                                        <span class="cityname">TP HCM</span>
                                                    </section>
                                                    <div class="clearfix"></div>
                                                </li>
           
        );
    }
}

export default Product;