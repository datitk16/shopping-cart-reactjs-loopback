import React, { Component } from 'react';
import Header from '../Header/Header';
import LayoutLeft from '../LayouLeft/LayoutLeft';
import { deleteProductById } from './../../api'
import Modal from './Modal';
class Product extends Component {
   delete=async(id)=>{
       await deleteProductById(id)
       await this.props.listenDeleteProduct()
   }
    render() {
        const { product } = this.props;
        console.log("product")
        return (

            <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
               
                <div>
                    <div id="container">
                        <div class="view-controls-list" id="viewcontrols">
                            <label>view :</label>
                            <a class="gridview"><i class="glyphicon glyphicon-th"></i></a>
                            <a class="listview active"><i class="glyphicon glyphicon-th-list"></i></a>
                        </div>
                        <div class="sort">
                            <div class="sort-by">
                                <label>Sort By : </label>
                                <select>
                                    <option value="">Most recent</option>
                                    <option value="">Price: Rs Low to High</option>
                                    <option value="">Price: Rs High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <ul class="list">
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
                                        onClick={()=>{
                                            this.delete(product.id)
                                           
                                        }}
                                        
                                        >Xóa</button>
                                        <button 
                                        id="modal"
                                        // data-toggle="modal" data-target="#exampleModalCenter"
                                        style={{
                                            padding: 10, backgroundColor: "blue",
                                            color: "white", border: 0
                                        }}>Sửa</button>
                                    </section>
                                    <section class="list-right">
                                        <span class="date">Today, 17:55</span>
                                        <span class="cityname">TP HCM</span>
                                    </section>
                                    <div class="clearfix"></div>
                                </li>
                          

                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;