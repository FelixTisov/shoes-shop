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
                        <div className='slider-box' id='box1'>

                        </div>
                        <div className='slider-box' id='box1'>

                        </div>
                        <div className='slider-box' id='box1'>

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
                        <div className='round'></div>
                        <div className='round'></div>
                        <div className='round'></div>
                    </div>

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