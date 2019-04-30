import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

import Product from "../Product";
import Title from "../Title";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        {/**title */}
        <Title title="feautred products" center="true" />
        {/**products */}
        <div className="row">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;

              return featuredProducts.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}
