import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/resume";

const initial = { name: "", email: "", company: "", role: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Test drive request${form.company ? ` — ${form.company}` : ""}`
    );
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      form.role && `Role / Opportunity: ${form.role}`,
      "",
      form.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-display text-xs tracking-[0.3em] text-red mb-3">07 — BOOK A TEST DRIVE</p>
          <h2 className="font-display text-3xl md:text-4xl text-fg mb-3">
            Interested in building something together?
          </h2>
          <p className="text-fg-dim text-sm">
            Send a few details and it'll open a message ready to go to{" "}
            <span className="text-fg">{profile.email}</span>.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-5 border-t border-hair pt-8"
            >
              <Field label="Name" required value={form.name} onChange={update("name")} />
              <Field
                label="Email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
              />
              <Field label="Company" value={form.company} onChange={update("company")} />
              <Field
                label="Role / Opportunity"
                value={form.role}
                onChange={update("role")}
              />
              <div className="sm:col-span-2">
                <label className="text-[11px] tracking-[0.15em] font-display text-fg-dim block mb-2">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className="w-full bg-transparent border-b border-hair py-2 text-fg text-sm focus:border-red outline-none transition-colors resize-none"
                />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-red text-white text-sm font-medium hover:bg-[#a91824] transition-colors"
                >
                  Request a Conversation
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border-t border-hair pt-10 text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mx-auto mb-6 w-14 h-14 rounded-full grid place-items-center"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,212,121,0.35) 0%, rgba(255,212,121,0) 70%)",
                }}
              >
                <div className="w-3 h-3 rounded-full bg-red" />
              </motion.div>
              <h3 className="font-display text-xl text-fg mb-2">Request drafted</h3>
              <p className="text-fg-dim text-sm max-w-sm mx-auto">
                Your email app should now have a message ready to send to Anant.
                If it didn't open, write directly to{" "}
                <a className="text-red" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                .
              </p>
              <button
                onClick={() => {
                  setForm(initial);
                  setSent(false);
                }}
                className="mt-6 text-xs text-fg-dim hover:text-fg underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Field({ label, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.15em] font-display text-fg-dim block mb-2">
        {label.toUpperCase()}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-hair py-2 text-fg text-sm focus:border-red outline-none transition-colors"
      />
    </div>
  );
}
