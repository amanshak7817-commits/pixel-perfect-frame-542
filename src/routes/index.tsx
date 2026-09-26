import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { restaurant, reviews } from "@/lib/restaurant";
import heroImg from "@/assets/hero-ambience.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import dalMakhani from "@/assets/dish-dal-makhani.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import vegBiryani from "@/assets/dish-veg-biryani.jpg";
import kulcha from "@/assets/dish-kulcha.jpg";
import phirni from "@/assets/dish-phirni.jpg";
import celebration from "@/assets/experience-celebration.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Moti Mahal Sun Twilight — Multicuisine Restaurant in Greater Noida",
      },
      {
        name: "description",
        content:
          "Authentic flavours, warm hospitality and a beautiful dining experience in the heart of Greater Noida. Rated 4.8 from 177 reviews.",
      },
      {
        property: "og:title",
        content: "Moti Mahal Sun Twilight — A Taste Worth Gathering For",
      },
      {
        property: "og:description",
        content:
          "Multicuisine dining near Delta 1 Metro Station, Greater Noida. Dine-in, delivery and celebrations.",
      },
    ],
  }),
  component: Home,
});

const signatures = [
  {
    name: "Butter Chicken",
    image: butterChicken,
    note: "A North Indian classic, rich and slow-simmered.",
  },
  {
    name: "Dal Makhani",
    image: dalMakhani,
    note: "Black lentils, finished with butter and cream.",
  },
  {
    name: "Paneer Tikka",
    image: paneerTikka,
    note: "Tandoor-charred paneer with peppers and onion.",
  },
  {
    name: "Veg Biryani",
    image: vegBiryani,
    note: "Fragrant rice layered with vegetables and spice.",
  },
  {
    name: "Stuffed Mix Kulcha",
    image: kulcha,
    note: "Soft tandoori bread with a generous filling.",
  },
  {
    name: "Kesar Phirni",
    image: phirni,
    note: "Saffron-set rice pudding to finish the meal.",
  },
];

function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt="Dining room at Moti Mahal Sun Twilight"
          width={1920}
          height={1200}
          className="absolute inset-0 h-[115%] w-full object-cover opacity-70"
          style={{ transform: `translate3d(0, ${offset * 0.18}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/70" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="eyebrow">{restaurant.tagline}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl font-display text-[3.1rem] leading-[0.95] text-ivory sm:text-7xl lg:text-8xl">
              A Taste Worth
              <span className="block italic text-gold-soft">Gathering For</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75">
              Authentic flavours, warm hospitality and a beautiful dining
              experience in the heart of Greater Noida.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/menu"
                className="bg-gold px-9 py-4 text-[0.72rem] tracking-[0.22em] text-ink uppercase transition-colors duration-300 hover:bg-gold-soft"
              >
                Explore Menu
              </Link>
              <Link
                to="/visit"
                className="border border-ivory/35 px-9 py-4 text-[0.72rem] tracking-[0.22em] text-ivory uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Visit Us
              </Link>
            </div>
          </Reveal>
          <Reveal delay={460}>
            <p className="mt-12 text-[0.72rem] tracking-[0.28em] text-ivory/60 uppercase">
              {restaurant.rating} ★ · {restaurant.reviewCount} Reviews
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-background px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow">Welcome</p>
              <div className="rule-gold mt-5" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Good Food. <span className="italic">Beautiful Moments.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                At Moti Mahal Sun Twilight, every meal is designed to bring
                people together. Enjoy flavourful Indian cuisine, welcoming
                hospitality and a warm ambience that makes everything from
                family dinners to special celebrations feel memorable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SIGNATURE FOOD */}
      <section className="bg-secondary px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Signature Plates</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Flavours Worth Coming Back For
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((dish, i) => (
              <Reveal key={dish.name} delay={(i % 3) * 110}>
                <article className="group h-full bg-card">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/15" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl">{dish.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {dish.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <Link
                to="/menu"
                className="inline-block border border-ink/25 px-10 py-4 text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:border-gold hover:bg-ink hover:text-ivory"
              >
                View Full Menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="grid items-stretch bg-background lg:grid-cols-2">
        <div className="relative min-h-[60vh] overflow-hidden lg:min-h-[85vh]">
          <img
            src={celebration}
            alt="A family celebrating over dinner at Moti Mahal Sun Twilight"
            loading="lazy"
            width={1200}
            height={1504}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-5 py-20 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">The Experience</p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                More Than a Meal
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                From family dinners and intimate gatherings to birthdays, kitty
                parties, anniversaries and office celebrations, Moti Mahal Sun
                Twilight offers a welcoming setting for memorable occasions.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to="/visit"
                className="mt-10 inline-block border border-ink/25 px-9 py-4 text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:border-gold hover:bg-ink hover:text-ivory"
              >
                Plan Your Visit
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* GALLERY */}
      <section className="bg-secondary px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
              Follow the Moti Mahal Experience
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Food, celebrations, ambience and moments from Moti Mahal Sun
              Twilight.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {[
              paneerTikka,
              butterChicken,
              celebration,
              vegBiryani,
              kulcha,
              phirni,
            ].map((src, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="group aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="grain relative bg-ink px-5 py-28 text-center lg:py-40">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-5xl leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              Your Table Is <span className="italic text-gold-soft">Waiting</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-7 max-w-xl text-ivory/70">
              Gather your people, choose your favourites and make your next meal
              memorable.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-11 flex flex-wrap justify-center gap-4">
              <a
                href={restaurant.phoneHref}
                className="bg-gold px-9 py-4 text-[0.72rem] tracking-[0.22em] text-ink uppercase transition-colors duration-300 hover:bg-gold-soft"
              >
                Book a Table
              </a>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-ivory/35 px-9 py-4 text-[0.72rem] tracking-[0.22em] text-ivory uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ReviewsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-background px-5 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Guest Reviews</p>
          <p className="mt-6 font-display text-5xl text-gold">
            {restaurant.rating} ★
          </p>
          <p className="mt-2 text-[0.72rem] tracking-[0.28em] text-muted-foreground uppercase">
            {restaurant.reviewCount} Reviews
          </p>
        </Reveal>

        <div className="relative mt-14 min-h-[220px] sm:min-h-[200px]">
          {reviews.map((r, i) => (
            <figure
              key={r.author}
              className={`absolute inset-0 transition-all duration-700 ${
                i === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }`}
            >
              <blockquote className="font-display text-2xl leading-snug italic sm:text-3xl lg:text-4xl">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-8 text-[0.72rem] tracking-[0.28em] text-muted-foreground uppercase">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {reviews.map((r, i) => (
            <button
              key={r.author}
              aria-label={`Show review from ${r.author}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-8 transition-colors duration-300 ${
                i === index ? "bg-gold" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
