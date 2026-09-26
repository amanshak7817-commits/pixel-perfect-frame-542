import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { restaurant } from "@/lib/restaurant";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/92 backdrop-blur-md border-b border-gold/15 py-3"
          : "bg-gradient-to-b from-ink/70 to-transparent py-5"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
        <Link to="/" onClick={() => setOpen(false)} className="min-w-0">
          <span
            className={`block truncate font-display text-ivory transition-all duration-500 ${
              scrolled ? "text-lg" : "text-xl sm:text-2xl"
            }`}
            style={{ letterSpacing: "0.16em" }}
          >
            MOTI MAHAL
          </span>
          <span className="block text-[0.6rem] tracking-[0.42em] text-gold/80 uppercase">
            Sun Twilight
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[0.8rem] tracking-[0.18em] text-ivory/75 uppercase transition-colors hover:text-ivory"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={restaurant.phoneHref}
            className="border border-gold/60 px-6 py-3 text-[0.72rem] tracking-[0.22em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            Book a Table
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={restaurant.phoneHref}
            className="border border-gold/60 px-4 py-2.5 text-[0.62rem] tracking-[0.18em] text-gold uppercase"
          >
            Book
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`h-px w-5 bg-ivory transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-ivory transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-0 -z-10 bg-ink transition-opacity duration-400 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-8 px-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-ivory"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={restaurant.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-4 w-fit border border-gold/60 px-8 py-4 text-[0.72rem] tracking-[0.22em] text-gold uppercase"
          >
            Book a Table
          </a>
        </div>
      </div>
    </header>
  );
}
