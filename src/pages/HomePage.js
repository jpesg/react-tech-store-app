import React, { Component } from "react";

import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import mainBcg from "../images/mainBcg.jpeg";

import Services from "../components/HomePage/Services.js";
import Featured from "../components/HomePage/Featured.js";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero title="awesome gadgedts" max="true">
          <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
            our products
          </Link>
        </Hero>
        <Services />
        <Featured />
      </React.Fragment>
    );
  }
}
