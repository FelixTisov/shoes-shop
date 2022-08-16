import './footer.css'

function Footer() {
    return(
        <footer>
            <hr/>
            <div className='text-line first-line'>
                <a href='#'>Order Status</a>
                <a href='#'>Blog</a>
                <a href='#'>Gift Cards</a>
                <a href='#'>Coupons</a>
                <a href='#'>About Us</a>
            </div>
            <div className='text-line second-line'>
                <a href='#'>License</a>
                <a href='#'>News</a>
                <a href='#'>Shipping</a>
                <a href='#'>Investors</a>
                <a href='#'>Returns</a>
            </div>  

            <div class="contacts">
                <div class="icon-cont">
                    <div class="icon" id="icon1">
                        <a href="https://www.instagram.com/nike/">  </a>
                    </div>   
                </div>
                <div class="icon-cont">
                    <div class="icon" id="icon2"></div>   
                </div>
                <div class="icon-cont">
                    <div class="icon" id="icon3"></div>   
                </div>
            </div>

            <hr id='hr-bottom'/>

            <div className='mark-cont'>
                <span>© 2022 All Rights Reserved.</span>
            </div>
            
        </footer>
    )
}

export default Footer