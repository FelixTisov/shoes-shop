import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './header.scss'
import './header_mobile.scss'

function Header() {

    const [isVisible, setVisibility] = useState('hidden')
    const [openIsVisible, setOpenVisibility] = useState('visible')
    const [closeIsVisible, setCloseVisibility] = useState('hidden')

    const navigate = useNavigate()

    // Обработчик нажатия кнокпи меню
    const menuBtnHandler = () => {

        let menu = document.querySelector('.menu-cont')

        if(openIsVisible==='visible') {
            setOpenVisibility('hidden')
            setCloseVisibility('visible')
        }
        else {
            setOpenVisibility('visible')
            setCloseVisibility('hidden')
        }

        if(isVisible==='hidden') {
            setVisibility('visible')
            menu.animate([
                {transform: 'translateY(-100vh)'},
                {transform: `translateY(0vh)`}
            ], {
                duration: 300,
                iterations: 1,
            })
        }
        else {
            menu.animate([   
                {transform: `translateY(0vh)`},
                {transform: 'translateY(-100vh)'}
            ], {
                duration: 300,
                iterations: 1,
            })
            setTimeout(() => {
                setVisibility('hidden')
            }, 300) 
        }

    }
    
    return(
        <header>
            <nav>

                {/* Только для моб версии */}
                <div className='menu-btn' onClick={menuBtnHandler}>
                    <div className='open-btn' style={{visibility: openIsVisible}}>
                        <div className='menu-line line-top'/>
                        <div className='menu-line line-middle'/>
                        <div className='menu-line line-bottom'/>
                    </div>

                    <div className='close-btn' style={{visibility: closeIsVisible}}>
                        <div className='cross-line cross-left'/>
                        <div className='cross-line cross-right'/>
                    </div>
                    
                </div>

                {/* Только для моб версии */}
                <div className='menu-cont' style={{visibility: isVisible}}>
                    <div className='menu-nav'>
                        <a href='#' id='current-page'>Home</a>
                        <a href='#'>Catalog</a>
                        <a href='#'>Brands</a>
                        <a href='#'>Sports</a>
                    </div>

                    <div className='menu-icons-cont'>
                        <button className="nav-element">
                            <div className="search-icon"></div>
                        </button>
                        <button className="nav-element">
                            <div className="kart"></div>
                        </button>
                        <button className="nav-element">
                            <div className="user"></div>
                        </button>
                    </div>

                </div>

                <div className="nav-items">
                    <div className="item">
                        <p onClick={()=>{navigate('/')}} id='current-page'>Home</p>
                    </div>
                    <div className="item">
                        <p onClick={()=>{navigate('/catalog')}}>Catalog</p>
                    </div>
                    <div className="item">
                        <p>Brands</p>
                    </div>
                    <div className="item">
                        <p>Sports</p>
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