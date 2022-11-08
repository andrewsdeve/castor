import React from 'react'
const CartWidget = () => {
  return (
    <div className='Wrapper'>
        <div className='CartShopping'>
            <a href="www" className='cart'><i className='fas fa-shopping-cart'></i>
            <span id="cart_menu_num" className='badge rounded-circle'>5</span>
        </a>
        </div>
    </div>
  )
}
export default CartWidget