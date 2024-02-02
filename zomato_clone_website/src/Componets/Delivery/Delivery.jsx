import React from 'react'
import { Filter } from '../Filter/Filter' 
import { BiFilter } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";
import './Delivery.css'
import { DeliveryCollection } from './DeliveryCollection/DeliveryCollection';
import { TopBrand } from './TopBrands/TopBrand';
import { ExploreSection } from '../ExploreSection/ExploreSection';
import RESTAURENTS from '../Data/Restaurent';

const DeliveryFilter = [
  {
    id:1,
    title:"Filters",
    icon: <BiFilter className='icon'/>
  },
  {
    id:2,
    title:"Rating 4.0+"
  },
  {
    id:3,
    title:"Pure veg"
  },
  {
    id:4,
    icon:<RxCaretDown className='icon' />,
    title:"Cuisines"
    
  }
]



export const Delivery = () => {
  return (
    <>
    <div className="delivery-filter">
      <div className="filter">
      <Filter FilterList={DeliveryFilter}/>
      </div>
      <DeliveryCollection/>
      <TopBrand/>
      <ExploreSection List={RESTAURENTS}/>
    </div>
    
    
    </>
  )
}
