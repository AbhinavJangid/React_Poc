import React from 'react'
import { useEffect } from 'react';


export default function ProductItem(props) {

  
    console.log("props data inside Product Item",props.id);
     //const productData = useLoaderData();
  //   const productItemDetail = productData
  //console.log("productData data inside Product Item",productData);
  return (
    <article className="container">
        <h1>Product Detail Page</h1>
    <h1>{props.data.title}</h1>
    <h2>{props.data.title}</h2>
    <h4>{props.data.description}</h4>
    </article>
  )
}



