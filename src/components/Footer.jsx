import { Link2, Mail } from "lucide-react";
import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-10 py-10 border-t border-hair overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-10 right-10 w-40 h-40 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, var(--color-red) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <p className="font-display text-fg tracking-[0.1em]">{profile.name.toUpperCase()}</p>

        <div className="flex items-center gap-5 text-fg-dim">
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-red transition-colors" aria-label="GitHub">
            <Link2 size={16} /> <span className="text-xs">GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-red transition-colors" aria-label="LinkedIn">
            <Link2 size={16} /> <span className="text-xs">LinkedIn</span>
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-red transition-colors" aria-label="Email">
            <Mail size={16} />
          </a>

        </div>

        <p className="text-fg-dim text-xs">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
