import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductsList(props) {
    
      console.log("props data inside prodList",props.products);
    
    
  return (
    <div className="container">
    <h1>All productss</h1>
    <ul className="container">
      {props.products.map((product) => (
        <li key={product.id} className="card">
          <Link to={`${product.id}`}>
          {/* <Link to={"about"} > */}
            <div className="card">
              <h2>{product.title}</h2>
              <h4>{product.description}</h4>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
