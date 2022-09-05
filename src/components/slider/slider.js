import { useState } from 'react'
import './slider.css'

const pageWidth = 100


function Slider({children}) {

    const [offset, setOffset] = useState(0)

    const handleLeft = () => {
        setOffset((currentOffset) => {
            return Math.min((currentOffset + pageWidth), 0)
        })
    }
    
    const handleRight = () => {
        setOffset((currentOffset) => {
            const maxOffset = -(pageWidth * 2)
            return Math.max((currentOffset - pageWidth), maxOffset)
        })
    }

    return (
        <div className="main-cont">
            <div className="carousel">

                {/* Стрелка влево */}
                <div className='arrow-cont'>
                    <div className='arrow' onClick={handleLeft} >
                        <div id='arrow-left'/>
                    </div>
                </div>

                {/* Все слайды */}
                <div className='window'>
                    <div className="all-items-cont"
                        style={{
                            transform: `translateX(${offset}%)`
                        }}
                    >{children}</div>
                </div>

                {/* Стрелка вправо */}
                <div className='arrow-cont'>
                    <div className='arrow' onClick={handleRight}>
                        <div className='arrow-right'/>
                    </div>
                </div>

            </div>

            {/* Указатели слайда */}
            <div className='circles-cont'>
                <div className='circles'>
                    <div className='round active'></div>
                    <div className='round'></div>
                    <div className='round'></div>
                </div>
            </div>

        </div>
    )
}

export default Slider