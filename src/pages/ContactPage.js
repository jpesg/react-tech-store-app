import React, { Component } from "react";

import Hero from "../components/Hero";
import Contact from "../components/ContactPage/Contact";
import contactImg from "../images/contactBcg.jpeg";

export default class ContactPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero img={contactImg} />
        <Contact />
      </React.Fragment>
    );
  }
}
