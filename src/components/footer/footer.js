import './footer.css'

function Footer() {
    return(
        <footer>
            <div class="mid-text">
                <div class="column">
                    <a>Оплата</a>
                    <a>Доставка</a>
                    <a>Контакты</a>
                </div>
                <div class="column">
                    <a>Лицензия</a>
                    <a>Партнёрство</a>
                    <a>Поставщики</a>
                </div>
                <div class="column">
                    <a href="../pages/help.html">Поддержка</a>
                    <a>Бонусы</a>
                    <a>Клиентам</a>
                </div>
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
        </footer>
    )
}

export default Footer