import { Suspense, useState } from 'react'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { promoObjects } from '../components/promo_objects'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Slider from '../components/slider/slider'
import Carousel from '../components/3d_carousel/carousel'
import Button from '../components/button/Button'
import '../styles/common.scss'
import '../styles/main.scss'
import '../styles/main_mobile.scss'

import $ from 'jquery'

const Banner = React.lazy(() => import('../components/banner/banner'))

/* Сдвиг бг при прокрутке */ 
window.onscroll = function () {

    let pos = window.pageYOffset;
    let block1 = document.getElementById("yellow");
    let block2 = document.getElementById("green");

    // Анимация желтого блока
    if (pos >= 320) {
        block1.classList.add("promo-cont-active");
    }
    else {
        block1.classList.remove("promo-cont-active");
    }

    // Анимация зеленого блока
    if (pos <= 1110 ) {
        block2.classList.add("object-cont-active");
    }
    else {
        block2.classList.remove("object-cont-active");
    }

}

const saleString = 'SALES -25% FOR ALL COLLECTIONS    SALES -25% FOR ALL COLLECTIONS    SALES -25% FOR ALL COLLECTIONS    SALES -25% FOR ALL COLLECTIONS    SALES -25%'

function Main() {

    // Текущий объект в промо-товарах
    const [promoItem, setPromoItem] = useState(promoObjects[0])

    // Анимация кнопки Order Now
    const arrowOffset = () => {
        const circleArrow = document.querySelector('.button-circle')
        circleArrow.animate([
            {transform: 'translate(0)'},
            {transform: 'translate(10px)'},
            {transform: 'translate(0)'}
          ],{
            duration: 250,
            iterations: 1,
          })
    }

    // Смена текущего товара
    const chooseItem = (index) => {
        let prevItem = document.querySelector('.rounded-item-active')
        prevItem.classList.remove('rounded-item-active')

        let currentItem = document.getElementById(index);
        currentItem.classList.add('rounded-item-active')

        var number = index.slice(-1)
        setPromoItem(promoObjects[number])
    } 

    const hideCookies = () => {
        $('.cookies-warning').hide()
    }

    return(
        <div className='wrapper'>

            <div className='cookies-warning'>
                <div className='cookies-header'>
                    <div className='cookies-image'/>
                    <div className='cookies-title'>
                        <p>We use cookies</p>
                    </div>
                </div>
                <div className='cookies-body'>
                    <p>
                        We use cookies to help the website function and improve your user
                        experience. You may unable/disable cookies via 'Manage cookies'
                    </p>
                </div>
                <div className='cookies-actions'>
                    <div className='cookie-button manage'>
                        <p>Manage cookies</p>
                    </div>
                    <div className='cookie-button accept' onClick={hideCookies}>
                        <p>Accept all</p>
                    </div>
                    <div className='cookie-button reject' onClick={hideCookies}>
                        <p>Reject all</p>
                    </div>
                </div>
            </div>

            <Header/>

            {/* Блок с видео */}
            <Suspense>
                <Banner/>
            </Suspense>

            {/* Слайдер товаров */}
            <Slider>
                <div className='slider-cont' id='slide1'>
                    <div className='slider-box'>
                        <div className='image-box' id='box1'/>
                        <div className='title-cont'>
                            <span>Air Zoom</span>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <div className='image-box' id='box2'/>
                        <div className='title-cont'>
                            <span>Jordan</span>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <div className='image-box' id='box3'/>
                        <div className='title-cont'>
                            <span>Air Max</span>
                        </div>
                    </div>
                </div>

                <div className='slider-cont' id='slide2'>
                    <div className='slider-box'>
                        <div className='image-box' id='box4'/>
                        <div className='title-cont'>
                            <span>Flywire</span>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <div className='image-box' id='box5'/>
                        <div className='title-cont'>
                            <span>Force II</span>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <div className='image-box' id='box6'/>
                        <div className='title-cont'>
                            <span>Air Max</span>
                        </div>
                    </div>
                </div>

                <div className='slider-cont' id='slide3'>
                    <div className='slider-box'>
                        <div className='image-box' id='box7'/>
                        <div className='title-cont'>
                            <span>Air Zoom</span>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <div className='image-box' id='box8'/>
                        <div className='title-cont'>
                            <span>Jordan</span>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <div className='image-box' id='box9'/>
                        <div className='title-cont'>
                            <span>Air Max</span>
                        </div>
                    </div>
                </div>
            </Slider>

            {/* Раздел скидки (только моб. вер.) */}
            <div className='sale-orange-cont'>
                <span className='sale-first-line'>-25%</span>
                <span className='sale-second-line'>NEW COLLECTION</span>
            </div>

            {/* Промо раздел */}
            <div className='promo-cont' id='yellow'>
                <div className='top-cont'>
                    <div className='third-box' id='left-third-cont'>
                        <div className='brand-name-cont'>
                            <span className='shadow-text'>NIKE</span>
                        </div>
                        <div className='brand-title-cont'>
                            <p>NEW<br/>COLLECTION</p>
                        </div>

                    </div>

                    <div className='third-box'>
                        <div className='main-image' style={{ backgroundImage: `url(${promoItem.image})` }}></div>
                    </div>

                    <div className='third-box'>
                        <div className='third-box-cont'>
                            <div className='span-top'><span>{promoItem.title}</span></div>
                            <div className='span-bottom'><span>{promoItem.price}</span></div>
                        </div>
                        <div className='third-box-cont' >
                            <div className='details-button'>
                                <button className='details-button-span-cont'>
                                        <p>Details</p>
                                </button>
                            </div>
                        </div>       
                    </div>
                    
                </div>

                {/* Промо товары */}
                <div className='bottom-cont'>

                        <div class="rounded-cont">
                            <div class="rounded-item rounded-item-active" id='item0' onClick={() => chooseItem('item0')}>
                                <div class="photo-cont" >
                                    <div class="photo" id="ph1"></div>
                                </div>
                                <div class="price"><p>800$</p></div>
                            </div>
                        </div>
                        <div class="rounded-cont">
                            <div class="rounded-item" id='item1' onClick={() => chooseItem('item1')}>
                                <div class="photo-cont" >
                                    <div class="photo" id="ph2"></div>
                                </div>
                                <div class="price"><p>750$</p></div>
                            </div>
                        </div>
                        <div class="rounded-cont">
                            <div class="rounded-item" id='item2' onClick={() => chooseItem('item2')}>
                                <div class="photo-cont" >
                                    <div class="photo" id="ph3"></div>
                                </div>
                                <div class="price"><p>820$</p></div>
                            </div>
                        </div>
                        <div class="rounded-cont">
                            <div class="rounded-item" id='item3' onClick={() => chooseItem('item3')}>
                                <div class="photo-cont" >
                                    <div class="photo" id="ph4"></div>
                                </div>
                                <div class="price"><p>500$</p></div>
                            </div>
                        </div>

                </div>
            </div>

            {/* 3Д карусель */}
            <div className='object-cont' id='green'>

                <div className='object-cont-left'>
                    <div className='button-cont'>
                        <span>ORDER NOW</span>
                        <div className='button-circle' onClick={() => arrowOffset()}>
                            <FaChevronRight id='circledButton'/>
                        </div>
                    </div>
                </div>

                <Carousel/>
                
            </div>
            
            {/* Ленты с надписями */}
            <div className='sale-string-cont'>
                <div className='sale-string' id='blue-string'>
                    <div id="scroll-text"><p>{saleString}</p></div>
                </div>
                <div className='sale-string' id='green-string'>
                    <div id="scroll-text"><p>{saleString}</p></div>
                </div>
                <div className='sale-string' id='corral-string'>
                    <div id="scroll-text"><p>{saleString}</p></div>
                </div>
            </div>

            {/* Баскетбольная серия */}
            <div className='basketball-cont'>
                <h2>Nike Basketball</h2>
                <div className='basketball-image'>
                    <div className='basketball-image-button-cont'>
                        <Button bgColor = '#fff'>Explore now</Button>
                    </div>
                </div>
            </div>

            {/* Форма обратной связи */}
            <div className='form-container'>
                <form className='form'>
                    <div className='form-title-cont'>
                        <span>Subscribe to our</span>
                        <span>news and sales</span>
                    </div>
                    <form className='form-input-cont'>
                        <div className='input-cont'>
                            <input placeholder='Enter your email here' type="email"/>
                        </div>
                        <button type='submit' className='form-button'>
                            <span>Subscribe!</span>
                        </button>
                    </form>
                </form>
                <div className='form-image-cont'/>
            </div>

            <Footer/>
        </div>
    )
}

export default Main