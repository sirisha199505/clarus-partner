import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Glass-on-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/40 bg-white/80 py-2 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo light={!scrolled} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? scrolled
                      ? "text-brand-600"
                      : "text-white"
                    : scrolled
                      ? "text-ink/70 hover:text-brand-600"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-transform duration-300 ${
                    active === link.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#enquiry" icon="arrowRight">
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`grid h-11 w-11 place-items-center rounded-xl border shadow-soft backdrop-blur transition-colors duration-200 lg:hidden ${
            scrolled || open
              ? "border-brand-100 bg-white/70 text-ink"
              : "border-white/25 bg-white/10 text-white"
          }`}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/40 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  active === link.href
                    ? "bg-brand-50 text-brand-600"
                    : "text-ink/80 hover:bg-brand-50/60"
                }`}
              >
                {link.label}
                <Icon name="arrowRight" size={16} className="opacity-50" />
              </a>
            </li>
          ))}
          <li className="mt-2">
            <Button
              href="#enquiry"
              icon="arrowRight"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
