import React from "react";
import CartItem from "./CartItem";

import { ProductConsumer } from "../../context";

export default function CartList() {
  return (
    <div className="container-fluid">
      {/**row */}
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { cart, increment, decrement, removeItem } = value;
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center">
                    your cart is currently empty
                  </h1>
                );
              } else {
                return (
                  <React.Fragment>
                    {cart.map(item => (
                      <CartItem
                        key={item.id}
                        item={item}
                        increment={increment}
                        decrement={decrement}
                        removeItem={removeItem}
                      />
                    ))}
                  </React.Fragment>
                );
              }
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
