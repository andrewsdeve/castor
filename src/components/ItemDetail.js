import React from 'react'

const ItemDetail = (props) => {
  return (
    <>
        <div className='wrapper'>
            <div className='product-img'>
            <img src={props.thumbnail} alt="#" />
            </div>
            <div className='product-info'>
                <div className='product-text'>
                    <h1>{props.title}</h1>
                    <h2>{props.condition} </h2>
                    <p>{props.description} </p>
                </div>
                <div className='product-price-btn'>
                    <p><span> {props.price} </span> </p>
                    <button type='button'>Detalis</button>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail