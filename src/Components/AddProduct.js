import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AddProduct.css"
export default function AddProduct() {

    const [isEditable, setIsEditabel] = useState("disabled");

    const handleOnClick = () => {
        setIsEditabel("enabled");
    }


    const [product, setProduct] = useState();
    const handleInput = (event) => {
        setProduct({...product, [event.target.name]: [event.target.value]});
        console.log("product:: ",product);
        console.log("event.target.name:: ",event.target.name);
        console.log("event.target.event:: ",event.target.value);
    }
  //loader and action
const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('https://dummyjson.com/products/add',{product})
        .then(response => console.log("response of post request is :: ",response))
        .catch(error => console.log("error occured on post request is :: ",error)) ;
        navigate('/');
    }
        return (
            <>
            <div className="addProductForm shadow-lg p-3 mb-5 bg-white rounded">
        
            <form onSubmit={handleSubmit}>
                    <fieldset enabled ="true" >
                        <legend>Add a Product</legend>
                        <div className="mb-3">
                            <label  className="form-label">Title</label>
                            <input type="text" name="title" className="form-control" onChange={handleInput} placeholder="enter title here"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input type="text" name="description" className="form-control" onChange={handleInput} placeholder="enter desc here"/>
                        </div>
                        <button type="submit" className="btn btn-primary"  >Submit</button>
                        
                    </fieldset>
                    
                </form>
            </div>

                
    
            </>
        )
 
        
    
}
