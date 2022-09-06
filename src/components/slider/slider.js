import { useState } from 'react'
import './slider.css'

const offsetIndex = 1

function Slider({children}) {
    
    const [offset, setOffset] = useState(0)

    // Нажатие влево
    const handleLeft = () => {

        setOffset((currentOffset) => {
            return Math.min((currentOffset + offsetIndex), 0)
        })
        setDotActive(-offset-1)

    }
    
    // Нажатие вправо
    const handleRight = () => {

        setOffset((currentOffset) => {
            const maxOffset = -(offsetIndex * 2)
            return Math.max((currentOffset - offsetIndex), maxOffset)
        })
        setDotActive(-offset+1)

    }

    function setDotActive(index) {
        if(index <= 2 && index >=0) {
            let currentDot = document.getElementById(index);
            let prevDot = document.querySelector('.round-active')

            prevDot.classList.remove("round-active")
            currentDot.classList.add("round-active")
        }
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
                            transform: `translateX(${(offset*100)}%)`
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
                    <div className='round round-active' id='0'></div>
                    <div className='round' id='1'></div>
                    <div className='round' id='2'></div>
                </div>
            </div>

        </div>
    )
}

export default Slider