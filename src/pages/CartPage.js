import React, { Component } from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";

import CartSection from "../components/CartPage";

export default class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero img={cartBcg} />
        <CartSection />
      </React.Fragment>
    );
  }
}
