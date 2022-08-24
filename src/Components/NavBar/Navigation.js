import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "./NavBar.css";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { size } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");

  const searchProducts = () => {
    if (searchKeyword === "") {
      navigate("");
    } else {
      const params = { keyword: searchKeyword };
      navigate({
        pathname: "/display",
        search: `?${createSearchParams(params)}`,
      });
    }
  };
  return (
    <div>
      <div className="navbar_component">
        <Link to="">
          <div className="navbar_logo"></div>
        </Link>
        <div className="navbar_locator">
          <div className="navbar_locatorImage"></div>
          <div className="navbar_location"> Hong Kong</div>
        </div>
        <div className="navbar_searchcomponent">
          <div>
            <select className="navbar_dropdown">
              <option value="All">All</option>
              <option value="Alexa">Alexa</option>
              <option value="Books">Books</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
              className="navbar_searchbox"
            />
          </div>
          <div className="navbar_seachboxdiv" onClick={searchProducts}>
            <div className="navbar_searchicon"></div>
          </div>
        </div>
        <div className="navbar_text navbar_signin">
          <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
          <div style={{ fontWeight: "bold" }}>Account & List</div>
        </div>
        <div className="navbar_text navbar_returns">
          <div style={{ fontSize: "14px" }}>Returns</div>
          <div style={{ fontWeight: "bold" }}>& Order</div>
        </div>
        <Link to="/checkout">
          <div className="navbar_text navbar_cart">
            <div className="cart_image"></div>
            <div className="cart_item">{size}</div>
            <div className="navbar_text_cart">Cart</div>
          </div>
        </Link>
      </div>
      <div className="navbar_footer">
        <div className="navbar_footer_text">Best Seller</div>
        <div className="navbar_footer_text">Mobile</div>
        <div className="navbar_footer_text">Amazon Pay</div>
        <div className="navbar_footer_text">Fashion</div>
        <div className="navbar_footer_text">Electronics</div>
        <div className="navbar_footer_text">Price</div>
        <div className="navbar_footer_text">New Realease</div>
        <div className="navbar_footer_text">Customer Service</div>
        <div className="navbar_footer_text">Computers</div>
        <div className="navbar_footer_text">Home & Kitchen</div>
      </div>
    </div>
  );
};

export default NavBar;
