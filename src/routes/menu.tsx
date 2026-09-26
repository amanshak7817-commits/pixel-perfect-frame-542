import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { menuSections, restaurant } from "@/lib/restaurant";
import heroImg from "@/assets/dish-butter-chicken.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Moti Mahal Sun Twilight, Greater Noida" },
      {
        name: "description",
        content:
          "Explore North Indian and multicuisine dishes at Moti Mahal Sun Twilight, Sector-27, Greater Noida.",
      },
      { property: "og:title", content: "Menu — Moti Mahal Sun Twilight" },
      {
        property: "og:description",
        content:
          "North Indian and multicuisine favourites, from tandoori starters to kesar phirni.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="grain relative flex min-h-[62vh] items-end overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/60" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-16 lg:px-10">
          <p className="eyebrow">Our Kitchen</p>
          <h1 className="mt-5 font-display text-5xl text-ivory sm:text-7xl">
            The Menu
          </h1>
        </div>
      </section>

      <section className="bg-background px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          {menuSections.map((section, s) => (
            <Reveal key={section.title} delay={s * 60}>
              <div className="mb-16">
                <div className="flex items-center gap-6">
                  <h2 className="font-display text-3xl sm:text-4xl">
                    {section.title}
                  </h2>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <ul className="mt-8 space-y-5">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="border-b border-border/60 pb-5 text-lg"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="border border-border p-8 text-center">
              <p className="text-muted-foreground">
                For the full list of the day's preparations and availability,
                please call us.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <a
                  href={restaurant.phoneHref}
                  className="bg-ink px-9 py-4 text-[0.72rem] tracking-[0.22em] text-ivory uppercase transition-colors duration-300 hover:bg-ink-soft"
                >
                  Call {restaurant.phone}
                </a>
                <Link
                  to="/visit"
                  className="border border-ink/25 px-9 py-4 text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:border-gold"
                >
                  Visit Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
