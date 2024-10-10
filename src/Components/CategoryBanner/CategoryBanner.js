import React from 'react'
import './CategoryBanner.css'
const CategoryBanner = ({ImgSrc,Title,Brand,Amount}) => {
  return (
    <div className="CategoryBanner">
        <img src={ImgSrc} alt="" className="CategoryBanner-img" />
        <p className="CategoryBanner-title">
            {Title.length < 25 ? Title : Title.slice(0, 25) + "..."}
        </p>
        <p className="CategoryBanner-Brands">{Brand}</p>
        <h3 className='CategoryBanner-amount'>{Amount}</h3>
  </div>
  )
}

export default CategoryBanner;