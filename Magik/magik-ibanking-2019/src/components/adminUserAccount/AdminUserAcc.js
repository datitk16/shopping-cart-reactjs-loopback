import React, { Component } from 'react';

class AdminUserAcc extends Component {
    render() {
        const { getAcc } = this.props;
        if (getAcc.data) {
            console.log(getAcc.data.accounts[2])
            var accNumber = <h4>Số tài khoản: {getAcc.data.accounts[2].no}</h4>
            var availableAmount = <h4>Số dư: {getAcc.data.accounts[2].availableAmount} (đ)</h4>
        }

        return (
            <div class="row mt">
                <div class="col-lg-12">
                    <div class="row content-panel">
                        <div class="col-md-4 profile-text mt mb centered">
                            <div class="right-divider hidden-sm hidden-xs">
                                {accNumber}
                                {availableAmount}

                               
                            </div>
                        </div>
                        <div class="col-md-4 profile-text">
                            <h3>Sam Soffes</h3>
                            <h6>Main Administrator</h6>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>

                            <p><button class="btn btn-theme"><i class="fa fa-envelope"></i> Send Message</button></p>
                        </div>
                        <div class="col-md-4 centered">
                            <div class="profile-pic">
                                <p><img src={require('./../../img/mrdat.jpg')} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminUserAcc;