import { useFrame, useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function Model()
{
    const gltf0 = useLoader(
        GLTFLoader,
        './model/monkey.glb'
      )
    const { position, rotation, scale,animate,speedX,speedY } = useControls("Model",{
        position: [10,-7,10],
        rotation: [0,0.7,0],
        scale: [1,1,1],
        animate: true,
        speedX: { value: 1, min: 0, max: 10 },
        speedY: { value: 1, min: 0, max: 10 }

    }, { collapsed: true })
    useFrame((state, delta) =>
    {
        if(!animate)
            return
        gltf0.scene.rotation.y += (delta * speedY)
        gltf0.scene.rotation.x += (delta * speedX)
    })


    return <>
        <primitive object={gltf0.scene} position={position} rotation={rotation} scale={scale}/>
    </>
}   