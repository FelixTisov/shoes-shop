import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import '../styles/common.scss'
import '../styles/catalog.scss'
import { useState } from 'react'
import {FaChevronDown} from 'react-icons/fa'
import CatalogItem from '../components/catalog_item/catalogItem'

function Catalog () {

    const [currentSort, setCurrentSort] = useState('By popular')

    const catalogGoods =  require('../assets/catalogGoods')
    console.log(catalogGoods)

    let gridLength = 4;
    let gridHeight = 4;

    return (
        <div className='wrapper'>
            <Header/>

            <div className='fast-filter'>
                <div className='fast-cont'>
                    <div className='fast-filter-item'>
                        <div className='fast-filter-item_image' id='fast-men'/>
                        <div className='fast-filter-item_title'>
                            <p>MEN</p>
                        </div>
                    </div>

                    <div className='fast-filter-item'>
                        <div className='fast-filter-item_image' id='fast-women'/>
                        <div className='fast-filter-item_title'>
                            <p>WOMEN</p>
                        </div>
                    </div>

                    <div className='fast-filter-item'>
                        <div className='fast-filter-item_image' id='fast-children'/>
                        <div className='fast-filter-item_title'>
                            <p>CHILDREN</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='catalog-cont'>
                <div className='filters-cont'>

                    <div className='filter'>
                        <div className='filter-title'>
                            <p>Category</p>
                            {/* <p>+</p> */}
                        </div>
                        <div className='filter-body'>
                            <div className='filter-item'>
                                <p>Casual</p>
                            </div>
                            <div className='filter-item'>
                                <p>Running</p>
                            </div>
                            <div className='filter-item'>
                                <p>Football</p>
                            </div>
                            <div className='filter-item'>
                                <p>Fitness</p>
                            </div>
                        </div>
                    </div>

                    <div className='filter'>
                        <div className='filter-title'>
                            <p>Sex</p>
                            {/* <p>+</p> */}
                        </div>
                        <div className='filter-body'>
                            <div className='filter-item'>
                                <p>Male</p>
                            </div>
                            <div className='filter-item'>
                                <p>Female</p>
                            </div>
                            <div className='filter-item'>
                                <p>Unisex</p>
                            </div>
                        </div>
                    </div>

                    <div className='filter'>
                        <div className='filter-title'>
                            <p>Age</p>
                            {/* <p>+</p> */}
                        </div>
                        <div className='filter-body'>
                            <div className='filter-item'>
                                <p>Adult</p>
                            </div>
                            <div className='filter-item'>
                                <p>Children</p>
                            </div>
                        </div>
                    </div>

                    <div className='filter'>
                        <div className='filter-title'>
                            <p>Material</p>
                            {/* <p>+</p> */}
                        </div>
                        <div className='filter-body'>
                            <div className='filter-item'>
                                <p>Leather</p>
                            </div>
                            <div className='filter-item'>
                                <p>Art. leather</p>
                            </div>
                            <div className='filter-item'>
                                <p>Textile</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='catalog'>
                    <div className='catalog-sort'>
                        <div className='current-sort'>
                            <p>{currentSort}</p>
                        </div>
                        <div className='choose-sort'>
                            <FaChevronDown/>
                        </div>
                    </div>

                    <div className='catalog-body-cont'>

                        {/* {
                            catalogGoods.map((item, index) => {
                                return (
                                    <CatalogItem/>
                                )                 
                            })
                        } */}


                        <div className='catalog-body'>

                            {
                                catalogGoods.map((item, index) => {
                                    return (
                                        <div className='catalog-goods-row'>
                                            {
                                                item.map(element => (
                                                    <CatalogItem 
                                                        image={element.image} 
                                                        title={element.title}
                                                        price={element.price}
                                                    />
                                                ))
                                            }
                                        </div>
                                    )                 
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Catalog