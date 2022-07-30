import React from "react";
import "./Checkout.css";

const CheckoutItems = (props) => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #e7e7e7",
          width: "90%",
          height: "250px",
          margin: "25px",
          display: "flex",
        }}
      >
        <div style={{ margin: "25px" }}>
          <img
            height="200px"
            src="https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113"
            alt=""
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div className="textgap" style={{ fontSize: "20px" }}>
            New Apple iPhone 11 (64GB) - Green
          </div>
          <div className="textgap" style={{ fontWeight: "bold" }}>
            5,999
          </div>
          <div className="textgap">In Stock</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
