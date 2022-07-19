import React from "react";
import "./Product.css";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  //console.log(location);

  return (
    <div>
      <div className="Productcontainer">
        <div className="image-container">
          <img src={location.state.Image.path} alt={location.state.alt} />
        </div>
        <div className="description">
          <h4>{location.state.title}</h4>
          <h4>{location.state.price}</h4>
          <p>{location.state.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
