import React, { Component } from "react";

import Header from "./Header";
import Banner from "./Banner";
import data from "../../data/dataGlasses.json";
import DanhSachGlasses from "./DanhSachGlasses";
import ChiTietGlasses from "./ChiTietGlasses";

export default class BaiTapLayout2 extends Component {
  state = {
    glassDetail: data[0],
  };

  getGlassDetail = (glass) => {
    //console.log(glass);
    this.setState({
      glassDetail: glass,
    })
  };

  render() {
    return (
      <div>
        <div className="background_overplay">
          <Header />

        
            {/*img model */}
            <section className="model py-4">
        <div className="container model  ">
          <div className="banner_content d-flex ">
            <div className="col-3 model">
              <img
                className="img_model"
                src="./glassesImage/model.jpg"
                alt=""
              />
              <ChiTietGlasses detail={this.state.glassDetail} />
            </div>
            <div className="col-3 model">
              <img
                className="img_model"
                src="./glassesImage/model.jpg"
                alt=""
              />
              <div className="description p-1">
                <h3 style={{ color: "blue" }}>name</h3>
                <p style={{ color: "white" }}>
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  modi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            <DanhSachGlasses getGlassDetail={this.getGlassDetail} data={data} />
          
        </div>
      </div>
    );
  }
}
