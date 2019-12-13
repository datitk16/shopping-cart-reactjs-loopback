import React, { Component } from 'react';

class AdminHome extends Component {
    render() {
        return (

            <section id="main-content">
            <section style={{marginTop:-30}} class="wrapper site-min-height">
              <h3><i class="fa fa-angle-right"></i> Trang chủ</h3>
              <div id="morris"> 
                <div class="row mt">
                  <div class="col-lg-6">
                    <div class="content-panel">
                      <h4><i class="fa fa-angle-right"></i> Chứng khoán</h4>
                      <div class="panel-body">
                        <div id="hero-graph" class="graph"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="content-panel">
                      <h4><i class="fa fa-angle-right"></i> Tăng trưởng lãi suất</h4>
                      <div class="panel-body">
                        <div id="hero-bar" class="graph"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt">
                  <div class="col-lg-6">
                    <div class="content-panel">
                      <h4><i class="fa fa-angle-right"></i> Ngoại tệ</h4>
                      <div class="panel-body">
                        <div id="hero-area" class="graph"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="content-panel">
                      <h4><i class="fa fa-angle-right"></i> Vàng</h4>
                      <div class="panel-body">
                        <div id="hero-donut" class="graph"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        );
    }
}

export default AdminHome;