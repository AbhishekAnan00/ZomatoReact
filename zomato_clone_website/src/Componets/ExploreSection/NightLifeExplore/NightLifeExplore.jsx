import React from 'react'
import NightLifeData from '../../Data/NightLifeData'

export const NightLifeExplore = () => {
  return (
    <>
    <div className="Collection">
      Nightlife Restaurants in Banglore
    </div>
    <div className="card-section">
      {NightLifeData.map((elem,k)=> {
        return (
          <>
            <div className="card" key={elem.id} style={{ width: "24rem", border: "none" }}>
              <img src={elem.imgdata} className="card-img-top" alt={elem.rname}/>

              <div className="card-footer">
                <div className="first-section d-flex justify-content-between align-items-center">
                  <h4>{elem.rname}</h4>
                  <span>{elem.rating}★</span>
                </div>
                <div className="sec-section d-flex justify-content-between align-items-center">
                  <span>{elem.address}</span>
                  <span>{elem.price}</span>
                </div>
                <div className="third-section">
                  <h4>{elem.time}</h4>
                </div>
              </div>
              <div className="extra"></div>
            </div>
          </>
        );
      })}
    </div>




    </>
  )
}
