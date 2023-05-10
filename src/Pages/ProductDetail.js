import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductItem from '../Components/ProductItem'


export default function ProductDetail() {


    const data = useLoaderData();
    console.log("single product data in ProductDetial : ");
  return (
    <ProductItem data={data} />
  )
}
export async function loader({request, params}) {
    const id = params.id;
    console.log("loader response data inside product detail",id);
    const response = await fetch('https://dummyjson.com/products/'+id);
    console.log("loader response data inside product detail",response);
    console.log("loader data inside product detail",response);
    return response;

  }