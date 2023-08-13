import React, { Component } from 'react'

export default class Glasses extends Component {
  render() {
    return (
      <div className="item">
      <img
        className="img_glass"
        style={{ width: "160px", height: " 100px" }}
        src={this.props.element.url}
        onClick={()=> this.props.getGlassDetail(this.props.element)}
        alt=""
      />
    </div>
    )
  }
}
