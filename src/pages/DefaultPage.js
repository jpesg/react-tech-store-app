import React, { Component } from "react";

import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import defaultBcg from "../images/defaultBcg.jpeg";

export default class DefaultPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero title="404" max="true" img={defaultBcg}>
          <h2 className="text-uppercase">page not found</h2>
          <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
            return home
          </Link>
        </Hero>
      </React.Fragment>
    );
  }
}
