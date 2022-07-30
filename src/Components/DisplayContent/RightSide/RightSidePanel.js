import Product from "./Product";
import "./RightSide.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSidePanel = (props) => {
  const [listOfProduct, setListOfProduct] = useState([]);

  useEffect(() => {
    let list = [
      {
        id: "123",
        name: "New Apple 11 (64GB) - Green",
        rating: "35,656",
        price: "5,999",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
      },
      {
        id: "234",
        name: "New Apple 12 (64GB) - Green",
        rating: "35,656",
        price: "5,999",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
      },
      {
        id: "345",
        name: "New Apple 13 (64GB) - Green",
        rating: "35,656",
        price: "5,999",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
      },
      {
        id: "456",
        name: "New Apple 14 (64GB) - Green",
        rating: "35,656",
        price: "6,999",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
      },
    ];
    setListOfProduct(list);
  }, []);

  return (
    <div className="RightSide_main">
      <div className="RightSide_result_text">RESULTS</div>
      {listOfProduct.map((product) => (
        <Link to={"/order/" + product.id}>
          <Product key={product.name} definition={product} />
        </Link>
      ))}
    </div>
  );
};

export default RightSidePanel;
