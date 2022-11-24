import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import '../styles/common.css'
import '../styles/catalog.css'

function Catalog () {
    return (
        <div className='wrapper'>
            <Header/>

            <div className='fast-filter'>
                <div className='fast-cont'>
                    <div className='fast-filter-item'>
                        <div className='fast-filter-item_image' id='fast-men'/>
                        <div className='fast-filter-item_title'>
                            <p>МУЖЧИНАМ</p>
                        </div>
                    </div>

                    <div className='fast-filter-item'>
                        <div className='fast-filter-item_image' id='fast-women'/>
                        <div className='fast-filter-item_title'>
                            <p>ЖЕНЩИНАМ</p>
                        </div>
                    </div>

                    <div className='fast-filter-item'>
                        <div className='fast-filter-item_image' id='fast-children'/>
                        <div className='fast-filter-item_title'>
                            <p>ДЕТЯМ</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Catalog