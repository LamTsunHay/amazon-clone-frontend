import Product from "./Product";
import "./RightSide.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSidePanel = (props) => {
  const [listOfProduct, setListOfProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/amazon/products/getAllProducts")
      .then((response) => response.json())
      .then((productList) => {
        setListOfProduct(productList);
      });
  }, []);

  return (
    <div className="RightSide_main">
      <div className="RightSide_result_text">RESULTS</div>
      {listOfProduct.map((product) => (
        <Link to={"/order/" + product.productId}>
          <Product key={product.name} definition={product} />
        </Link>
      ))}
    </div>
  );
};

export default RightSidePanel;
