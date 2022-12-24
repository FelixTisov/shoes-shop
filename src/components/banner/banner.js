import './banner.scss'
import './banner_mobile.scss'

function Banner () {
    return (
        <div class="video-cont" >
            <div class="wordCarousel">
                <div class="left">
                    <p>BEST</p>
                </div>
                <div class="right">
                    <ul class="flip">
                        <div class="swipe-item" id='you-swipe-item'>
                            <p>YOU</p>
                        </div>
                        <div class="swipe-item" id='prices-swipe-item'>
                            <p>PRICES</p>
                        </div>
                        <div class="swipe-item" id='brands-swipe-item'>
                            <p>BRANDS</p>
                        </div>                             
                    </ul>
                </div>
            </div>

            <video autoPlay={true} muted loop playsInline={true} id="vid">
                <source src="/Videos/promo.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>
        </div>
    )
}

export default Banner