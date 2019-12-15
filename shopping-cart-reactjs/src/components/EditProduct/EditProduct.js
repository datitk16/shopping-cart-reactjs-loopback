import React, { Component } from 'react';
import { createProduct } from './../../api/index'
class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image: "",
            price: "",
            categoryId: ""
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        await createProduct({
            name: this.state.name,
            image: this.state.image,
            price: this.state.price,
            categoryId: this.state.categoryId
        })
    }
    render() {
        const { price, image, name } = this.state;
        return (
            <div class="submit-ad main-grid-border col-md-9" >

                <h2 class="w3-head">Sản phẩm</h2>
                <div class="post-ad-form">
                    <div class="personal-details">
                        <form onSubmit={this.onSubmit}>
                            <label>Tên sản phẩm <span>*</span></label>
                            <input type="text"
                                class="name"
                                placeholder=""
                                onChange={this.onChange}
                                value={name}
                                name="name"
                            />
                            <div class="clearfix"></div>
                            <label>Giá <span>*</span></label>
                            <input type="number"
                                class="price"
                                placeholder=""
                                onChange={this.onChange}
                                value={price}
                                name="price"
                            />
                            <div class="clearfix"></div>
                            <label>Hình ảnh <span>*</span></label>
                            <input
                                onChange={this.onChange}
                                value={image}
                                type="text"
                                className="form-control"
                                name="image"
                                placeholder="Enter image" />
                            <div class="clearfix"></div>
                            <input type="submit" value="Gửi" />
                            <div class="clearfix"></div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default EditProduct;