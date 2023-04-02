import './style.css'
import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Sky from './sky'
import Light from './light'
import Tela from './tela'
import Model from './models'
import PostProcessing from './postprocessing'

import {Stats, Environment,OrbitControls } from "@react-three/drei";
import { useControls } from 'leva'



const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <Suspense fallback={<span id="loading">LOADING</span>}>
        <Canvas
            flat
            camera={ {
                fov: 90,
                near: 0.1,
                far: 100,
                position: [ 4, 2, 10 ]
            } }
        >
            <OrbitControls makeDefault />
            <PostProcessing />
            <Sky />
            <Light />
            <Experience />
            <Model />
            <Tela />
            <Stats />
        </Canvas>
    </Suspense>
)