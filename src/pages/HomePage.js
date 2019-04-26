import React, { Component } from "react";

import { ProductConsumer } from "../context";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>{value => <h1>value</h1>}</ProductConsumer>
      </React.Fragment>
    );
  }
}
