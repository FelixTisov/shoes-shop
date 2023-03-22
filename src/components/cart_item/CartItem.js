import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import './cartitem.scss'

function CartItem({ title, image, price, index }) {
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch({ type: 'DELETE_GOOD', payload: index })
  }

  return (
    <div className="item-cont">
      <div className="number">
        <p>1</p>
      </div>

      <div className="item-image-cont">
        <div
          className="cart-item-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className="cart-item-title">
        <p>{title}</p>
      </div>

      <div className="item-price">
        <p>{price}$</p>
      </div>

      <div className="delete-button-cont">
        <FaTrash className="delete-button" onClick={deleteHandler} />
      </div>
    </div>
  )
}

export default CartItem
