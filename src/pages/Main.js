import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import '../styles/animated.css'
import '../styles/common.css'
import '../styles/main.css'

function Main() {
    return(
        <div className='wrapper'>

            <Header/>

            {/* Блок с видео */}
            <div class="video-cont" >
                <div class="wordCarousel">
                    <div class="left">
                        <p>BEST</p>
                    </div>
                    <div class="right">
                        <ul class="flip">
                            <div class="swipe-item">
                                <p>YOU</p>
                            </div>
                            <div class="swipe-item">
                                <p>PRICES</p>
                            </div>
                            <div class="swipe-item">
                                <p>BRANDS</p>
                            </div>     
                        </ul>
                    </div>
                </div>

                <video autoPlay="autoplay" id="vid" muted loop>
                    <source src="/Videos/promo.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                </video>
            </div>

            {/* Карусель товаров */}
            <div className='carousel-cont'>
                <div className='carousel'>

                    <div className='arrow-cont'>
                        <div className='arrow' >
                            <div id='arrow-left'/>
                        </div>
                    </div>

                    <div className='slider-cont'>
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

                    <div className='arrow-cont'>
                        <div className='arrow'>
                            <div id='arrow-right'/>
                        </div>
                    </div>

                </div>

                <div className='circles-cont'>
                    <div className='circles'>
                        <div className='round active'></div>
                        <div className='round'></div>
                        <div className='round'></div>
                    </div>

                </div>
            </div>

            {/* Промо раздел */}
            <div className='promo-cont'>
                <div className='top-cont'>
                    <div className='third-box'>
                        <div className='brand-name-cont'>
                            <span>NIKE</span>
                            <hr/>
                        </div>
                        <div className='brand-title-cont'>
                            <p>NEW<br/>COLLECTION</p>
                        </div>

                    </div>

                    <div className='third-box'>
                        <div className='main-image'></div>
                    </div>

                    <div className='third-box'>
                        
                        <span>AIR MAX</span>
                        <div className='details-button'>
                            <div className='details-button-span-cont'>
                                <span>Details</span>
                            </div>
                            <div className='details-button-arrow-cont'>
                                <div className='arrow'>
                                    <div id='arrow-right'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Промо товары */}
                <div className='bottom-cont'>

                        <div class="rounded-cont">
                            <div class="rouned-item rouned-item-active">
                                <div class="photo-cont" >
                                    <div class="photo" id="ph1"></div>
                                </div>
                                <div class="price"><p>800$</p></div>
                            </div>
                        </div>
                        <div class="rounded-cont">
                            <div class="rouned-item">
                                <div class="photo-cont" >
                                    <div class="photo" id="ph2"></div>
                                </div>
                                <div class="price"><p>750$</p></div>
                            </div>
                        </div>
                        <div class="rounded-cont">
                            <div class="rouned-item">
                                <div class="photo-cont" >
                                    <div class="photo" id="ph3"></div>
                                </div>
                                <div class="price"><p>820$</p></div>
                            </div>
                        </div>
                        <div class="rounded-cont">
                            <div class="rouned-item">
                                <div class="photo-cont" >
                                    <div class="photo" id="ph4"></div>
                                </div>
                                <div class="price"><p>500$</p></div>
                            </div>
                        </div>

                </div>
            </div>

            {/* 3Д карусель */}
            <div className='object-cont'>

            </div>

            {/* Основная часть */}
            <div class="main">
                
            </div>

            <Footer/>

        </div>
    )
}

export default Main