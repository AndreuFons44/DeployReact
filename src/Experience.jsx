import { shaderMaterial, Sparkles, Center, useTexture, useGLTF, OrbitControls, Sphere} from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
  import { Debug, Physics, RigidBody,quat, euler,RapierRigidBody} from '@react-three/rapier'
import { useRef, useEffect } from 'react'
import Plataform from './plataform'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
import { useControls } from 'leva'

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
          }
      return color;
  }

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color(getRandomColor()),
        uColorEnd: new THREE.Color(getRandomColor())
    },
    portalVertexShader,
    portalFragmentShader
)



const Adios = ({name}) => {

    const positionStart = [getRandomFloat(5,-5),getRandomFloat(25,10),getRandomFloat(5,-5)]

    const {scale,colorBox} = useControls(name, {
        colorBox: getRandomColor()
    }, { collapsed: true })

  
  const ref = useRef()

    return (
      <RigidBody colliders="cuboid" mass={1} ref={ref}>
        <mesh scale={[1,1,1]} position={positionStart}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial color={colorBox} />
        </mesh>
      </RigidBody>
    )
  }

  const LimitLevel = (positionX,positionY) => {
    return (
      <RigidBody colliders="trimesh" type="fixed">
        <mesh position-x={0} position-y={1} position-z={10} scale={[20,2,1]}>
          <boxBufferGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position-x={0} position-y={1} position-z={-10} scale={[20,2,1]}>
          <boxBufferGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position-x={10} position-y={1} position-z={0} scale={[1,2,20]}>
          <boxBufferGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position-x={-10} position-y={1} position-z={0} scale={[1,2,20]}>
          <boxBufferGeometry />
          <meshStandardMaterial />
        </mesh>
      </RigidBody>
    )
  }
  extend({ PortalMaterial})
  const Base = () => {
    const portalMaterial = useRef()
    useFrame((state, delta) =>
    {
        portalMaterial.current.uTime += delta         

    })
    return (
      <RigidBody colliders="trimesh" type="fixed">  
        <mesh position-y={0} rotation-x={-Math.PI / 2}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial />
            <portalMaterial  ref={ portalMaterial }/>
          </mesh>
      </RigidBody>
    )
  }
  


export default function Experience()
{

    return <>
  

        <Center>
            <Physics>
                <LimitLevel />
                <Plataform />
                <Adios name={"Sphere1"}/>
                <Adios name={"Sphere2"}/>
                <Adios name={"Sphere3"}/>
                <Base />                
            </Physics>

        </Center>

    </>
}