import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id,title,stock,price,thumbnail}) => {
  return (
    <>
        <div className='wrapper'>
            <div className='product-img'>
            <img src={thumbnail} alt="#" />
            </div>
            <div className='product-info'>
                <div className='product-text'>
                    <h1>{title}</h1>
                    <h2>{stock}, Unid </h2>
                    <p>{price} </p>
                </div>
                <div className='product-price-btn'>
                    <link to={`/item/${id}`} >
                    <button type='button'>Buy Now</button>
                    </link>
                    
                </div>
            </div>
        </div>
    
    
    
    
    
    </>
  )
}

export default Item