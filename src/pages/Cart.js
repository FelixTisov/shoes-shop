import { useSelector } from 'react-redux'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import CartItem from '../components/cart_item/CartItem'
import '../styles/common.scss'
import '../styles/cart.scss'

function Cart() {
  const itemsInCart = useSelector((state) => state.selection.itemsInCart)

  let totalCount = 0
  let totalPrice = 0

  itemsInCart.forEach((element) => {
    totalPrice += Number(element.price)
    totalCount++
  })

  return (
    <div className="wrapper">
      <Header />

      <div className="mid-column">
        <div className="items-list-cont">
          <div className="items-list_title">
            <p>Your goods:</p>
          </div>
          <div className="items-list">
            {itemsInCart.map((item, index) => {
              return (
                <CartItem
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  index={index}
                />
              )
            })}
          </div>
        </div>
        <div className="submit-form">
          <div className="cart-title">
            <p>In cart:</p>
          </div>
          <div className="cart-title count">
            <p>{totalCount}</p>
          </div>
          <div className="cart-title promo-button">
            <p>Enter promocode</p>
          </div>
          <div className="total-price">
            <p>{totalPrice}$</p>
          </div>
          <div className="submit-button">
            <p>Submit</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
