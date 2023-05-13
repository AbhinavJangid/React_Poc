import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductItem.css";
import SimpleImageSlider from "react-simple-image-slider";

export default function ProductItem(props) {
  console.log("id data inside Product Item", props.data[1].id);
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    title: "",
    description: "",
  });

  const [isEditable, setIsEditable] = useState(true);
  const [isSubmitBtnVisible, setIsSubmitBtnVisible] = useState(true);
  const [isEditBtnVisible, setIsEditBtnVisiblee] = useState(false);
  const [isDeleteBtnVisible, setIsDeleteBtnVisible] = useState(false);

  const images = [
    { url: props.data[0].images[0] },
    { url: props.data[0].images[1] },
    { url: props.data[0].images[2] },
    { url: props.data[0].images[3] },
    { url: props.data[0].images[4] },
  ];

  const deleteProduct = (id, e) => {
    alert("Are you sure?");
    e.preventDefault();
    axios
      .delete(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        alert("Deleted!!!");
        console.log("Deleted", res);
        navigate("/products");
      })
      .catch((err) => console.log("error occured", err));
  };

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://dummyjson.com/products/${props.data[1].id}`, {
        productData,
      })
      .then((res) => {
        alert("Successfully edited!!!");
        console.log("Edited!!", res);
        navigate("/products");
      })
      .catch((err) => console.log("error occured", err));
  };

  const editProduct = (id, e) => {
    setIsEditable(false);
    setIsSubmitBtnVisible(false);
    setIsEditBtnVisiblee(true);
    setIsDeleteBtnVisible(true);
  };

  return (
    <>
      <article className="container">
        <h1>Product Detail for {props.data[0].title} </h1>
        <div className="product-container">
          
          <div className="product-detail">
          <div className="image-slider">
            <SimpleImageSlider
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
            <div className="form">
            <form onSubmit={handleSubmit} >
              <fieldset disabled={isEditable}>
                <div className="mb-3">
                  <h3 className="form-label">Title</h3>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    placeholder={props.data[0].title}
                  />
                </div>
                <div className="mb-3">
                  <h3 className="form-label">Description</h3>
                  {/* <input type="text" name="description" className="form-control" onChange={(e)=>handleChange(e)}  placeholder={props.data[0].description}/>
                   */}
                  <textarea
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    placeholder={props.data[0].description}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  hidden={isSubmitBtnVisible}
                >
                  Submit
                </button>
              </fieldset>
            </form>
            </div>
          </div>
          <button
            className="btn-primary"
            onClick={(e) => deleteProduct(props.data[1].id, e)}
            hidden={isDeleteBtnVisible}
          >
            Delete ?
          </button>
          {console.log("id", props.data[1].id)}
          <button
            className="btn-primary"
            onClick={(e) => editProduct(props.data[1].id, e)}
            hidden={isEditBtnVisible}
          >
            Edit ?
          </button>
          {console.log("id", props.data[1].id)}
        </div>
      </article>
    </>
  );
}
