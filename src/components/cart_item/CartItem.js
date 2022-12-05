import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import './cartitem.scss'

function CartItem ({title, image, price}) {
  return(
    <div className='item-cont'>
        <div className='number'>
            <p>1</p>
        </div>

        <div className='item-image-cont'>
            <div className='cart-item-image' style={{backgroundImage: `url(${image})`}}/>
        </div>
        
        <div className='item-price'>
            <p>{price}$</p>
        </div>

        <div className='delete-button-cont'>
            <FaTrash className='delete-button'/>
        </div>
    </div>
  )
}

export default CartItem