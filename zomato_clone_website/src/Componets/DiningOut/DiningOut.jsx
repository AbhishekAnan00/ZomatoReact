import React from 'react'
import './DiningOut.css'
import { Collection } from '../../Collection/Collection'
import { Filter } from '../Filter/Filter'
import { BiFilter } from "react-icons/bi";
import { DiningExplore } from '../ExploreSection/DiningExplore/DiningExplore';
import { Gold } from '../GoldAdv/Gold';

const DiningFilter = [
  {
    id:1,
    title:"Filters",
    icon: <BiFilter className='icon'/>,
  },
  {
    id:2,
    title:"Gold",
    icon: <img src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png" className='img-icon' />
  },
  {
    id:3,
    title:"Rating: 4.0+"
  },
  {
    id:4,
    title:"Outdoor Seating"
    
  },
  {
    id:5,
    title:"Open Now"
  }
]
const DiniingData = [
  {
    id:"1",
    DiningImg:"https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1687243519.jpg",
    title:"13 Great Cafes",
    Places:"13 Places"
  },
  {
    id:"2",
    DiningImg:"https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1687244301.jpg",
    title:"5 Best Luxury Dining Places",
    Places:"7 Places"
  },
  {
    id:"3",
    DiningImg:"https://b.zmtcdn.com/data/collections/cb441382af822ed30451d127d4a9eb76_1682690432.jpg",
    title:"14 North Indian Delicacies",
    Places:"13 Places"
  },
  {
    id:"4",
    DiningImg:"https://b.zmtcdn.com/data/collections/21650cff91a2be578aca3a09325fe694_1690789368.png",
    title:"5 Ultimate Veg Recipe",
    Places:"5 Places"
  },
  {
    id:"5",
    DiningImg:"https://b.zmtcdn.com/data/collections/c5d2b79…_1687244840.png",
    title:"12 Local Favourite Places",
    Places:"9 Places"
  },
  {
    id:"6",
    DiningImg:"https://b.zmtcdn.com/data/collections/3b1f56c…_1688043045.png",
    title:"7 Bingeworthy Desserts",
    Places:"6 Places"
  },
]


export const DiningOut = () => {
  return (
    <div className="dining">
      <Collection List={DiniingData}/>
      <Filter FilterList={DiningFilter}/>
      <Gold/>
      <DiningExplore/>
    </div>
  )
}
