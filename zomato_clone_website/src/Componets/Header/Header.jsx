import React, { useState } from "react";
import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { RxCaretDown } from "react-icons/rx";
import RESTAURENTS from "../Data/Restaurent";

export const Header = () => {
  const [fdata, setFdata] = useState(RESTAURENTS);

  const ChangeData = (e) => {
    let getdata = e.toLowerCase();
    if (getdata === "") {
      setFdata(fdata);
    } else {
      let StoreData = fdata.filter((ele, k) => {
        return ele.rname.toLowerCase().match(getdata);
      });
      setFdata(StoreData);
    }
  };

  return (
    <>
      <div className="header">
        <nav>
          <div className="logo">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="Zomato-logo"
            />
          </div>
          <div className="search-bar">
            <div className="location">
              <SlLocationPin className="icon1" />
              <input type="text" placeholder="Banglore" />
              <div className="caret">
                <FaCaretDown />
              </div>
            </div>
            <div className="section"></div>
            <div className="search">
              <div className="search-icon">
                <CiSearch className="icon2" />
                <input
                  type="text"
                  placeholder="Search for restaurents , cuisine or a dish"
                  onChange={(e) => ChangeData(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="user">
            <div className="user-icon">
              <LuUser2 className="icon3" />
              <span>user</span>
              <RxCaretDown className="icon4" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
