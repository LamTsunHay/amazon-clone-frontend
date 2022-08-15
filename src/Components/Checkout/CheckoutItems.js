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
          <img height="200px" src={props.definition.imageURL} alt="" />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div className="textgap" style={{ fontSize: "20px" }}>
            {props.definition.name}
          </div>
          <div className="textgap" style={{ fontWeight: "bold" }}>
            {props.definition.price}
          </div>
          <div className="textgap">{props.definition.status}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
