import { motion } from "framer-motion";
import { profile } from "../data/resume";

export default function DriverProfile() {
  return (
    <section id="about" className="py-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[0.7fr_1.3fr] gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-xs tracking-[0.3em] text-red mb-3">01 — DRIVER PROFILE</p>
          <h2 className="font-display text-3xl md:text-4xl text-fg leading-tight">
            The engineer behind the machine.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-hair pt-8"
        >
          <p className="text-fg-dim text-lg leading-relaxed max-w-2xl">
            {profile.name} is a {profile.role.toLowerCase()} and full-stack
            developer currently building investment-report automation and client-facing
            dashboards at Marsh McLennan. His work spans backend engineering, applied AI,
            data-driven systems, and product development — from automated reporting
            pipelines and secure credential management to voice-first AI applications
            for Indian kirana stores.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Focus", value: "Full-Stack" },
              { label: "Based", value: "India" },
              { label: "Degree", value: "B.Tech CS (DS)" },
              { label: "Status", value: "Open to work" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[11px] tracking-[0.2em] font-display text-fg-dim">
                  {item.label.toUpperCase()}
                </p>
                <p className="mt-1 text-fg font-medium tabular">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
