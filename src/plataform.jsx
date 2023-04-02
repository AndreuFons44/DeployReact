import { Debug, Physics, RigidBody,quat, euler,RapierRigidBody} from '@react-three/rapier'
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

const CreatePlataform = ({name}) =>
{

    const {position,rotation,scale,colorBox} = useControls(name, {
        position: [getRandomFloat(5,-5),getRandomFloat(15,5),getRandomFloat(5,-5)],
        rotation: [getRandomFloat(1,0.5),getRandomFloat(10,-10),getRandomFloat(1,0.5)],
        scale: [getRandomFloat(10,5),1,getRandomFloat(10,5)],
        colorBox: getRandomColor()
    }, { collapsed: true })
    return <>
            <mesh position={position} rotation={rotation} scale={scale}>
                <boxBufferGeometry args={[1,1,1]} />
                <meshStandardMaterial color={colorBox} />
            </mesh>
    </>
}

export default function Plataform()
{
    //Pensar en poner la posicion y rotacion de la plataforma en json y cargarlo
    return <>
        <RigidBody colliders="trimesh" type="fixed">
            <CreatePlataform name="Plataform1" />
            <CreatePlataform name="Plataform2" />
            <CreatePlataform name="Plataform3" />
            <CreatePlataform name="Plataform4" />
        </RigidBody>
    </>
}