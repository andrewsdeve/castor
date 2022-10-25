import React from 'react'
import { FaApple} from 'react-icons/fa'
import ItemListContainer from './ItemListContainer'

const CartWidget = () => {
  return (
    <div className='Wrapper'>
        <div className='LogoContainer'>
            <FaApple/>
            <p>Castor-</p>
            <p>Online</p>
            <ItemListContainer texto = 'iPhone' />
            <ItemListContainer texto = 'iPad' />
            <ItemListContainer texto = 'Mac' />
            <ItemListContainer texto = 'AirPods' />
            <ItemListContainer texto = 'Accesorios' />
        </div>
        <div className='CartShopping'>
            
            <a href="#" class="cart"><i class="fas fa-shopping-cart"></i>
            <span id="cart_menu_num"  class="badge rounded-circle">5</span>
        </a>
        </div>
    </div>
  )
}

export default CartWidget