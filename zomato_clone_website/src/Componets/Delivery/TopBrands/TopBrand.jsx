import React from 'react'
import './TopBrand.css'
import { AfterArrow } from '../../Carousel/AfterArrow';
import { PrevArrow } from '../../Carousel/PrevArrow';
import Slider from 'react-slick'

const TopBrandList = [
  {
    id:1,
    title:"Burger King",
    time:"25 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp"
  },
  {
    id:2,
    title:"McDonald's",
    time:"20 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
  },
  {
    id:3,
    title:"BOX8-Desi Meals",
    time:"24 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d51c24a1a0146ecf906eb69203f2bc7e_1633503089.png?output-format=webp"
  },
  {
    id:4,
    title:"KFC",
    time:"22 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
  },
  {
    id:5,
    title:"Pizza Hut",
    time:"22 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp"
  },
  {
    id:6,
    title:"Imperial Restaurant-Since 1954",
    time:"18 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/14ac00ece1e6963f02605211b4b69603_1706075890.png?output-format=webp"
  },
  {
    id:7,
    title:"Nandhana Palace",
    time:"30 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f7e21286435d82037d62392994ea0104_1638685800.png?output-format=webp"
  },

  {
    id:8,
    title:"Beijing Bites",
    time:"27 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1caa10bf3067695b7760cd83aaa38ee5_1549360511.png?output-format=webp"
  }
]

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <AfterArrow/>,
  prevArrow: <PrevArrow/>
};

export const TopBrand = () => {
  return (
    <div className="topbrand">
        <div className="Collection">
        Top brands for you
        </div>
        <Slider {...settings}>
          {TopBrandList.map((brand) => {
            return <div key={brand.id} >
               <div className="topbrand-cover">
                <img src={brand.cover} alt={brand.title}/>
               </div>
               <div className="brand-title">
                {brand.title}
               </div>
               <div className="brand-time">
                {brand.time}
               </div>
            </div>
          })}
        </Slider>
    </div>
  )
}
