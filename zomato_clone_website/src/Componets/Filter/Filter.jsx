import React from 'react'
import './Filter.css'
import { FilterItem } from './FilterItem/FilterItem'
export const Filter = ({FilterList}) => {
  return (
    <div className="filtercomp">
      {FilterList && FilterList.map((filter)=>{
        return <FilterItem filter={filter} key={filter.id}/>
      }) }
    </div>
  )
}
