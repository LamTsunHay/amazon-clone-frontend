import React, { useEffect, useState } from "react";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import "./MainPage.css";

const Child = ({ product }) => {
  return (
    <>
      <AdvertisementOne item={product[0]} />
      <AdvertisementFour item={product[1]} />
      <AdvertisementOne item={product[2]} />
      <AdvertisementOne item={product[3]} />
      <AdvertisementOne item={product[4]} />
      <AdvertisementOne item={product[5]} />
      <AdvertisementOne item={product[6]} />
      <AdvertisementFour item={product[7]} />
    </>
  );
};
const MainPage = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const products = [
      {
        image:
          "https://ik.imagekit.io/amazonclone123/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__ErUmh0bJu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658420304731",
        description: "Up to 70% off | Electronics clearance store",
      },
      {
        image1:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
        image2:
          "https://www.lenovo.com/medias/GY40T26478-lenovo-temp-15.png?context=bWFzdGVyfHJvb3R8MTQ1Nzk5fGltYWdlL3BuZ3xoZTIvaGRjLzEwNjczMDE0ODY1OTUwLnBuZ3wyN2EzMTM2NTI5YTEzY2NhOWE5N2YwMWM5YTVhOTRiODRjYWQ0MmY1OWRjODI5MmY3MGYxYThjNjJjNWE0NDcz",
        image3:
          "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/peripherals/input-devices/dell/mouse/wm126/dell-mouse-wm126-504x350.jpg?fmt=jpg",
        image4:
          "https://p-hk.ipricegroup.com/abe9e0995c8501739db49a981a5bdd74071e2038_0.jpg?position=16",
        description: "Gaming accessories",
      },
      {
        image:
          "https://www.chikoshoes.com/wp-content/uploads/2022/03/2203BSH2031018-3-400x400.jpg",
        description: "Shoes",
      },
      {
        image:
          "https://target.scene7.com/is/image/Target/GUEST_d060c13a-6bbf-4881-b8f6-d8558f606a52?wid=488&hei=488&fmt=pjpeg",
        description: "Shop backpacks",
      },
      {
        image:
          "http://cdn.shopify.com/s/files/1/0226/0165/products/Square_0119_Kettle-Bell---Morgan-Boxing-24kg1765TWL20cestari_1200x1200.png?v=1625232044",
        description: "For your Fitness Needs",
      },
      {
        image:
          "https://jumbotron-production-f.squarecdn.com/assets/9356b8ad96fa26e9fa56.jpg",
        description: "Shop Laptops & Tablets",
      },
      {
        image:
          "https://aonhappytails.com/getmedia/e3db7a00-0b98-4d60-8ab3-2c34f58dc2f5/cat-and-dog-happy-square.jpg?width=800&height=800&ext=.jpg",
        description: "Shop Pet supplies",
      },
      {
        image1:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEymJB3zM-DyLkIQbdIricVJjzVUDM0ORqUw&usqp=CAU",
        image2:
          "https://ih1.redbubble.net/image.1917876575.0073/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
        image3:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQly_S8cHHXNFIRxh1FH1ya2LdUw5Onz4mEyw&usqp=CAU",
        image4: "https://sc04.alicdn.com/kf/HTB1VeZSNHvpK1RjSZPiq6zmwXXat.jpg",
        description: "Gaming merchandise",
      },
    ];

    setProduct(products);
  }, []);
  return (
    <div className="mainpage">
      <div style={{ paddingTop: "260px", display: "flex", flexWrap: "wrap" }}>
        {product.length > 0 && <Child product={product} />}
      </div>
    </div>
  );
};

export default MainPage;
