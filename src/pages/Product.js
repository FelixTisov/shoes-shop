import { useDispatch, useSelector } from 'react-redux'
import { FaStar, FaChevronDown } from 'react-icons/fa'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import '../styles/common.scss'
import '../styles/product.scss'

function Product() {
  const currentGood = useSelector((state) => state.selection.selectedGood)
  const dispatch = useDispatch()

  const addCartHandler = () => {
    dispatch({ type: 'ADD_GOOD', payload: currentGood })
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="stikers-cont">
        <div className="stiker stiker_sale">
          <p>-15% online</p>
        </div>
        <div className="stiker stiker_new">
          <p>NEW</p>
        </div>
      </div>

      <div className="rating-cont">
        <FaStar className="rating-star" />
        <FaStar className="rating-star" />
        <FaStar className="rating-star" />
        <FaStar className="rating-star" />
        <p>4.2</p>
      </div>

      <div className="product-main-cont">
        <div className="product-image-cont">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${currentGood.image})` }}
          />
        </div>
        <div className="order-cont">
          <div className="order-cont_right">
            <div className="order-title">
              <p className="order-first">Sneakers male</p>
            </div>

            <div className="order-title">
              <p className="order-second">{currentGood.title}</p>
            </div>

            <div className="order-tool-cont order-tool_left">
              <div className="rounded-container order-price">
                <p>{currentGood.price}$</p>
              </div>
            </div>
            <div className="order-tool-cont">
              <div className="choose-size">
                <p>Choose your size</p>
                <FaChevronDown />
              </div>
            </div>
            <div className="order-tool-cont order-tool_right">
              <div
                className="rounded-container add-cart"
                onClick={addCartHandler}
              >
                <p>Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Описание товара */}
      <div className="information-cont">
        <div className="information-cont_half">
          <div className="swith-info">
            <div className="info-button info-button_active">
              <p>ABOUT</p>
            </div>
            <div className="info-button info-button_right">
              <p>REVIEWS</p>
            </div>
          </div>

          <div className="main-info">
            <p>MAIN INFORMATION</p>
          </div>

          <div className="info-columns-cont">
            <div className="info-column">
              <div className="info-column_item">
                <p>Articul</p>
              </div>
              <div className="info-column_item">
                <p>Brand</p>
              </div>
              <div className="info-column_item">
                <p>Season</p>
              </div>
              <div className="info-column_item">
                <p>Sex</p>
              </div>
              <div className="info-column_item">
                <p>Color</p>
              </div>
              <div className="info-column_item">
                <p>Category</p>
              </div>
              <div className="info-column_item">
                <p>Main material</p>
              </div>
              <div className="info-column_item">
                <p>Sole material</p>
              </div>
            </div>
            <div className="info-column">
              <div className="info-column_item">
                <p>{currentGood.id}</p>
              </div>
              <div className="info-column_item">
                <p>Nike</p>
              </div>
              <div className="info-column_item">
                <p>Summer</p>
              </div>
              <div className="info-column_item">
                <p>Male</p>
              </div>
              <div className="info-column_item">
                <p>White, corall, black</p>
              </div>
              <div className="info-column_item">
                <p>Running</p>
              </div>
              <div className="info-column_item">
                <p>Leather</p>
              </div>
              <div className="info-column_item">
                <p>Recycled plastic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="information-cont_half">
          <div className="swith-info" />
          <div className="main-info">
            <p>NIKE BRAND</p>
          </div>
          <div className="info-columns-cont info-brand">
            <p>
              Nike, Inc. is an American multinational association that is
              involved in the design, development, manufacturing and worldwide
              marketing and sales of apparel, footwear, accessories, equipment
              and services. The company’s world headquarters are situated near
              Beaverton, Oregon, in the Portland metropolitan area (USA). It is
              a major producer of sports equipment and one of the world’s
              largest suppliers of athletic shoes and apparel.
            </p>
          </div>
          <div className="main-info">
            <div className="learn-more-bitton">
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Product
