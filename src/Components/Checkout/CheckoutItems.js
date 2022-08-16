import React from "react";
import "./Checkout.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const CheckoutItems = (props) => {
  const { decrement } = useContext(CartContext);
  const removeCart = () => {
    decrement(props.definition);
  };
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
          <div className="commandBar textgap">
            <div className="delButton" onClick={removeCart}>
              Delete
            </div>
            <div className="col"></div>
            <div className="delButton">Save for later</div>
            <div className="col"></div>
          </div>
        </div>
        <div className="textgap left-padding">${props.definition.price}</div>
      </div>
    </div>
  );
};

export default CheckoutItems;
