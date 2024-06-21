import React from 'react'
import './FoodItem.css'

const FoodItem = ({id, name, image, price, description}) => {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-img" />
        </div>
    </div>
  )
}

export default FoodItem