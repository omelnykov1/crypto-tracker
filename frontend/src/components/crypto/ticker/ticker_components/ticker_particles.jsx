import React from 'react';
import Particles from "react-tsparticles";

const TickerParticles = props => {
    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "ffffff",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
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
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: "image",
                        image: {
                            src: `${props.image.small}`,
                        },
                    },
                    size: {
                        random: true,
                        value: 25,
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default TickerParticles;
