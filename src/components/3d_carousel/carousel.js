import { useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import './carousel.css'

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

        let dotTop = document.getElementById('box-dot-top')
        dotTop.animate([
            {transform: 'rotate(0deg) translateX(0px) translateY(0px)'},
            {transform: 'rotate(43deg) translateX(320px) translateY(45px)'}
        ], {
            duration: 700,
            iterations: 1,
        })

        let dotMiddle = document.getElementById('box-dot-middle')
        dotMiddle.animate([
            {transform: 'rotate(0deg) translateX(0px) translateY(0px)'},
            {transform: 'rotate(41deg) translateX(7px) translateY(319px)'}
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

        let dotMiddle = document.getElementById('box-dot-middle')
        dotMiddle.animate([
            {transform: 'rotate(0deg) translateX(0px) translateY(0px)'},
            {transform: 'rotate(-38deg) translateX(4px) translateY(-323px)'}
        ], {
            duration: 700,
            iterations: 1,
        })

        let dotTop = document.getElementById('box-dot-bottom')
        dotTop.animate([
            {transform: 'rotate(0deg) translateX(0px) translateY(0px)'},
            {transform: 'rotate(-43deg) translateX(320px) translateY(-45px)'}
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
                        ro
                        maxDistance={6} 
                        minDistance={6} 
                        autoRotate={true}
                        autoRotateSpeed={5} 
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
        </div>
    )
}

export default Carousel