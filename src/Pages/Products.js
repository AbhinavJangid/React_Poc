import React from 'react'
import {  useLoaderData } from 'react-router-dom';
import ProductsList from '../Components/ProductsList';

export default function Products() {
    const data = useLoaderData();
    const products = data.products;
    console.log("products data inside Products",products);
  return (
    <ProductsList products={products} />
  )
}

export async function loader() {
    const response = await fetch('https://dummyjson.com/products');
  
    if (!response.ok) {
      // ...
    } else {
        console.log("loader data inside Products",response)
      return response;
    }
  }