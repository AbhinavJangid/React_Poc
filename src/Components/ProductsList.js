import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css"

export default function ProductsList(props) {
  console.log("props data inside prodList", props.products);

  return (
    <div className="container">
      <h1>All productss</h1>
      <ul className="container">
        {props.products.map((product) => (
          <li key={product.id} className="card">
            <Link to={`${product.id}`}>
              {/* <Link to={"about"} > */}
              <div className="card">
                <img src={product.thumbnail}></img>
                <h2>{product.title}</h2>
                <h4>{product.description}</h4>
              </div>
              <div className="scroll-snap-card">
                <div className="slide red">
                  <p className="tip">Scroll On Me</p>
                </div>
                <div className="slide blue">
                  <p className="tip">Scroll On Me</p>
                </div>
                <div className="slide green">
                  <p className="tip">Scroll On Me</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
