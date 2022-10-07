import { useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import './slider.css'
import './slider_mobile.css'

const offsetIndex = 1

function Slider({children}) {
    
    const [offset, setOffset] = useState(0)

    // Нажатие влево
    const handleLeft = () => {

        setOffset((currentOffset) => {     
            let newOffset = currentOffset + offsetIndex
            if(newOffset>0) {
                setDotActive(2)
                return -2
            }          
            else {
                setDotActive(-offset-1)
                return newOffset
            } 
        })      

    }
    
    // Нажатие вправо
    const handleRight = () => {

        setOffset((currentOffset) => {
            let newOffset = currentOffset - offsetIndex
            if(newOffset<-2) {
                setDotActive(0)
                return 0
            }
            else {
                setDotActive(-offset+1)
                return newOffset
            } 
        })

    }

    // Прокрутка при нажатии на индикатор текщего слайда
    const handleRoundClick = (index) => {
        setDotActive(index)
        setOffset(-index)
    }

    // Изменения стиля аквтиного индикатора
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
                    <FaChevronLeft className='arrow' onClick={handleLeft}/>
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
                    <FaChevronRight className='arrow' onClick={handleRight}/>
                </div>

            </div>

            {/* Указатели слайда */}
            <div className='circles-cont'>
                <div className='circles'>
                    <div className='round round-active' id='0' onClick={() => handleRoundClick(0)}></div>
                    <div className='round' id='1' onClick={() => handleRoundClick(1)}></div>
                    <div className='round' id='2' onClick={() => handleRoundClick(2)}></div>
                </div>
            </div>

        </div>
    )
}

export default Slider