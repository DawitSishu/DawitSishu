import { convertLength } from "@mui/material/styles/cssUtils";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBG() {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
    //    console.log(container);
    }, []);
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        fullScreen:{
            enable:true,
            zIndex:-1
        },
        background: {
            size :convertLength,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 10,
                },
                repulse: {
                    distance: 10,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 0.3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 140,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "star",
            },
            size: {
                value: { min: 0.5, max: 1 },
            },
        },
        // detectRetina: true,
    }}
/>
  )
}

export default ParticleBG