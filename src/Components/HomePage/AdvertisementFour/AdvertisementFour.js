import React from "react";
import "./AdvertisementFour.css";

const AdvertisementFour = (props) => {
  return (
    <div className="AdvertisementFour_main">
      <div className="AdvertisementFour_header">{props.item.description}</div>
      <div className="AdvertisementFour_body">
        <img src={props.item.image1} alt="" className="ad_fourImage" />
        <img src={props.item.image2} alt="" className="ad_fourImage" />
        <img src={props.item.image3} alt="" className="ad_fourImage" />
        <img src={props.item.image4} alt="" className="ad_fourImage" />
      </div>
      <div className="AdvertisementFour_footer">See more</div>
    </div>
  );
};

export default AdvertisementFour;
