import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { useControls } from 'leva'

export default function PostProcessing()
{
    const {height, luminanceThreshold, luminanceSmoothing, opacity,opacityNoise, NoisePremultiply, eskil, offset, darkness} = useControls("PostProcessing", {
      
        height: { value: 480, min: 0, max: 1000 },
        luminanceThreshold: { value: 0.4, min: 0, max: 1 },
        luminanceSmoothing: { value: 0.5, min: 0, max: 1 },
        opacity: { value: 0.5, min: 0, max: 1 },
        opacityNoise: { value: 0.5, min: 0, max: 1 },
        NoisePremultiply: { value: false, options: { false: false, true: true }},
        eskil: { value: false, options: { false: false, true: true } },
        offset: { value: 0.1, min: 0, max: 1 },
        darkness: { value: 1.1, min: 0, max: 1 },
    }, { collapsed: true })

    return <>
        <EffectComposer multisampling={0} disableNormalPass={false}>
                <Bloom
                luminanceThreshold={luminanceThreshold}
                luminanceSmoothing={luminanceSmoothing}
                height={height}
                opacity={opacity}
                />
                <Noise opacity={opacityNoise} premultiply={NoisePremultiply} />
                <Vignette eskil={eskil} offset={offset} darkness={darkness} />
        </EffectComposer>
    </>
}