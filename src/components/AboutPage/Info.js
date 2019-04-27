import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Sunt eiusmod in irure commodo et officia qui. Eu anim duis
              adipisicing do. Culpa ex exercitation nisi fugiat cillum. Id
              nostrud occaecat voluptate deserunt irure. Et laboris enim magna
              sit ullamco et voluptate labore ut et.
            </p>
            <p className="text-lead text-muted my-3">
              Sunt eiusmod in irure commodo et officia qui. Eu anim duis
              adipisicing do. Culpa ex exercitation nisi fugiat cillum. Id
              nostrud occaecat voluptate deserunt irure. Et laboris enim magna
              sit ullamco et voluptate labore ut et.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
