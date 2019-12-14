import React, { Component } from 'react';
import Product from './Product';
import { getProduct } from './../../api'
import Modal from './Modal';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    getProduct = async () => {
        const productList = await getProduct();
        this.setState({ productList })
        console.log(this.state.productList)

    }
    async componentDidMount() {
        await this.getProduct();
    }
    listenDeleteProduct = async () => {
        await this.getProduct();
    }
    // deleteProduct=async ()=>{
    //     const deleteProduct=await deleteProductById
    // }
    renderProduct = () => {
        return this.state.productList.map((item, index) => {
            return <Product
                product={item}
                key={index}
                listenDeleteProduct={this.listenDeleteProduct}
            />
        })
    }
    render() {
        return (
            <div>
                <div class="agileinfo-ads-display col-md-9">
                    <div class="wrapper">
                        <div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                            <ul id="myTab" class="nav nav-tabs nav-tabs-responsive" role="tablist">
                                <li role="presentation" class="active">
                                    <a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
                                        <span class="text">Tất cả sản phẩm</span>
                                    </a>
                                </li>
                                <li role="presentation" class="next">
                                    <a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">
                                        <span class="text">Điện thoại </span>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#samsa" role="tab" id="samsa-tab" data-toggle="tab" aria-controls="samsa">
                                        <span class="text">Máy tính</span>
                                    </a>
                                </li>
                            </ul>
                            <div id="myTabContent" class="tab-content">

                                {this.renderProduct()}

                                <div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledby="profile-tab">
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

                                                <a href="single.html">
                                                    <li>
                                                        <img src="images/b13.jpg" title="" alt="" />
                                                        <section class="list-left">
                                                            <h5 class="title">looked up one of the more obscure Latin words</h5>
                                                            <span class="adprice">$599</span>
                                                            <p class="catpath">Books, Sports & Hobbies » Musical Instruments</p>
                                                        </section>
                                                        <section class="list-right">
                                                            <span class="date">Today, 17:02</span>
                                                            <span class="cityname">City name</span>
                                                        </section>
                                                        <div class="clearfix"></div>
                                                    </li>
                                                    <div class="clearfix"></div>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="samsa" aria-labelledby="samsa-tab">
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

                                                <a href="single.html">
                                                    <li>
                                                        <img src="images/b13.jpg" title="" alt="" />
                                                        <section class="list-left">
                                                            <h5 class="title">looked up one of the more obscure Latin words</h5>
                                                            <span class="adprice">$599</span>
                                                            <p class="catpath">Books, Sports & Hobbies » Musical Instruments</p>
                                                        </section>
                                                        <section class="list-right">
                                                            <span class="date">Today, 17:02</span>
                                                            <span class="cityname">City name</span>
                                                        </section>
                                                        <div class="clearfix"></div>
                                                    </li>
                                                    <div class="clearfix"></div>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul class="pagination pagination-sm">
                                    <li><a href="#">Prev</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">6</a></li>
                                    <li><a href="#">7</a></li>
                                    <li><a href="#">8</a></li>
                                    <li><a href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <Modal/>
            </div>
        );
    }
}

export default ProductList;