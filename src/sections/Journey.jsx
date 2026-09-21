import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import CarScene from "../components/CarScene";
import { experience } from "../data/resume";

export default function Journey({ isDark }) {
  const sectionRef = useRef(null);

  const total = experience.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ---------------------------------------
  // CAR MOVEMENT
  // ---------------------------------------

  const rawCarLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["6%", "94%"]
  );

  const carLeft = useSpring(rawCarLeft, {
    stiffness: 90,
    damping: 22,
    mass: 0.7,
  });

  const carY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -2, 0]
  );

  const carScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.92, 1, 1.04]
  );

  const roadX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-40%"]
  );

  // ---------------------------------------
  // EXPERIENCE CARD OPACITY
  // ---------------------------------------

  const cardOpacity = experience.map((_, index) => {
    const start = index / total;
    const end = (index + 1) / total;

    return useTransform(
      scrollYProgress,
      [
        Math.max(0, start - 0.04),
        Math.min(1, start + 0.08),
        Math.max(0, end - 0.08),
        Math.min(1, end + 0.04),
      ],
      [0, 1, 1, 0]
    );
  });

  // ---------------------------------------
  // EXPERIENCE CARD POSITION
  // ---------------------------------------

  const cardY = experience.map((_, index) => {
    const start = index / total;
    const end = (index + 1) / total;

    return useTransform(
      scrollYProgress,
      [
        Math.max(0, start - 0.04),
        Math.min(1, start + 0.08),
        Math.max(0, end - 0.08),
        Math.min(1, end + 0.04),
      ],
      [20, 0, 0, -20]
    );
  });

  // ---------------------------------------
  // PROGRESS BAR
  // ---------------------------------------

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative bg-app"
      style={{
        height: `${total * 100}vh`,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* -------------------------------- */}
        {/* BACKGROUND GRID */}
        {/* -------------------------------- */}

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage: `
                linear-gradient(
                  var(--hairline) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  var(--hairline) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* -------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------- */}

        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-10 pt-24 md:pt-28">
          <div className="flex items-end justify-between">

            <div>
              <div className="font-display text-[10px] tracking-[0.35em] uppercase text-red mb-3">
                04 / Journey
              </div>

              <h2 className="font-display text-3xl md:text-5xl tracking-tight text-fg">
                The road so far.
              </h2>
            </div>

            <div className="hidden md:block text-right">
              <div className="text-[10px] uppercase tracking-[0.25em] text-fg-dim">
                Career Timeline
              </div>

              <div className="font-display text-sm text-fg mt-1">
                {String(total).padStart(2, "0")} STOPS
              </div>
            </div>

          </div>
        </div>

        {/* -------------------------------- */}
        {/* ROAD */}
        {/* -------------------------------- */}

        <div className="absolute left-0 right-0 bottom-[23%] h-px bg-hair opacity-70">
          <motion.div
            style={{ x: roadX }}
            className="absolute inset-y-0 w-[140%]"
          >
            <div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-red), transparent)",
              }}
            />
          </motion.div>
        </div>

        {/* -------------------------------- */}
        {/* ROAD GLOW */}
        {/* -------------------------------- */}

        <div className="absolute left-0 right-0 bottom-[23%] h-20 pointer-events-none">
          <div
            className="absolute inset-x-0 bottom-0 h-20"
            style={{
              background:
                "radial-gradient(ellipse at center bottom, rgba(196,30,42,0.10), transparent 70%)",
            }}
          />
        </div>

        {/* -------------------------------- */}
        {/* CHECKPOINTS */}
        {/* -------------------------------- */}

        <div className="absolute left-[6%] right-[6%] bottom-[23%] translate-y-1/2 flex justify-between pointer-events-none">
          {experience.map((item, index) => (
            <div
              key={`${item.company}-${index}`}
              className="relative flex flex-col items-center"
            >
              <div className="w-2 h-2 rounded-full bg-fg border border-fg" />

              <div className="absolute top-5 text-[9px] text-fg-dim tracking-wider whitespace-nowrap">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* -------------------------------- */}
        {/* MOVING CAR */}
        {/* -------------------------------- */}

        <motion.div
          style={{
            left: carLeft,
            y: carY,
            scale: carScale,
          }}
          className="
  absolute
  -translate-x-1/2
  bottom-[calc(23%-2px)]
  w-20
  md:w-28
  z-30
  pointer-events-none
"
        >
          {/* CAR */}

          <div
            className="relative z-10"
            style={{
              transform: "scaleX(-1)",
            }}
          >
            <CarScene
              lit={isDark}
              driving
              className="w-full h-auto"
            />
          </div>

          {/* CAR GLOW */}

          <div
            className="
              absolute
              left-1/2
              bottom-0
              -translate-x-1/2
              w-20
              h-5
              rounded-full
              bg-red/20
              blur-xl
              z-0
            "
          />
        </motion.div>

        {/* -------------------------------- */}
        {/* EXPERIENCE CONTENT */}
        {/* -------------------------------- */}

        <div className="absolute inset-x-0 top-[30%] md:top-[29%] px-6 md:px-10">
          <div className="max-w-6xl mx-auto relative min-h-[360px]">

            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${index}`}
                style={{
                  opacity: cardOpacity[index],
                  y: cardY[index],
                }}
                className="
                  absolute
                  inset-x-0
                  top-0
                "
              >
                <div className="grid md:grid-cols-[180px_1fr_180px] gap-8 items-start">

                  {/* -------------------------------- */}
                  {/* DATE */}
                  {/* -------------------------------- */}

                  <div>
                    <div className="font-display text-xs text-red tracking-wider">
                      {item.start} — {item.end}
                    </div>

                    {item.location && (
                      <div className="text-[10px] text-fg-dim uppercase tracking-[0.18em] mt-2">
                        {item.location}
                      </div>
                    )}
                  </div>

                  {/* -------------------------------- */}
                  {/* MAIN */}
                  {/* -------------------------------- */}

                  <div>
                    <h3 className="font-display text-2xl md:text-4xl text-fg mb-2">
                      {item.company}
                    </h3>

                    <div className="text-sm text-fg-dim mb-5">
                      {item.role}
                    </div>

                    <div className="space-y-2">
                      {item.points?.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex gap-3"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-red shrink-0" />

                          <p className="text-sm md:text-base leading-relaxed text-fg-dim max-w-2xl">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* -------------------------------- */}
                  {/* TECH */}
                  {/* -------------------------------- */}

                  <div className="hidden md:block">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-fg-dim mb-3">
                      Stack
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tech?.map((tech) => (
                        <span
                          key={tech}
                          className="
                            text-[10px]
                            px-2
                            py-1
                            border
                            border-hair
                            text-fg-dim
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* -------------------------------- */}
        {/* BOTTOM PROGRESS */}
        {/* -------------------------------- */}

        <div className="absolute left-6 right-6 md:left-10 md:right-10 bottom-8">

          <div className="flex justify-between text-[9px] uppercase tracking-[0.2em] text-fg-dim mb-2">
            <span>Start</span>
            <span>Present</span>
          </div>

          <div className="h-px bg-hair relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-red"
              style={{
                width: progressWidth,
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}