import Product from "./Product";
import "./RightSide.css";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const RightSidePanel = (props) => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(
      `http://localhost:8082/amazon/products/search?keyword=${searchParams.get(
        "keyword"
      )}`
    )
      .then((response) => response.json())
      .then((productList) => {
        setListOfProduct(productList);
      });
  }, [, searchParams]);

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
