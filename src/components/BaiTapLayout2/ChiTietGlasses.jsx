import React, { Component } from 'react'

export default class ChiTietGlasses extends Component {
  render() {
    console.log(this.props.detail);

    return (
        <div className="description p-1 d-flex flex-wrap">
        <img  className="glassModel" style={{width:"158px",height:"45px"}} src={this.props.detail.url}></img>
           <h4 style={{color:"blue"}}>{this.props.detail.name}</h4>
           <p  style={{color:"white"}}> {this.props.detail.desc}</p>
         </div>
    )
  }
}
