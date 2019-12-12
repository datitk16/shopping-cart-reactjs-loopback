import React, { Component } from 'react';
import './AdminAccount.css';

class AdminAccount extends Component {
 getuser=async()=>{
 
 }
    render(){
      const {getUser}=this.props;
      if(getUser.data){
        var address=  <div class="profile-card__txt">{getUser.data.address} <strong>Mesopotamia</strong></div>
      }
        return (
            <div class="wrapper">

            <div class="profile-card js-profile-card">
              <div class="profile-card__img">
              <img src={require('./../../img/mrdat.jpg')} />
              
              </div>
          
              <div class="profile-card__cnt js-profile-cnt">
                <div class="profile-card__name">Muhammed Erdem</div>
              {/* {address} */}
                <div class="profile-card-loc">
                  <span class="profile-card-loc__icon">
                    <svg class="icon"><use ></use></svg>
                  </span>
          
                  <span class="profile-card-loc__txt">
                    Istanbul, Turkey
                  </span>
                </div>
          
                <div class="profile-card-inf">
                  <div class="profile-card-inf__item">
                    <div class="profile-card-inf__title">1598</div>
                    <div class="profile-card-inf__txt">Followers</div>
                  </div>
          
                  <div class="profile-card-inf__item">
                    <div class="profile-card-inf__title">65</div>
                    <div class="profile-card-inf__txt">Following</div>
                  </div>
          
                  <div class="profile-card-inf__item">
                    <div class="profile-card-inf__title">123</div>
                    <div class="profile-card-inf__txt">Articles</div>
                  </div>
          
                  <div class="profile-card-inf__item">
                    <div class="profile-card-inf__title">85</div>
                    <div class="profile-card-inf__txt">Works</div>
                  </div>
                </div>
          
              
          
                <div class="profile-card-ctr">
                  <button class="profile-card__button button--blue js-message-btn">Về trang chủ</button>
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