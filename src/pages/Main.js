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
                        </div>
                        <div className='brand-title-cont'>
                            <p>NEW<br/>COLLECTION</p>
                        </div>

                    </div>

                    <div className='third-box'>
                        <div className='main-image'></div>
                    </div>

                    <div className='third-box'>

                    </div>
                </div>
                <div className='bottom-cont'>

                </div>
            </div>

            {/* Основная часть */}
            <div class="main">
                
            </div>

            <Footer/>

        </div>
    )
}

export default Main