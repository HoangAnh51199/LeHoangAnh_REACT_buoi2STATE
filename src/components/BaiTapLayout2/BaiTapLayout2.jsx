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
    });
  };

  render() {
    return (
      <div>
        <div className="background_overplay">
          <Header />

          {/*img model */}

          <Banner state={this.state.glassDetail} />

          <DanhSachGlasses getGlassDetail={this.getGlassDetail} data={data} />
        </div>
      </div>
    );
  }
}
