import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Waller County Line",
  description:
    "The story of Waller County Line — a family-run Texas roadhouse serving smoked barbecue, cold drinks, and good times since day one.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 pt-16 pb-12 text-center">
          <p className="eyebrow">Our Story</p>
          <h1 className="font-display text-5xl sm:text-7xl font-black mt-4 leading-[0.95]">
            One smoker. Two locations.
            <br />
            <span className="italic text-brand">A whole lot of Texas.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-20 space-y-8 text-lg leading-relaxed text-ink-soft">
        <p>
          Waller County Line started the way most good things in Texas do
          &mdash; on the side of a highway, with a smoker, and a stubborn
          belief that food should be cooked slow and served generous. Our
          first pit went up where the line between Waller and Harris Counties
          slices clean across the road, and that&rsquo;s where the name has
          been hanging ever since.
        </p>
        <p>
          What started as a roadside stop turned into a sit-down family room.
          Then a saloon. We added Cedar Creek when our cousins out that way
          wouldn&rsquo;t stop calling about the brisket. Now we&rsquo;re a
          two-location operation, but the kitchen still runs on the same
          recipes, the same people, and the same idea: feed folks like
          they&rsquo;re your own.
        </p>
        <p>
          Everything we serve, we make ourselves. Brisket goes in the smoker
          before sunup. Sausage is ground in-house. The pecan pie comes from
          Aunt Ree, down the road. The hot sauce on every table is bottled
          in Texas. The beer is cold. The welcome is loud.
        </p>
        <p>That&rsquo;s about it. Come hungry. Stay a while.</p>
      </section>

      <section className="bg-bg-alt border-y border-line">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 grid gap-10 sm:grid-cols-3 text-center">
          {VALUES.map((v) => (
            <div key={v.title}>
              <div className="font-display text-5xl text-brand font-black">
                {v.stat}
              </div>
              <div className="mt-3 font-display text-xl font-bold">
                {v.title}
              </div>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="eyebrow">Behind the Counter</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            The Folks Who Run the Line
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t) => (
            <div
              key={t.name}
              className="bg-paper rounded-md border border-line overflow-hidden"
            >
              <div
                className="h-44 flex items-center justify-center"
                style={{ background: t.bg }}
              >
                <span className="font-display text-paper text-6xl font-black opacity-90">
                  {t.initials}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{t.name}</h3>
                <p className="text-sm text-gold tracking-widest uppercase mt-1">
                  {t.role}
                </p>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {t.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-20 text-center">
          <p className="eyebrow">Visit</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            Drop in and say hey.
          </h2>
          <p className="mt-4 text-paper/80">
            We&rsquo;re open most days, loud most nights, and always glad to
            see a new face.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/locations" className="btn-primary">
              See Locations
            </Link>
            <Link
              href="https://direct.chownow.com/order/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-paper text-paper hover:bg-paper hover:text-ink"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const VALUES = [
  {
    stat: "12+",
    title: "Hours in the smoker",
    body: "Every brisket, every day. No shortcuts, no microwaves.",
  },
  {
    stat: "100%",
    title: "Texas ingredients",
    body: "Beef, sausage, peaches, pecans &mdash; sourced right here at home.",
  },
  {
    stat: "2",
    title: "Locations to find us",
    body: "Waller and Cedar Creek &mdash; both serve the good stuff.",
  },
];

const TEAM = [
  {
    name: "Hank Boudreaux",
    initials: "HB",
    role: "Pitmaster & Owner",
    bio: "Started the line with a pit, a pickup, and a folding table. Still gets there before sunup.",
    bg: "linear-gradient(135deg, #8a2a14, #5e1a09)",
  },
  {
    name: "Marcy Boudreaux",
    initials: "MB",
    role: "Front of House",
    bio: "Runs the floor like it&rsquo;s her own kitchen &mdash; because, well, it is.",
    bg: "linear-gradient(135deg, #c8932b, #8a2a14)",
  },
  {
    name: "Tito Reyes",
    initials: "TR",
    role: "Head Chef, Cedar Creek",
    bio: "Brought the breakfast tacos, the chili gravy, and the loudest laugh in the building.",
    bg: "linear-gradient(135deg, #3f5d3a, #1f140c)",
  },
];
