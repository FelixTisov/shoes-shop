import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import '../styles/animated.css'
import '../styles/common.css'
import '../styles/main.css'

const saleString = 'SALES -25% FOR ALL COLLECTIONS  ●  SALES -25% FOR ALL COLLECTIONS  ●  SALES -25% FOR ALL COLLECTIONS  ●  SALES -25% FOR ALL COLLECTIONS  ●  SALES -25%'
//const saleString = 'SALES -25% FOR ALL COLLECTIONS     SALES -25% FOR ALL COLLECTIONS     SALES -25% FOR ALL COLLECTIONS     SALES -25% FOR ALL COLLECTIONS     SALES -25% FOR ALL'

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
                            <div className='arrow-right'/>
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
                            <span class="dot"></span>
                            <span>NIKE</span>
                            <span class="dot"></span>
                            
                        </div>
                        <hr/>
                        <div className='brand-title-cont'>
                            <p>NEW<br/>COLLECTION</p>
                        </div>

                    </div>

                    <div className='third-box'>
                        <div className='main-image'></div>
                    </div>

                    <div className='third-box'>
                        <div className='third-box-cont'>
                            <span>AIR MAX</span>
                        </div>
                        <div className='third-box-cont' >
                            <div className='details-button'>
                                <div className='details-button-span-cont'>
                                    <p>Details</p>
                                </div>
                                <div className='details-button-arrow-cont'>
                                    <div className='arrow'>
                                        <div className='arrow-right' id='details-arrow-right'/>
                                    </div>
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
                <div className='basketball-image'></div>
            </div>

            {/* Форма обратной связи */}
            <div className='form-container'>
                <div className='form'>
                    <div className='form-title-cont'>
                        <span>Subscribe to our</span>
                        <span>news and sales</span>
                    </div>
                    <div className='form-input-cont'>
                        <div className='input-cont'>
                            <input placeholder='Enter your email here' type="email"/>
                        </div>
                        <div className='form-button'>
                            <span>Subscribe!</span>
                        </div>
                    </div>
                </div>
                <div className='form-image-cont'>

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