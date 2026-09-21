import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "performance", label: "Performance" },
  { id: "garage", label: "Garage" },
  { id: "foundation", label: "Foundation" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50" aria-label="Primary">
      <div
        className="flex items-center gap-1 rounded-full px-2 py-2 backdrop-blur-xl border"
        style={{ background: "var(--nav-bg)", borderColor: "var(--hairline)" }}
      >
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors"
            style={{
              color: active === link.id ? "var(--bg)" : "var(--fg-dim)",
            }}
          >
            {active === link.id && (
              <span
                className="absolute inset-0 rounded-full -z-10"
                style={{ background: "var(--fg)" }}
                aria-hidden
              />
            )}
            {link.label}
          </a>
        ))}
        <button
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="ml-1 w-8 h-8 grid place-items-center rounded-full border transition-colors hover:text-red-500"
          style={{ borderColor: "var(--hairline)", color: "var(--fg-dim)" }}
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </nav>
  );
}
