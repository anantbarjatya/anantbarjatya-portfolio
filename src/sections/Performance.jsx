import { motion } from "framer-motion";
import { skills } from "../data/resume";

export default function Performance() {
  const entries = Object.entries(skills);

  const totalSpecifications = entries.reduce(
    (total, [, group]) => total + group.items.length,
    0
  );

  return (
    <section
      id="performance"
      className="py-28 px-6 md:px-10 bg-panel"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="font-display text-xs tracking-[0.3em] text-red">
              02 — PERFORMANCE
            </p>

            <span className="hidden md:block text-[10px] tracking-[0.2em] text-fg-dim">
              ENGINEERING SPECIFICATIONS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-3xl md:text-4xl text-fg leading-tight max-w-xl">
              Specification sheet,
              <br />
              <span className="text-fg-dim">
                built for the road.
              </span>
            </h2>

            <p className="text-sm text-fg-dim leading-relaxed max-w-sm">
              The systems, technologies and tools behind the products I build.
            </p>
          </div>
        </motion.div>

        {/* ================= SPECIFICATION GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {entries.map(([key, group], i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
              }}
              className="
                group
                relative
                flex
                flex-col
                min-h-[285px]
                overflow-hidden
                border
                border-hair
                bg-app
                hover:border-red/50
                transition-colors
                duration-300
              "
            >
              {/* Top mechanical accent */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-hair group-hover:bg-red transition-colors duration-300" />

              {/* Corner details */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-fg-dim/30" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-fg-dim/30" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-fg-dim/30" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-fg-dim/30" />

              {/* Background technical grid */}
              <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
                <div className="absolute left-0 right-0 top-1/3 border-t border-fg" />
                <div className="absolute left-0 right-0 top-2/3 border-t border-fg" />
                <div className="absolute top-0 bottom-0 left-1/3 border-l border-fg" />
                <div className="absolute top-0 bottom-0 left-2/3 border-l border-fg" />
              </div>

              {/* ================= CARD HEADER ================= */}
              <div className="relative px-6 pt-6 pb-5">
                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-start gap-3">
                    <span className="font-display text-xs text-red tabular pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-display text-sm tracking-[0.16em] text-fg">
                        {key}
                      </h3>

                      <p className="text-[9px] tracking-[0.18em] text-fg-dim mt-1 uppercase">
                        {group.label}
                      </p>
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="flex items-center gap-1.5 pt-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-fg-dim/30" />
                    <span className="w-1.5 h-1.5 rounded-full bg-fg-dim/30" />
                  </div>
                </div>
              </div>

              {/* ================= INNER SPEC PANEL ================= */}
              <div className="relative mx-6 flex-1 min-h-[115px] border border-hair bg-panel/70 p-4 overflow-hidden">

                {/* Red vertical accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red/60" />

                <ul className="relative flex flex-wrap content-start gap-2 pl-2">
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="
                        text-[11px]
                        px-2.5
                        py-1.5
                        border
                        border-hair
                        rounded-sm
                        text-fg-dim
                        bg-app
                        hover:text-fg
                        hover:border-red/40
                        transition-colors
                        duration-200
                        whitespace-nowrap
                      "
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* ================= CARD FOOTER ================= */}
              <div className="relative px-6 pt-5 pb-5 flex items-end justify-between">

                <div>
                  <p className="text-[8px] tracking-[0.25em] text-fg-dim">
                    SYSTEM
                  </p>

                  <div className="flex gap-[3px] mt-1.5">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-[2px] w-3 ${index < Math.min(group.items.length, 8)
                            ? "bg-red/60"
                            : "bg-hair"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <span className="font-display text-[9px] tracking-[0.15em] text-fg-dim border border-hair px-2 py-1 shrink-0">
                  {String(group.items.length).padStart(2, "0")} ITEMS
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            mt-3
            border
            border-hair
            bg-app
            px-5
            py-3
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
          "
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red" />

            <span className="font-display text-[9px] tracking-[0.25em] text-fg-dim">
              ENGINEERING STACK
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[9px] tracking-[0.15em] text-fg-dim">
              {entries.length} SYSTEMS
            </span>

            <span className="text-[9px] tracking-[0.15em] text-fg-dim">
              {totalSpecifications} SPECIFICATIONS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}