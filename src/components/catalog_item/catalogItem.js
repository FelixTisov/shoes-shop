import './catalogItem.scss'

function CatalogItem ({image, title, price}) {
    return(
        <div className='catalog-item'>
            <div className='item-image' style={{backgroundImage: `url(${image})`}}>

            </div>
            <div className='item-about'>
                <div className='item-about_title'>
                    <p>{title}</p>
                </div>
                <div className='item-about_price'>
                    <p>{price}$</p>
                </div>
            </div>

        </div>
    )
}

export default CatalogItem