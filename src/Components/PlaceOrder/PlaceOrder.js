import React from "react";
import "./PlaceOrder.css";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";

const PlaceOrder = (props) => {
  const [productDetails, setProductDetails] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    let list = [
      {
        id: "123",
        name: "Apple 11 (64GB) - Green",
        rating: "40,000",
        review: "1000",
        EMI: "2401",
        delivery: "Friday, Jul 29",
        price: "5,999",
        status: "In stock",
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__B6qTQl9mia.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1658420308113",
        about: [
          "This phone is compatible with carriers on the GSM network only (e.g. AT&T, T-Mobile, Metro).",
          "Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity.",
          "Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.",
          "Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card.",
          "Backed by the same one-year satisfaction guarantee as brand new Apple products.",
        ],
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
    let item = list.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });
    console.log(item[0]);
    setProductDetails(item[0]);
  }, []);

  return (
    <Grid container>
      <Grid item xs={4}>
        <img className="placeorder_image" src={productDetails.image} alt="" />
      </Grid>
      <Grid item xs={4}>
        <div className="placeorder_description">
          <div
            style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
          >
            {productDetails.name}
          </div>
          <div>
            <Rating
              name="read-only"
              value={3}
              readOnly
              style={{ fontSize: "20px" }}
            />
            {productDetails.rating} rating | {productDetails.review}+ answered
            questions
          </div>
          <hr />
          <div>
            <div className="textgap">
              Price:{" "}
              <span className="pricetag">HKD {productDetails.price}</span>
            </div>
            <div className="textgap">
              FREE delivery: <b>{productDetails.delivery}</b>
            </div>
            <div className="textgap">
              EMI starts at HKD {productDetails.EMI}. No Cost EMI avaliable
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Paper variant="outlined" className="placeorder_order">
          <Link to="/checkout">
            <button className="placeorder_button addtocart">Add to Cart</button>
          </Link>
          <button className="placeorder_button buynow">Buy Now</button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PlaceOrder;
