import React from "react";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <div style={{ paddingTop: "260px", display: "flex", flexWrap: "wrap" }}>
        <AdvertisementOne />
        <AdvertisementFour />
        <AdvertisementOne />
        <AdvertisementOne />
        <AdvertisementOne />
        <AdvertisementOne />
        <AdvertisementOne />
      </div>
    </div>
  );
};

export default MainPage;
