import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      
      <nav style={{ opacity: "0.3" }} className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5">
          <div style={{ margin: "0 auto" }} className="header_content ">
            <a  className="navbar-brand" href="#!">
              TRY CLASSES APP ONLINE
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
