import React from 'react'
import './DeliveryItem.css'
export const DeliveryItem = ({item}) => {
  return (
    <div className="delivery-item">
      <div className="del-cover">
        <img src={item.cover} alt={item.title} className='del-item-img'/>
      </div>
      <div className="del-title">{item.title}</div>
    </div>
  )
}
