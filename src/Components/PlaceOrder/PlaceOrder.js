import React, { useContext } from "react";
import "./PlaceOrder.css";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartContext } from "../CartContext";

const PlaceOrder = (props) => {
  const { increment } = useContext(CartContext);
  const [productDetails, setProductDetails] = useState([]);

  const addToCart = () => {
    increment(productDetails);
  };

  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8082/amazon/products/search/" + id)
      .then((response) => response.json())
      .then((item) => {
        setProductDetails(item);
      });
  }, []);

  return (
    <Grid container>
      <Grid item xs={4}>
        <img
          className="placeorder_image"
          src={productDetails.imageURL}
          alt=""
        />
      </Grid>
      <Grid item xs={4}>
        <div className="placeorder_description">
          <div
            style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
          >
            {productDetails.name}
          </div>
          <div>
            <Rating
              name="read-only"
              value="4.3"
              readOnly
              style={{ fontSize: "20px" }}
            />
            {productDetails.rating} rating | 1000+ answered questions
          </div>
          <hr />
          <div>
            <div className="textgap">
              Price:{" "}
              <span className="pricetag">HKD {productDetails.price}</span>
            </div>
            <div className="textgap">
              FREE delivery: <b>{productDetails.delivery}</b>
            </div>
            <div className="textgap">
              EMI starts at HKD {productDetails.EMI}. No Cost EMI avaliable
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Paper variant="outlined" className="placeorder_order">
          <button className="placeorder_button addtocart" onClick={addToCart}>
            Add to Cart
          </button>
          <Link to="/checkout">
            <button className="placeorder_button buynow">Buy Now</button>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PlaceOrder;
