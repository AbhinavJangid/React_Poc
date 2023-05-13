import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";

export default function ProductsList(props) {
  console.log("props data inside prodList", props.products);

  return (
    <div className="container">
      <h1>All productss</h1>
      <ul className="grid">
        {props.products.map((product) => (
          <li key={product.id} className="card">
            <Link to={`${product.id}`}>
              {/* <Link to={"about"} > */}
              {/* <div className="card">
                <img src={product.thumbnail} className="prd-img"></img>
                <h2>{product.title}</h2>
                <h4>{product.description}</h4>
              </div> */}
              <div className="scroll-snap-card">
                {/* <div className="slide red"> */}
                {/* <img src={product.thumbnail} className="prd-img"></img> */}

                <div className="slide red">
                  <div className="card-image-card">
                    <h2>{product.title}</h2>
                  </div>
                </div>
                {/* </div> */}
                <div className="slide blue">
                  <div className="sub-card">
                    <img src={product.thumbnail} className="card-image"></img>
                    {/* <img
                        src={product.thumbnail}
                        className="image-above"
                      ></img> */}
                    {/* <div className="image-above-card">
                      
                    </div> */}
                  </div>
                </div>
                <div className="slide green">
                  <p>{product.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
