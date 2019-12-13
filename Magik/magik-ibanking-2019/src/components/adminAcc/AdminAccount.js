import React, { Component } from 'react';
import './AdminAccount.css';

class AdminAccount extends Component {
  getuser = async () => {

  }
  render() {
    const { getUser } = this.props;
    if (getUser.data) {
      var address = <p> Địa chỉ hiện tại :{getUser.data.address.addressName},{getUser.data.address.wardName},
      {getUser.data.address.cityName}
      </p>
     var email=<p>Email :{getUser.data.userEmail}</p>
     var phone=<p>Phone : {getUser.data.phoneNumber}</p>

    
    }
    return (
      <div class="wrapper" >

        <div class="profile-card js-profile-card" style={{ marginLeft: "35%" }}>
          <div class="profile-card__img">
            <img src={require('./../../img/mrdat.jpg')} />

          </div>

          <div class="profile-card__cnt js-profile-cnt">
           
          

            <div class="profile-card-inf">

              <div class="col-md-12 detailed">
                  
                <div class="col-md-8 col-md-offset-2 mt">
                  
                {address}
                 
            
                </div>

                <div class="col-md-8 col-md-offset-2 mt">
                 {phone}
               {email}
                </div>
              </div>
            </div>



            <div class="profile-card-ctr">
              <button class="profile-card__button button--blue js-message-btn" style={{color:"while"}}> <a className="button" href="/admin" >Về trang chủ</a></button>
              <button class="profile-card__button button--orange">Chỉnh sửa</button>
            </div>
          </div>

          <div class="profile-card-message js-message">
            <form class="profile-card-form">
              <div class="profile-card-form__container">
                <textarea placeholder="Say something..."></textarea>
              </div>

              <div class="profile-card-form__bottom">
                <button class="profile-card__button button--blue js-message-close">
                  Send
                    </button>

                <button class="profile-card__button button--gray js-message-close">
                  Cancel
                    </button>
              </div>
            </form>

            <div class="profile-card__overlay js-message-close"></div>
          </div>

        </div>

      </div>
    );
  }
}

export default AdminAccount;