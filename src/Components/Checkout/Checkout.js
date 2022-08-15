import React, { useContext, useEffect } from "react";
import "./Checkout.css";
import Grid from "@mui/material/Grid";
import CheckoutItems from "./CheckoutItems";
import { CartContext } from "../CartContext";

const Checkout = (props) => {
  const { items, size } = useContext(CartContext);
  const cartValue = () => {
    let price = 0;

    items.map((item) => {
      let num = item.price.toString().replace(",", "");
      price += parseInt(num);
    });

    return price;
  };
  return (
    <div className="checkout_body">
      <Grid container>
        <Grid item={10}>
          <div className="checkout_container">
            <div
              style={{
                fontSize: "30px",
                fontWeight: "500",
                padding: "20px 0px 0px 20px",
              }}
            >
              Shopping Cart
            </div>
            <div>
              {items.map((item) => (
                <CheckoutItems definition={item} />
              ))}
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div
            style={{
              width: "300px",
              backgroundColor: "white",
              height: "200px",
              padding: "20px",
              marginTop: "25px",
            }}
          >
            <div style={{ fontSize: "26px" }}>
              Subtotal ({size} items): <b>{cartValue()}</b>
            </div>
            <div style={{ paddingTop: "25px" }}>
              <button className="placeholder_button">Process to Buy</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;
