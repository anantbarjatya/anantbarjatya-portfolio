import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import CarScene from "../components/CarScene";
import { profile } from "../data/resume";

export default function Hero({ arrived }) {
  const ref = useRef(null);

  /* =========================================
     MOUSE PARALLAX
  ========================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [2, -2]),
    {
      stiffness: 80,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-3, 3]),
    {
      stiffness: 80,
      damping: 18,
    }
  );

  /* =========================================
     SCROLL ANIMATION
  ========================================= */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /*
    0%   → car stays on right
    35%  → starts crossing towards text
    70%  → overlaps text
    100% → moves further left
  */

  const carX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [0, -80, -280, -520]
  );

  const carY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 10, 55]
  );

  const carScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.08, 1.18]
  );

  const carRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -1, -3]
  );

  const carOpacity = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    [1, 1, 0.15]
  );

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMove}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-app
        flex
        items-center
        pt-24
      "
    >

      {/* =========================================
          TECHNICAL BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.055]
        "
        aria-hidden="true"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className="
              absolute
              left-0
              right-0
              h-px
            "
            style={{
              top: `${(index + 1) * 7}%`,
              background: "var(--fg)",
            }}
          />
        ))}
      </div>

      {/* Vertical technical line */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          bottom-0
          left-1/2
          w-px
          bg-fg
          opacity-[0.025]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1320px]
          px-6
          md:px-10
          lg:px-12
        "
      >

        <div
          className="
            relative
            min-h-[calc(100vh-96px)]
            flex
            items-center
          "
        >

          {/* =====================================
              TEXT CONTENT
          ===================================== */}

          <div
            className="
              relative
              z-20
              w-full
              md:w-[56%]
              lg:w-[54%]
              xl:w-[52%]
            "
          >

            {/* Role */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={
                arrived
                  ? {
                    opacity: 1,
                    y: 0,
                  }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                font-display
                text-xs
                tracking-[0.32em]
                text-red
                mb-5
              "
            >
              SOFTWARE ENGINEER
            </motion.p>

            {/* Name */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                arrived
                  ? {
                    opacity: 1,
                    y: 0,
                  }
                  : {}
              }
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-display
                text-5xl
                sm:text-6xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                leading-[0.9]
                tracking-[-0.045em]
                font-medium
                text-fg
                whitespace-nowrap
              "
            >
              {profile.name}
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={
                arrived
                  ? {
                    opacity: 1,
                    y: 0,
                  }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.36,
              }}
              className="
                mt-6
                max-w-[470px]
                text-fg-dim
                text-base
                md:text-lg
                leading-relaxed
              "
            >
              {profile.tagline}. I build secure backend systems,
              automation engines, and full-stack products — from
              investment reporting pipelines to voice-first AI apps.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={
                arrived
                  ? {
                    opacity: 1,
                    y: 0,
                  }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-3
              "
            >

              <a
                href="#journey"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-3
                  rounded-full
                  bg-red
                  text-white
                  text-sm
                  font-medium
                  hover:bg-[#a91824]
                  transition-colors
                "
              >
                Explore Journey
              </a>

              <a
                href="#garage"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-3
                  rounded-full
                  border
                  border-hair
                  text-fg
                  text-sm
                  font-medium
                  hover:border-red/50
                  hover:text-red
                  transition-colors
                "
              >
                View Garage
              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  px-2
                  py-3
                  text-fg-dim
                  text-sm
                  font-medium
                  hover:text-fg
                  transition-colors
                "
              >
                Hire / Contact →
              </a>

            </motion.div>
          </div>

          {/* =====================================
              SCROLLING CAR
          ===================================== */}

          <motion.div
            style={{
              x: carX,
              y: carY,
              scale: carScale,
              rotate: carRotate,

              rotateX,
              rotateY,

              transformPerspective: 1100,

              opacity: carOpacity,
            }}
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.9,
            }}
            animate={
              arrived
                ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }
                : {}
            }
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              z-40
              top-1/2
              -translate-y-1/2

              right-[-8%]

              w-[68%]

              md:right-[-7%]
              md:w-[66%]

              lg:right-[-8%]
              lg:w-[68%]

              xl:right-[-10%]
              xl:w-[72%]

              pointer-events-none
            "
          >
            <CarScene
              className="
                w-full
                h-auto
                drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)]
              "
            />
          </motion.div>

          {/* =====================================
              SCROLL INDICATOR
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={
              arrived
                ? {
                  opacity: 1,
                }
                : {}
            }
            transition={{
              delay: 1.2,
              duration: 0.6,
            }}
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              z-50
              flex
              flex-col
              items-center
              gap-2
              text-fg-dim
            "
          >

            <span
              className="
                font-display
                text-[10px]
                tracking-[0.25em]
              "
            >
              SCROLL
            </span>

            <motion.span
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-px
                h-8
                bg-current
                opacity-40
              "
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}