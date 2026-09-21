import { motion } from "framer-motion";
import { ArrowUpRight, Link2 } from "lucide-react";
import { projects } from "../data/resume";

export default function Garage() {
  return (
    <section id="garage" className="py-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-display text-xs tracking-[0.3em] text-red mb-3">
            04 — THE GARAGE
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-fg leading-tight max-w-xl">
            Three builds, three specs.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group border border-hair p-6 flex flex-col hover:border-red/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[11px] tracking-[0.2em] font-display text-fg-dim tabular">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-[11px] text-fg-dim tabular">
                  {p.period}
                </span>
              </div>

              <h3
                className={`font-display text-xl mb-3 ${p.name === "Mera Khata AI" ||
                    p.name === "Tala — Credential Manager" ||
                    p.name === "Deffo — DeepFake Detection"
                    ? "text-red"
                    : "text-fg"
                  }`}
              >
                {p.name}
              </h3>

              <p className="text-sm text-fg-dim leading-relaxed mb-4">
                {p.description}
              </p>

              {p.stat && (
                <div className="mb-4 border-t border-hair pt-3">
                  <p className="text-[10px] tracking-[0.2em] font-display text-fg-dim">
                    {p.stat.label.toUpperCase()}
                  </p>

                  <p className="font-display text-2xl text-red tabular">
                    {p.stat.value}
                  </p>
                </div>
              )}

              <ul className="space-y-1.5 mb-5">
                {p.points.map((pt, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-fg-dim leading-relaxed pl-3 relative"
                  >
                    <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-metal" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-hair text-fg-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-hair text-xs font-medium">
                {p.live && p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-fg-dim hover:text-red transition-colors"
                  >
                    Live demo <ArrowUpRight size={13} />
                  </a>
                )}

                {p.github && p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-fg-dim hover:text-red transition-colors"
                  >
                    <Link2 size={13} /> GitHub
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}