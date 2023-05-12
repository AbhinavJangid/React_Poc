import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import ProductItem from '../Components/ProductItem'


export default function ProductDetail() {


    const data = useLoaderData();
    console.log("single product data in ProductDetial : ",data);
    const idFromPara = useParams();
    console.log("single product data in ProductDetial : ", idFromPara);
    
  return (
    <ProductItem data={[data, idFromPara]} />
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