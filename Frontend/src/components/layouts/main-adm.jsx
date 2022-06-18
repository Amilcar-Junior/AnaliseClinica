import React, { Component } from "react";

import HomePage from "../pages/home/HomePage";
import Headers from "../common/headers-adm";
import Footers from "../common/footers";

//default layout
class MainLayout extends Component {
  //Inherited Parent options.
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Headers />
        <div className="main-admin">{this.props.children}</div>
        <div className="footer-admin" style={{ marginTop: "10px" }}>
          <Footers />
        </div>
      </>
    );
  }
}

export default MainLayout;
