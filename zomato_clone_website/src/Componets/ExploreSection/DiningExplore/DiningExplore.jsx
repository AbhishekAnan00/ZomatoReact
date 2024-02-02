import React from "react";
import DiningData from "../../Data/DiningData";

export const DiningExplore = () => {
  return (
    <>
      <div className="Collection">Trending dining restaurants in Banglore</div>
      <div className="card-section">
        {DiningData.map((element,k) => {
          return (
            <>
              <div className="card" key={element.id} style={{ width: "24rem", border: "none" }}>
                <img src={element.imgdata} className="card-img-top" alt={element.rname}  />
              

              <div className="card-footer">
                <div className="first-section d-flex justify-content-between align-items-center">
                  <h4>{element.rname}</h4>
                  <span>{element.rating}★</span>
                </div>
                <div className="sec-section d-flex justify-content-between align-items-center">
                  <span>{element.address}</span>
                  <span>{element.price}</span>
                </div>
                <div className="third-section">
                  <h4>{element.distance}</h4>
                </div>
              </div>
              <div className="extra"></div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
