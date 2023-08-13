import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section className="model py-4">
        <div className="container model  ">
        <div className="banner_content d-flex "> 
       
        <div className="col-3 model">
          <img className="img_model" src="./glassesImage/model.jpg" alt="" />
        </div>
        <div className="col-3 model">
        <img  className="img_model" src="./glassesImage/model.jpg" alt="" />
        </div>
      
        </div>
        </div>
        
   
      </section>
      
    );
  }
}
