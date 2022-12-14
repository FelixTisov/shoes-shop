import { useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Button from '../button/Button'
import * as THREE from 'three'
import './carousel.css'
import './carousel_mobile.css'

/* Импорт 3-д моделей */ 
import First from '../../models/first'
import Second from '../../models/second'
import Third from '../../models/third'

/* Настройки камеры */
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.x = 7  //вокруг центра по плоскости
camera.position.y = 0 //по вертикали
camera.position.z = 0

function Carousel() {

    const [models] = useState([Third, First, Second])
    const [model, setModel] = useState(models[1])

    // Смена 3д-модели
    const handleDotClick = async (index, id) => {

        setModel(models[index])

        let prevDot = document.querySelector('.dot-active')
        prevDot.classList.remove("dot-active")

        let currentDot = document.getElementById(id);
        currentDot.classList.add("dot-active")

        switch (id) {
            case 'dot-top':
                animateDotTop(index)
                models.unshift(...models.splice(2,1))
                break;
            case 'dot-bottom':
                animateDotBottom()
                models.push(...models.splice(0,1))
                break;
            default:
                break;
        }
        
        setTimeout(() => {
            currentDot.classList.remove("dot-active")
            prevDot.classList.add("dot-active")
        }, 730)  
        
    }

    // Прокрутка дуги выбора вниз
    const animateDotTop = () => {

        let oppositDot = document.getElementById('box-dot-bottom')
        oppositDot.style.visibility='hidden'

        let paramsTop = [] // Координаты для верхней точки
        let paramsMiddle = [] // Координаты для средней точки

        // Для мобильной версии
        if(window.matchMedia('(max-device-width: 640px)', 
                             '(min-device-width: 320px)', 
                             '(-webkit-min-device-pixel-ratio: 2)'
                            ).matches) 
        {
            paramsTop = [184, 26]
            paramsMiddle = [9, 193]
        } // Для десктопной
        else {
            paramsTop = [320, 45]
            paramsMiddle = [7, 319]
        }

        let dotTop = document.getElementById('box-dot-top')
        dotTop.animate([
            {transform: 'rotate(0deg) translateX(0px) translateY(0px)'},
            {transform: `rotate(43deg) translateX(${paramsTop[0]}px) translateY(${paramsTop[1]}px)`}
        ], {
            duration: 700,
            iterations: 1,
        })

        let dotMiddle = document.getElementById('box-dot-middle')
        dotMiddle.animate([
            {transform: 'rotate(0deg) translateX(0px) translateY(0px)'},
            {transform: `rotate(41deg) translateX(${paramsMiddle[0]}px) translateY(${paramsMiddle[1]}px)`}
        ], {
            duration: 700,
            iterations: 1,
        })

        setTimeout(() => {
            oppositDot.style.visibility='visible'
        }, 700)
        
    }

    // Прокрутка дуги выбора вверх
    const animateDotBottom = () => {

        let oppositDot = document.getElementById('box-dot-top')
        oppositDot.style.visibility='hidden'
        
        let paramsMiddle = [] // Координаты для средней точки
        let paramsBottom = [] // Координаты для нижней точки

        // Для мобильной версии
        if(window.matchMedia('(max-device-width: 640px)', 
                             '(min-device-width: 320px)', 
                             '(-webkit-min-device-pixel-ratio: 2)'
                            ).matches) 
        {
            paramsMiddle = [0, -181]
            paramsBottom = [183, -26]
        } // Для десктопной
        else {
            paramsMiddle = [4, -323]
            paramsBottom = [320, -45]
        }

        let dotMiddle = document.getElementById('box-dot-middle')
        dotMiddle.animate([
            {transform: 'rotate(0deg) translateX(0px) translateY(0px)'},
            {transform: `rotate(-38deg) translateX(${paramsMiddle[0]}px) translateY(${paramsMiddle[1]}px)`}
        ], {
            duration: 700,
            iterations: 1,
        })

        let dotBottom = document.getElementById('box-dot-bottom')
        dotBottom.animate([
            {transform: 'rotate(0deg) translateX(0px) translateY(0px)'},
            {transform: `rotate(-43deg) translateX(${paramsBottom[0]}px) translateY(${paramsBottom[1]}px)`}
        ], {
            duration: 700,
            iterations: 1,
        })

        setTimeout(() => {
            oppositDot.style.visibility='visible'
        }, 700)

    }

    return (
        <div className='object-cont-right'>
            <div className='canvas-cont'>
                <Canvas className='canvas' camera={camera}>
                    {/* Настройки сцены */}
                    <OrbitControls 
                        minPolarAngle={Math.PI/2.5} 
                        maxPolarAngle={Math.PI/2.5} 
                        enabled={true} 
                        position={[7, 7, 7]}
                        maxDistance={6} 
                        minDistance={6} 
                        autoRotate={true}
                        autoRotateSpeed={5}      
                        enablePan={false}
                    />
                    <ambientLight color={'#fff'} intensity={0.6}/>
                    
                    {/* Текущая 3д модель */}
                    { model }

                </Canvas>
            </div>
            
            <div className='radius'>

                <div className='box-dot' id='box-dot-top'>
                    <div className='dot' id='dot-top'  onClick={() => handleDotClick(0, 'dot-top')}/>
                </div>

                <div className='box-dot' id='box-dot-middle'>
                    <div className='dot dot-active' id='dot-middle' />
                </div>

                <div className='box-dot' id='box-dot-bottom'>
                    <div className='dot' id='dot-bottom' onClick={() => handleDotClick(2, 'dot-bottom')} />
                </div>

            </div>

            <div className='object-cont-tools'>
                <span className='object-cont-button'>Compare</span>
                <span className='object-cont-button'>Learn more</span>
                <span className='object-cont-button'>To cart</span>
            </div>

            {/* Только для мобильной версии */}
            
            <Button 
                bgColor = 'rgba(217, 217, 217, .35)' 
                margin ='320px'
                id='mobile-only'
            >
                ORDER NOW
            </Button>
            

            
        </div>
    )
}

export default Carousel