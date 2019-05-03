import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/**single columns */}
        <div className="col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        {/**end of single columns */}

        {/**single columns */}
        <div className="col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>
        {/**end of single columns */}

        {/**single columns */}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/**end of single columns */}

        {/**single columns */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/**end of single columns */}
        {/**single columns */}
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/**end of single columns */}
        {/**single columns */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/**end of single columns */}
      </div>
    </div>
  );
}
