import React, { Component } from "react";

import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import aboutBcg from "../images/aboutBcg.jpeg";

import Info from "../components/AboutPage/Info";

export default class AboutPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero img={aboutBcg} />
        <Info />
      </React.Fragment>
    );
  }
}
