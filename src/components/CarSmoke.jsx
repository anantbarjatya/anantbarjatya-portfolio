import { motion } from "framer-motion";

export default function CarSmoke() {
    const smokeParticles = [
        {
            size: 18,
            left: 2,
            bottom: 3,
            delay: 0,
            duration: 1.5,
        },
        {
            size: 24,
            left: -10,
            bottom: 5,
            delay: 0.25,
            duration: 1.7,
        },
        {
            size: 30,
            left: -24,
            bottom: 7,
            delay: 0.5,
            duration: 1.9,
        },
        {
            size: 38,
            left: -40,
            bottom: 11,
            delay: 0.75,
            duration: 2.1,
        },
        {
            size: 46,
            left: -58,
            bottom: 17,
            delay: 1,
            duration: 2.3,
        },
        {
            size: 55,
            left: -78,
            bottom: 24,
            delay: 1.25,
            duration: 2.5,
        },
        {
            size: 64,
            left: -100,
            bottom: 31,
            delay: 1.5,
            duration: 2.7,
        },
    ];

    return (
        <div
            className="
        absolute
        left-[-4px]
        bottom-[2px]
        w-[150px]
        h-[100px]
        pointer-events-none
        z-20
      "
            style={{
                overflow: "visible",
            }}
        >
            {smokeParticles.map((particle, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.left}px`,
                        bottom: `${particle.bottom}px`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,

                        background: `
              radial-gradient(
                circle,
                rgba(235, 235, 235, 0.48) 0%,
                rgba(205, 205, 205, 0.38) 20%,
                rgba(170, 170, 170, 0.25) 42%,
                rgba(135, 135, 135, 0.12) 62%,
                rgba(100, 100, 100, 0) 78%
              )
            `,

                        filter: "blur(4px)",
                    }}
                    animate={{
                        x: [0, -8, -25, -48],
                        y: [0, -4, -14, -32],
                        scale: [0.25, 0.7, 1.35, 2.1],
                        opacity: [0, 0.85, 0.45, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Dense exhaust cloud */}

            <motion.div
                className="absolute rounded-full"
                style={{
                    left: "-7px",
                    bottom: "4px",
                    width: "32px",
                    height: "25px",

                    background: `
            radial-gradient(
              circle,
              rgba(220,220,220,0.5) 0%,
              rgba(175,175,175,0.3) 42%,
              rgba(120,120,120,0) 75%
            )
          `,

                    filter: "blur(5px)",
                }}
                animate={{
                    x: [0, -10, -22],
                    y: [0, -5, -12],
                    scale: [0.5, 1.1, 1.8],
                    opacity: [0.1, 0.7, 0],
                }}
                transition={{
                    duration: 1.15,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            />
        </div>
    );
}