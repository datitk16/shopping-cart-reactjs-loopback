import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="select-box">
                <div class="select-city-for-local-ads ads-list">
                    <label>Chọn loại sản phẩm</label>
                    <select>
                        <optgroup label="Popular Cities">
                            <option selected >Entire USA</option>
                            <option>Birmingham</option>
                            <option>Anchorage</option>
                            <option>Phoenix</option>
                            <option>Little Rock</option>
                            <option>Los Angeles</option>
                            <option>Denver</option>
                            <option>Bridgeport</option>
                            <option>Wilmington</option>
                            <option>Jacksonville</option>
                            <option>Atlanta</option>
                            <option>Honolulu</option>
                            <option>Boise</option>
                            <option>Chicago</option>
                            <option>Indianapolis</option>
                        </optgroup>
                        <optgroup label="More Cities">
                            <optgroup label="Alabama">
                                <option>Birmingham</option>
                                <option>Montgomery</option>
                                <option>Mobile</option>
                                <option>Huntsville</option>
                                <option>Tuscaloosa</option>
                            </optgroup>
                            <optgroup label="Alaska">
                                <option>Anchorage</option>
                                <option>Fairbanks</option>
                                <option>Juneau</option>
                                <option>Sitka</option>
                                <option>Ketchikan</option>
                            </optgroup>
                            <optgroup label="Arizona">
                                <option>Phoenix</option>
                                <option>Tucson</option>
                                <option>Mesa</option>
                                <option>Chandler</option>
                                <option>Glendale</option>
                            </optgroup>

                        </optgroup>
                    </select>
                </div>
                <div class="browse-category ads-list">
                    <label>Chọn giá cả</label>
                    <select class="selectpicker show-tick" data-live-search="true">
                        <option data-tokens="Books, Sports & Hobbies">Books, Sports & Hobbies</option>
                        <option data-tokens="Mobiles">Mobiles</option>
                        <option data-tokens="Electronics & Appliances">Electronics & Appliances</option>
                        <option data-tokens="Cars">Cars</option>
                        <option data-tokens="Bikes">Bikes</option>
                        <option data-tokens="Furniture">Furniture</option>
                        <option data-tokens="Pets">Pets</option>
                        <option data-tokens="Fashion">Fashion</option>
                        <option data-tokens="Kids">Kids</option>
                        <option data-tokens="Services">Services</option>
                        <option data-tokens="Jobs">Jobs</option>
                        <option data-tokens="Real Estate">Real Estate</option>
                    </select>
                </div>
                <div class="search-product ads-list">
                    <label>Tìm kiếm sản phẩm</label>
                    <div class="search">
                        <div id="custom-search-input">
                            <div class="input-group">
                                <input type="text" class="form-control input-lg" placeholder="Buscar" />
                                <span class="input-group-btn">
                                    <button class="btn btn-info btn-lg" type="button">
                                        <i class="glyphicon glyphicon-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        );
    }
}

export default Header;