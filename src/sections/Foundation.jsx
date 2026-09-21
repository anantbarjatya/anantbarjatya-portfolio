import { motion } from "framer-motion";
import { education, achievements } from "../data/resume";

export default function Foundation() {
  return (
    <section id="foundation" className="py-28 px-6 md:px-10 bg-panel">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-xs tracking-[0.3em] text-red mb-3">05 — FOUNDATION</p>
          <h2 className="font-display text-2xl md:text-3xl text-fg mb-8">
            The engineering behind the build.
          </h2>

          <div className="border-t border-hair pt-6">
            <p className="text-fg-dim text-xs tracking-[0.15em] font-display mb-1">
              {education.duration}
            </p>
            <h3 className="font-display text-xl text-fg mb-1">{education.institution}</h3>
            <p className="text-fg-dim text-sm mb-5">{education.degree}</p>
            <div className="inline-flex items-baseline gap-2">
              <span className="font-display text-3xl text-red tabular">{education.cgpa}</span>
              <span className="text-xs text-fg-dim tracking-[0.15em]">CGPA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-display text-xs tracking-[0.3em] text-red mb-3">06 — TRACK RECORD</p>
          <h2 className="font-display text-2xl md:text-3xl text-fg mb-8">Milestones on record.</h2>

          <ul className="border-t border-hair pt-6 space-y-4">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-xs text-red tabular pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-fg-dim leading-relaxed">{a}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
