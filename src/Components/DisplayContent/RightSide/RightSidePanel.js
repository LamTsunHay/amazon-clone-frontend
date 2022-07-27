import Product from "./Product";
import "./RightSide.css";
import React, { useEffect, useState } from "react";

const RightSidePanel = (props) => {
  const [listOfProduct, setListOfProduct] = useState([]);

  useEffect(() => {
    let list = [
      {
        name: "New Apple 11 (64GB) - Green",
        rating: "35,656",
        price: "5,999",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
      },
      {
        name: "New Apple 12 (64GB) - Green",
        rating: "35,656",
        price: "5,999",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
      },
      {
        name: "New Apple 13 (64GB) - Green",
        rating: "35,656",
        price: "5,999",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
      },
      {
        name: "New Apple 14 (64GB) - Green",
        rating: "35,656",
        price: "6,999",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
      },
    ];
    setListOfProduct(list);
  });

  return (
    <div className="RightSide_main">
      <div className="RightSide_result_text">RESULTS</div>
      {listOfProduct.map((product) => (
        <Product definition={product} />
      ))}
    </div>
  );
};

export default RightSidePanel;
