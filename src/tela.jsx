import { useControls } from 'leva'
import { shaderMaterial, useTexture} from '@react-three/drei'
import telaVertexShader from './shaders/tela/vertex.glsl'
import telaFragmentShader from './shaders/tela/fragment.glsl'
import { useFrame } from '@react-three/fiber'
export default function Tela()
{
   
    
    return <>
        <mesh>
            <planeBufferGeometry args={[10,10]}/>
  
        </mesh>
    </>
}