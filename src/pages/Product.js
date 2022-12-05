import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from "react-router-dom";
import { FaStar, FaChevronDown } from 'react-icons/fa'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import '../styles/common.scss'
import '../styles/product.scss'

function Product () {

  const {id} = useParams();
  const currentGood  = useSelector(state => state.selection.selectedGood)
  const itemsInCart  = useSelector(state => state.selection.itemsInCart)
  const dispatch = useDispatch()

  const addCartHandler = () => {
    // console.log('Before:')
    // console.log(itemsInCart)

    // let itemsToPush = [...itemsInCart]
    // itemsToPush.push(currentGood)

    // console.log('ItemsToPush: ')
    // console.log(itemsToPush)

    dispatch({type: 'ADD_GOOD', payload: currentGood})
    console.log('After:')
    console.log(itemsInCart)
  }

  return(
    <div className='wrapper'>
        <Header/>

        <div className='stikers-cont'>
            <div className='stiker stiker_sale'>
                <p>-15% online</p>
            </div>
            <div className='stiker stiker_new'>
                <p>NEW</p>
            </div>
        </div>

        <div className='rating-cont'>
            <FaStar className='rating-star'/>
            <FaStar className='rating-star'/>
            <FaStar className='rating-star'/>
            <FaStar className='rating-star'/>
            <p>4.2</p>
        </div>

        <div className='product-main-cont'>
            <div className='product-image-cont'>
                <div className='product-image' style={{backgroundImage: `url(${currentGood.image})`}}/>
            </div>
            <div className='order-cont'>
                <div className='order-cont_right'>
                    <div className='order-title'>
                        <p className='order-first'>Sneakers male</p>
                    </div>

                    <div className='order-title'>
                        <p className='order-second'>{currentGood.title}</p>
                    </div>

                    <div className='order-tool-cont order-tool_left'>
                        <div className='rounded-cont order-price'>
                            <p>{currentGood.price}$</p>
                        </div>
                    </div>
                    <div className='order-tool-cont'>
                        <div className='choose-size'>
                            <p>Choose your size</p>
                            <FaChevronDown/>
                        </div>
                    </div>
                    <div className='order-tool-cont order-tool_right'>
                        <div className='rounded-cont add-cart' onClick={addCartHandler}>
                            <p>Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Product