import React from 'react';
import './CategoryData.css';
const CategoryData = ({Imgsrc,CategoryName}) => {
  return (
    <div className='CategoryData'>
        <div className='CategoryData_img'>
            <img src={Imgsrc} alt='category_img'/>  
        </div>
        <p className='category_name'>{CategoryName}</p>
    </div>
  )
}

export default CategoryData;