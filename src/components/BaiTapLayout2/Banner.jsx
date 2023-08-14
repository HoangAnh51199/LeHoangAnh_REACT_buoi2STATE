import React, { Component } from "react";
import ChiTietGlasses from "./ChiTietGlasses";
import data from "../../data/dataGlasses.json";

export default class Banner extends Component {
  // state = {
  //   glassDetail: data[0],
  // };

  render() {
    console.log(this.props.state);
    return (
     <div>
      <section className="model py-4">
        <div className="container model  ">
          <div className="banner_content d-flex ">
            <div className="col-3 model">
              <img
                className="img_model"
                src="./glassesImage/model.jpg"
                alt=""
              /> 
              <ChiTietGlasses detail={this.props.state} />
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
     </div>
    );
  }
}
