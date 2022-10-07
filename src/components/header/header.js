import './header.css'
import './header_mobile.css'

function Header() {
    return(
        <header>
            <nav>
                <div className="nav-items">
                    <div className="item">
                        <a href='#' id='current-page'>Home</a>
                    </div>
                    <div className="item">
                        <a href='#'>Catalog</a>
                    </div>
                    <div className="item">
                        <a href='#'>Brands</a>
                    </div>
                    <div className="item">
                        <a href='#'>Sports</a>
                    </div>
                </div>

                <div className="nav-btns">

                    <div className='search-cont'>
                        <div className="search-field">
                            <div className='search-input'><input placeholder='Search' /></div>
                            <div className="search-icon"></div>
                        </div>
                    </div>

                    <div className='nav-cont'>
                        <div className="nav-element">
                            <div className="kart"></div>
                        </div>
                        <div className="nav-element">
                            <div className="user"></div>
                        </div>
                    </div>
                                
                </div>
            </nav>
        </header>
    )
}

export default Header