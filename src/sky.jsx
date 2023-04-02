import { Environment } from "@react-three/drei";
import { useControls } from 'leva'

export default function Sky()
{
    const { blur, background, preset, scene, encoding } = useControls("Skybox",{
        blur: { value: 0, min: 0, max: 1 },
        background: { value: true, options: { false: false, true: true, only: "only" } },
        preset: { value: "sunset", options: { "city": "city", "dawn": "dawn", "forest": "forest","night": "night", "park": "park","studio": "studio", "sunset": "sunset", "warehouse": "warehouse" } },
        //scene: { value: undefined, options: { undefined: undefined, "scene": "scene" } },
        encoding: { value: undefined, options: { undefined: undefined, "sRGBEncoding": "sRGBEncoding", "LinearEncoding": "LinearEncoding", "RGBEEncoding": "RGBEEncoding", "LogLuvEncoding": "LogLuvEncoding", "RGBM7Encoding": "RGBM7Encoding", "RGBM16Encoding": "RGBM16Encoding", "RGBDEncoding": "RGBDEncoding", "GammaEncoding": "GammaEncoding", "BasicDepthPacking": "BasicDepthPacking", "RGBADepthPacking": "RGBADepthPacking" } }
    }, { collapsed: true })

    
    return <>
        <Environment
        background={background}
        blur={blur}
        preset={preset}
        encoding={encoding}
        />
    </>
}