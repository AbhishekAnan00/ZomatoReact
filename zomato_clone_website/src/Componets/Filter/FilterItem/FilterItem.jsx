import React from 'react'
import './FilterItem.css'
export const FilterItem = ({filter}) => {
  return (
    <div className="filteritem">
       {filter.icon && filter.icon}
       <div className="filter-title">
        {filter.title}
       </div>
    </div>
  )
}
