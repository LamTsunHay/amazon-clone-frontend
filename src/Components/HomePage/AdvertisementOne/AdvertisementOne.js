import React from "react";
import "./AdvertisementOne.css";
const AdvertisementOne = (props) => {
  return (
    <div className="AdvertisementOne_main">
      <div className="AdvertisementOne_header">{props.item.description}</div>
      <div className="AdvertisementOne_body">
        <img src={props.item.image} alt="" width="300px" height="250px" />
      </div>
      <div className="AdvertisementOne_footer">See more</div>
    </div>
  );
};

export default AdvertisementOne;
