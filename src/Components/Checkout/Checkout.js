import React, { useContext } from "react";
import "./Checkout.css";
import Grid from "@mui/material/Grid";
import CheckoutItems from "./CheckoutItems";
import { CartContext } from "../CartContext";

const Checkout = (props) => {
  // const { items, size } = useContext(CartContext);
  let size = 2;
  let items = [
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
  const cartValue = () => {
    let price = 0;

    items.map(item => {
      let num = item.price.replace(",", "");
      price += parseInt(num);
    })

    // for (let i = 0; i < items.length; i++) {
    //   let num = items[i].price.replace(",", "");
    //   price += parseInt(num);
    // }
    return price;
  };
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
              {items.map((item) => (
                <CheckoutItems definition={item} />
              ))}
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
              Subtotal ({size} items): <b>{cartValue()}</b>
            </div>
            <div style={{ paddingTop: "25px" }}>
              <button className="placeholder_button">Process to Buy</button>
            </div>
            <div className="">
                123123
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;
