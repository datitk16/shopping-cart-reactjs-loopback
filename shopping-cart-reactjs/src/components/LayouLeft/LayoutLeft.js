import React, { Component } from 'react';

class LayoutLeft extends Component {
    render() {
        return (
            <div class="side-bar col-md-3">
                <div class="search-hotel">
                    <h3 class="agileits-sear-head">Sản phẩm bạn muốn tìm kiếm</h3>
                    <form>
                        <input type="text" value="Product name..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Product name...';}" required="" />
                        <input type="submit" value=" " />
                    </form>
                </div>

                <div class="range">
                    <h3 class="agileits-sear-head">GIá</h3>
                    <ul class="dropdown-menu6">
                        <li>

                            <div id="slider-range"></div>
                            <input type="text" id="amount" style={{ border: 1, color: "while", fontWeight: "normal" }} />
                        </li>
                    </ul>


                </div>
                <div class="w3-brand-select">
                    <h3 class="agileits-sear-head">Thể loại</h3>
                    <select class="selectpicker" data-live-search="true">
                        <option data-tokens="All">All</option>
                        <option data-tokens="Competitive Exam">Competitive Exam</option>
                        <option data-tokens="Education % Training">Education % Training</option>
                        <option data-tokens="School Books">School Books</option>
                        <option data-tokens="Children">Children</option>
                        <option data-tokens="Other Books">Other Books</option>
                    </select>
                </div>
                <div class="w3ls-featured-ads">
                    <h2 class="sear-head fer">Thông tin sản phẩm mới nhất</h2>
                    <div class="w3l-featured-ad">
                        <a href="single.html">
                            <div class="w3-featured-ad-left">
                                <img src="images/f1.jpg" title="ad image" alt="" />
                            </div>
                            <div class="w3-featured-ad-right">
                                <h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
                                <p>$ 450</p>
                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                    <div class="w3l-featured-ad">
                        <a href="single.html">
                            <div class="w3-featured-ad-left">
                                <img src="images/f2.jpg" title="ad image" alt="" />
                            </div>
                            <div class="w3-featured-ad-right">
                                <h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
                                <p>$ 380</p>
                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                    <div class="w3l-featured-ad">
                        <a href="single.html">
                            <div class="w3-featured-ad-left">
                                <img src="images/f3.jpg" title="ad image" alt="" />
                            </div>
                            <div class="w3-featured-ad-right">
                                <h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
                                <p>$ 560</p>
                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default LayoutLeft;