import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { restaurant } from "@/lib/restaurant";
import ambience from "@/assets/hero-ambience.jpg";
import celebration from "@/assets/experience-celebration.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Moti Mahal Sun Twilight, Greater Noida" },
      {
        name: "description",
        content:
          "A multicuisine restaurant in Sector-27, Greater Noida, welcoming families, gatherings and celebrations.",
      },
      { property: "og:title", content: "About Moti Mahal Sun Twilight" },
      {
        property: "og:description",
        content:
          "Warm hospitality, North Indian cuisine and a beautiful setting near Delta 1 Metro Station.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="grain relative flex min-h-[62vh] items-end overflow-hidden bg-ink">
        <img
          src={ambience}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/60" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-16 lg:px-10">
          <p className="eyebrow">{restaurant.nameHindi}</p>
          <h1 className="mt-5 font-display text-5xl text-ivory sm:text-7xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="bg-background px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              A multicuisine table in Greater Noida
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              At Moti Mahal Sun Twilight, every meal is designed to bring people
              together. Enjoy flavourful Indian cuisine, welcoming hospitality
              and a warm ambience that makes everything from family dinners to
              special celebrations feel memorable.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              You'll find us on the first floor of Sun Twilight Metro Street in
              Sector-27, a short walk from Delta 1 Metro Station.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid items-stretch bg-secondary lg:grid-cols-2">
        <div className="flex items-center px-5 py-20 lg:px-16">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">Occasions</p>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl">
                Made for gatherings
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {restaurant.occasions.map((o) => (
                  <li
                    key={o}
                    className="border-b border-border pb-3 text-[0.78rem] tracking-[0.16em] uppercase"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={220}>
              <Link
                to="/visit"
                className="mt-12 inline-block border border-ink/25 px-9 py-4 text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:border-gold hover:bg-ink hover:text-ivory"
              >
                Plan Your Visit
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="relative min-h-[55vh] overflow-hidden lg:min-h-[80vh]">
          <img
            src={celebration}
            alt="Guests celebrating at Moti Mahal Sun Twilight"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
