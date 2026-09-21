import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/resume";

const STAGES = [
  { at: 0, label: "INITIALIZING" },
  { at: 35, label: "LOADING EXPERIENCE" },
  { at: 70, label: "LOADING PROJECTS" },
  { at: 100, label: "READY" },
];

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;
    let raf;

    const tick = (now) => {
      const p = Math.min(100, ((now - start) / duration) * 100);

      setProgress(p);

      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 350);
        setTimeout(() => onDone?.(), 950);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const stage =
    [...STAGES].reverse().find((s) => progress >= s.at) ?? STAGES[0];

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center overflow-hidden"
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          {/* Ambient glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-red/5 blur-3xl pointer-events-none" />

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative font-display tracking-[0.38em] text-sm text-paper/70 mb-12"
          >
            {profile.name.toUpperCase()}
          </motion.p>

          {/* TYRE */}
          <div className="relative w-56 h-56 mb-12">
            {/* Outer progress ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 220 220"
            >
              <circle
                cx="110"
                cy="110"
                r="101"
                fill="none"
                stroke="#242428"
                strokeWidth="2"
              />

              <motion.circle
                cx="110"
                cy="110"
                r="101"
                fill="none"
                stroke="#c41e2a"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="634.6"
                strokeDashoffset={
                  634.6 - (634.6 * progress) / 100
                }
              />
            </svg>

            {/* Rotating tyre */}
            <motion.div
              className="absolute inset-[22px] rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Tyre outer wall */}
              <div className="absolute inset-0 rounded-full bg-[#111114] border-[18px] border-[#202024] shadow-[inset_0_0_0_3px_#09090b,0_0_30px_rgba(0,0,0,0.7)]" />

              {/* Tyre tread blocks */}
              <div className="absolute inset-[-2px] rounded-full">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute left-1/2 top-1/2 w-[5px] h-[14px] bg-[#35363b] rounded-sm origin-[50%_88px]"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 15}deg)`,
                    }}
                  />
                ))}
              </div>

              {/* Rim */}
              <div className="absolute inset-[27px] rounded-full bg-[#16171a] border-[6px] border-[#45474c] shadow-[inset_0_0_0_5px_#0b0c0e]" />

              {/* Rim spokes */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 w-[7px] h-[58px] bg-[#696c72] rounded-full origin-bottom"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${i * 72}deg)`,
                  }}
                />
              ))}

              {/* Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#222429] border-[5px] border-[#85888e] shadow-inner">
                <div className="absolute inset-2 rounded-full bg-[#0e0f11] border border-[#55575d]" />
              </div>
            </motion.div>

            {/* Red brake caliper */}
            <motion.div
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[28px] top-[68px] w-5 h-14 rounded-r-md bg-red shadow-[0_0_12px_rgba(196,30,42,0.25)] z-10"
            />

            {/* Percentage */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-display text-sm tabular text-paper">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Status */}
          <motion.p
            key={stage.label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="font-display text-[11px] tracking-[0.35em] text-red"
          >
            {stage.label}
          </motion.p>

          {/* Bottom progress line */}
          <div className="absolute bottom-12 w-48 h-[1px] bg-[#242428] overflow-hidden">
            <motion.div
              className="h-full bg-red"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}