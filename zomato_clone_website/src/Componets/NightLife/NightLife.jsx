import React from 'react'
import { BiFilter } from "react-icons/bi";
import { Filter } from '../Filter/Filter';
import { Collection } from '../../Collection/Collection';
import { NightLifeExplore } from '../ExploreSection/NightLifeExplore/NightLifeExplore';
import {Gold} from '../GoldAdv/Gold'

const NightLifeFilter = [
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
    title:"Serves Alcohol"
  },
  {
    id:6,
    title:"Open Now"
  },
  {
    id:7,
    title:"Pubs & Bars"
  }
]
const NightLifeCollections = [
  {
  id:"1",
  DiningImg:"https://b.zmtcdn.com/data/collections/e827b335426bc558b1062721b0fdee9d_1702882403.png",
  title:"Newly Open Resturent",
  Places:"10 Places"
},
{
  id:"2",
  DiningImg:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
  title:"Best in Patna",
  Places:"20 Places"
},
{
  id:"3",
  DiningImg:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
  title:"Serene Rooftop Places",
  Places:"30 Places"
},
{
  id:"4",
  DiningImg:"https://b.zmtcdn.com/data/collections/6487ebe8fbb28294be84b70041d24601_1691347530.jpg",
  title:"Trending Restaurents",
  Places:"10 Places"
},
{
  id:"5",
  DiningImg:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
  title:"Picturesque Cafes",
  Places:"10 Places"
},
{
  id:"6",
  DiningImg:"https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623276.png",
  title:"Romantic Dining Places",
  Places:"16 Places"
},
{
  id:"7",
  DiningImg:"https://b.zmtcdn.com/data/collections/95f4feccc4c848ba72a7cd835595db77_1678453481.png",
  title:"Finest Microbreweries",
  Places:"20 Places"
},
]

export const NightLife = () => {
  return (
    <div className="Nightlife">
      <Collection List={NightLifeCollections}/>
      <Filter FilterList={NightLifeFilter}/>
      <Gold/>
      <NightLifeExplore/>
    </div>
  )
}
