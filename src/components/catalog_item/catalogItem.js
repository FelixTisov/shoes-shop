import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './catalogItem.scss'

function CatalogItem({ image, title, price, id, productItem }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openItemHandler = () => {
    dispatch({ type: 'SELECT_GOOD', payload: productItem })
    navigate(`/catalog/product/${id}`)
  }

  return (
    <div className="catalog-item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${image})` }}
        onClick={openItemHandler}
      ></div>
      <div className="item-about">
        <div className="item-about_title">
          <p
            onClick={() => {
              navigate(`/catalog/product/${id}`)
            }}
          >
            {title}
          </p>
        </div>
        <div className="item-about_price">
          <p
            onClick={() => {
              navigate(`/catalog/product/${id}`)
            }}
          >
            {price}$
          </p>
        </div>
      </div>
    </div>
  )
}

export default CatalogItem
