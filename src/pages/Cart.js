import { useState } from 'react'
import { FaStar, FaChevronDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import CartItem from '../components/cart_item/CartItem'
import '../styles/common.scss'
import '../styles/cart.scss'

function Cart () {

  const catalogGoods =  require('../assets/catalogGoods')

  const itemsInCart  = useSelector(state => state.selection.itemsInCart)

  let totalPrice = 0
  itemsInCart.forEach(element => {
    totalPrice += Number(element.price)
  })

  console.log(itemsInCart)

  return(
    <div className='wrapper'>
        <Header/>

        <div className='mid-column'>
            <div className='items-list-cont'>
                <div className='items-list_title'>
                    <p>Your goods:</p>
                </div>
                <div className='items-list'>

                    {
                        itemsInCart.map((item, index) => {
                            return (
                                <CartItem 
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                /> 
                            )                 
                        })
                    }
                    
                </div>
            </div>
            <div className='submit-form'>
                <div className='total-price'>
                    <p>{totalPrice}$</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart