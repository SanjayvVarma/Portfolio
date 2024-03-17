// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { useEffect, useMemo, useState } from "react";
// import { loadSlim } from "@tsparticles/slim"; 


// const ParticlesComponent = (props) => {
//   const [init, setInit] = useState(false);
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   },[]);

//   const particlesLoaded = (main) => {
//     console.log(main);
//   };


//   const options = useMemo(
//     () => ({
//         background: {
//             color: {
//                 value: "#181818",
//             },
//         },
//         fpsLimit: 120,
//         interactivity: {
//             events: {
//                 onClick: {
//                     enable: true,
//                     mode: "push",
//                 },
//                 onHover: {
//                     enable: true,
//                     mode: "repulse",
//                 },
//             },
//             modes: {
//                 push: {
//                     quantity: 4,
//                 },
//                 repulse: {
//                     distance: 200,
//                     duration: 0.4,
//                 },
//             },
//         },
//         particles: {
//             color: {
//                 value: "#ffffff",
//             },
//             links: {
//                 color: "#ffffff",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.5,
//                 width: 1,
//             },
//             move: {
//                 direction: "none",
//                 enable: true,
//                 outModes: {
//                     default: "bounce",
//                 },
//                 random: false,
//                 speed: 6,
//                 straight: false,
//             },
//             number: {
//                 density: {
//                     enable: true,
//                 },
//                 value: 80,
//             },
//             opacity: {
//                 value: 0.5,
//             },
//             shape: {
//                 type: "circle",
//             },
//             size: {
//                 value: { min: 1, max: 5 },
//             },
//         },
//         detectRetina: true,
//     }),
//     [],
//   );


//   return <Particles id={props.id} init={particlesLoaded} options={options} />; 
// };

// export default ParticlesComponent;



import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    const particlesLoaded = (main) => {
        console.log(main);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#181818",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
