import { Debug } from "@react-three/rapier";
import { useControls } from 'leva'
import { useMemo } from 'react'


const LightCreate = ({name}) => {
    const {rotation, intensitySpot, positionSpot , angle, penumbra,color} = useControls(name, {
        rotation: { value: [0,45,0], min: -360, max: 360 },
        intensitySpot: { value: 1, min: 0, max: 1 },
        angle: { value: 0.15, min: 0, max: 1 },
        penumbra: { value: 1, min: 0, max: 1 },
        positionSpot: { value: [10,10,10], min: -10, max: 10 },
        color: { value: "yellow"}
    }, { collapsed: true})
    return <spotLight position={positionSpot} rotation={rotation} angle={angle} penumbra={penumbra} intensity={intensitySpot} color={color}/>
}
const LightCreateAmbient = ({name}) => {
    const {intensityAmbient,color} = useControls(name, {
        color: { value: "red"},
        intensityAmbient: { value: 0.5, min: 0, max: 1 },
    }, { collapsed: true})
    return <ambientLight intensity={intensityAmbient} color={color} />
}
export default function Light()
{    
    return <>
        <LightCreateAmbient name="ambientLight" />
        <LightCreate name="spotLight 1"/>
    </>
}