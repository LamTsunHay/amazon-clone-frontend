import React from "react";
import "./Checkout.css";
import Grid from "@mui/material/Grid";
import CheckoutItems from "./CheckoutItems";

const Checkout = (props) => {
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
              <CheckoutItems />
              <CheckoutItems />
              <CheckoutItems />
              <CheckoutItems />
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
              Subtotal (2 items): <b>1,111,000</b>
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
