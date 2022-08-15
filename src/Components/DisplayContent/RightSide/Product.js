import React from "react";
import "./RightSide.css";
import Rating from "@mui/material/Rating";

const Product = (props) => {
  return (
    <div className="product">
      <div className="product_container">
        <img className="product_image" src={props.definition.imageURL} alt="" />
      </div>
      <div className="product_description">
        <div className="product_name">{props.definition.name}</div>
        <div className="product_rating">
          <Rating
            name="read-only"
            value={props.definition.stars}
            style={{ fontSize: "20px" }}
            readOnly
          />
          {props.definition.rating}
        </div>
        <div>
          <span className="price_symbol">HKD</span>
          <span className="product_price">{props.definition.price}</span>
        </div>
        <div>
          <b>FREE Shipping</b> to Hong Kong
        </div>
      </div>
    </div>
  );
};

export default Product;
