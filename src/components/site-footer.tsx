import { Link } from "@tanstack/react-router";
import { restaurant } from "@/lib/restaurant";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 pt-20 pb-10 text-ivory/70 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-gold/15 pb-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.14em] text-ivory">
            MOTI MAHAL
          </p>
          <p className="text-[0.62rem] tracking-[0.42em] text-gold/80 uppercase">
            Sun Twilight
          </p>
          <p className="mt-5 font-display text-xl text-ivory/80">
            {restaurant.nameHindi}
          </p>
          <p className="mt-2 text-sm">{restaurant.tagline}</p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="eyebrow mb-4">Find Us</p>
          <p className="max-w-xs">{restaurant.address}</p>
          <a
            href={restaurant.phoneHref}
            className="link-underline mt-4 inline-block text-ivory"
          >
            {restaurant.phone}
          </a>
        </div>

        <div className="text-sm">
          <p className="eyebrow mb-4">Explore</p>
          <div className="flex flex-col gap-2.5">
            <Link to="/menu" className="link-underline w-fit hover:text-ivory">
              Menu
            </Link>
            <Link to="/about" className="link-underline w-fit hover:text-ivory">
              About Us
            </Link>
            <Link to="/visit" className="link-underline w-fit hover:text-ivory">
              Visit Us
            </Link>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline w-fit hover:text-ivory"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-7xl text-[0.7rem] tracking-[0.14em] text-ivory/40 uppercase">
        © {new Date().getFullYear()} {restaurant.name}
      </p>
    </footer>
  );
}
