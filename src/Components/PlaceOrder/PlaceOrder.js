import React from "react";
import "./PlaceOrder.css";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

const PlaceOrder = (props) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <img
          className="placeorder_image"
          src="https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113"
          alt=""
        />
      </Grid>
      <Grid item xs={4}>
        <div className="placeorder_description">
          <div
            style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
          >
            New Apple iphone 11 (64GB) - Green
          </div>
          <div>
            <Rating
              name="read-only"
              value={3}
              readOnly
              style={{ fontSize: "20px" }}
            />
            35,990 | 1000+ answered questions
          </div>
          <hr />
          <div>
            <div className="textgap">
              Price: <span className="pricetag">HKD 5,999</span>
            </div>
            <div className="textgap">
              FREE delivery: <b>Friday, Jul 29</b>
            </div>
            <div className="textgap">
              EMI starts at HKD 2,401. No Cost EMI avaliable
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>
        Order
      </Grid>
    </Grid>
  );
};

export default PlaceOrder;
