import React, { Component } from "react";

import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import mainBcg from "../images/mainBcg.jpeg";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero title="awesome gadgedts" max="true">
          <Link to="/products">our products</Link>
        </Hero>
      </React.Fragment>
    );
  }
}
