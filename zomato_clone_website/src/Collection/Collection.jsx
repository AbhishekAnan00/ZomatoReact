import React from "react";
import "./Collection.css";
import Slider from "react-slick";
import { AfterArrow } from "../Componets/Carousel/AfterArrow";
import { PrevArrow } from "../Componets/Carousel/PrevArrow";
import { FaCaretRight } from "react-icons/fa";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <AfterArrow />,
  prevArrow: <PrevArrow />,
};

export const Collection = ({ List }) => {
  return (
    <div className="collection">
      <div className="Collection">Collections</div>
      <div className="col-flex">
        <div className="col-title">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Patna, based on trends
        </div>
        <div className="col-all">
          All collections in Banglore <FaCaretRight />
        </div>
      </div>
      <div className="col-slider">
        <Slider {...settings}>
          {List.map((dining) => {
            return (
              <div className="gradient-bg">
                <img
                  src={dining.DiningImg}
                  alt={dining.title}
                  className="dining-img"
                />
                <div className="col-div"></div>
                <div className="col-name">{dining.title}</div>
                <div className="col-place">
                  {dining.Places}
                  <FaCaretRight />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
