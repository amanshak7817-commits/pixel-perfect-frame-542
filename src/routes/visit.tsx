import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { restaurant } from "@/lib/restaurant";
import ambience from "@/assets/experience-celebration.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Moti Mahal Sun Twilight, Sector-27 Greater Noida" },
      {
        name: "description",
        content:
          "Find Moti Mahal Sun Twilight at Sun Twilight Metro Street, Sector-27, near Delta 1 Metro Station, Greater Noida. Call 087962 77703.",
      },
      { property: "og:title", content: "Visit Moti Mahal Sun Twilight" },
      {
        property: "og:description",
        content:
          "Dine-in, drive-through, no-contact delivery and online ordering in Greater Noida.",
      },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <>
      <section className="grain relative flex min-h-[58vh] items-end overflow-hidden bg-ink">
        <img
          src={ambience}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/60" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-16 lg:px-10">
          <p className="eyebrow">Greater Noida</p>
          <h1 className="mt-5 font-display text-5xl text-ivory sm:text-7xl">
            Visit Us
          </h1>
        </div>
      </section>

      <section className="bg-background px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow">Address</p>
              <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
                {restaurant.address}
              </p>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-block border border-ink/25 px-9 py-4 text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:border-gold hover:bg-ink hover:text-ivory"
              >
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <p className="eyebrow">Reservations</p>
              <a
                href={restaurant.phoneHref}
                className="mt-6 block font-display text-4xl text-gold sm:text-5xl"
              >
                {restaurant.phone}
              </a>
              <p className="mt-6 text-muted-foreground">
                Call us to book a table or to plan a celebration.
              </p>

              <p className="eyebrow mt-14">Dining Options</p>
              <ul className="mt-6 grid gap-3">
                {restaurant.diningOptions.map((o) => (
                  <li
                    key={o}
                    className="border-b border-border pb-3 text-[0.78rem] tracking-[0.16em] uppercase"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary px-5 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <div className="mx-auto max-w-6xl overflow-hidden">
            <iframe
              title="Map to Moti Mahal Sun Twilight"
              src="https://www.google.com/maps?q=Moti%20Mahal%20Sun%20Twilight%20Sector%2027%20Greater%20Noida&output=embed"
              loading="lazy"
              className="h-[420px] w-full border-0 grayscale-[35%]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
