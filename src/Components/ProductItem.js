import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ProductItem(props) {

  console.log("id data inside Product Item",props.data[1].id);
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    title: "",
    description: "",
  })


  const deleteProduct = (id, e) => {
    alert("Are you sure?");
    e.preventDefault();
    axios.delete(`https://dummyjson.com/products/${id}`)
    .then(res => {
      alert("Deleted!!!");
      console.log("Deleted", res);
      navigate("/products/allProducts");
    }).catch(err =>console.log("error occured",err));

  }

  const handleChange = (e) => {
    setProductData({...productData, [e.target.name]: [e.target.value]});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://dummyjson.com/products/${props.data[1].id}`,{productData})
    .then(res => {
      alert("Successfully edited!!!");
      console.log("Edited!!", res);
      navigate("/products/allProducts");
    }).catch(err =>console.log("error occured",err));
  }

  return (
    <>
    <article className="container">
      <h1>Product Detail Page</h1>
    <img src={props.data[0].thumbnail}></img>
    
    
    <h3>{props.data[0].title}</h3>
    <h5>{props.data[0].description}</h5>
    <button className='primary' onClick={(e)=>deleteProduct(props.data[1].id, e)}>Delete ?</button>{console.log("id",props.data[1].id)}
    </article>
     <div className="addProductForm">
        
     <form onSubmit={handleSubmit}>
             <fieldset enabled ="true" >
                 <legend>Add a Product</legend>
                 <div className="mb-3">
                     <label  className="form-label">Title</label>
                     <input type="text" name="title" className="form-control" onChange={(e)=>handleChange(e)} placeholder={props.data[0].title}/>
                 </div>
                 <div className="mb-3">
                     <label className="form-label">Description</label>
                     <input type="text" name="description" className="form-control" onChange={(e)=>handleChange(e)}  placeholder={props.data[0].description}/>
                 </div>
                 <button type="submit" className="btn btn-primary" >Submit</button>
                 
             </fieldset>
             
         </form>
     </div></>
  )
}



