import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="paper-grain absolute inset-0" aria-hidden />
        <div className="glow-brand" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8 pt-24 pb-32 lg:pt-32 lg:pb-40 text-center">
          <span className="tag-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            Now serving — Waller &amp; Cedar Creek
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-[7.5rem] font-black mt-7 leading-[0.95] tracking-tight text-ink">
            A cold drink,
            <br />
            <span className="italic text-brand">a hot grill,</span>
            <br />
            a Texas welcome.
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-ink-soft leading-relaxed">
            Waller County Line is a family-run roadhouse serving smoked
            brisket, juicy burgers, and ice-cold longnecks. Two locations,
            one simple promise &mdash; you leave full, happy, and a little
            louder than when you walked in.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://direct.chownow.com/order/"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
              <Arrow />
            </Link>
            <Link href="/menu" className="btn-outline">
              See the Menu
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
            {HIGHLIGHTS.map((h) => (
              <span key={h} className="tag-pill">
                <Star /> {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight tracking-tight">
                The good stuff,
                <br />
                done right.
              </h2>
            </div>
            <Link href="/menu" className="btn-outline">
              Full menu
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {SPECIALTIES.map((s) => (
              <div key={s.title} className="card p-8">
                <div
                  className="mb-6 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: s.tint, color: s.fg }}
                >
                  {s.icon}
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight tracking-tight">
            Built on barbecue, beer, and good Texas neighbors.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed text-lg">
            Waller County Line started as a single roadside stop on the line
            between Waller and Harris Counties. We&rsquo;ve grown a little
            since then &mdash; but the brisket still goes in the smoker
            before sunup, the buns are still pressed in butter, and the
            ice-house out back is always stocked.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/about" className="btn-outline">
              More about us
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            className="aspect-[4/5] rounded-[28px] overflow-hidden relative"
            style={{
              background:
                "linear-gradient(160deg, #5e1a09 0%, #8a2a14 45%, #c8932b 100%)",
              boxShadow:
                "0 40px 80px -30px rgba(94, 26, 9, 0.55), 0 1px 0 rgba(255,255,255,0.15) inset",
            }}
          >
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)",
              }}
              aria-hidden
            />
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex items-center justify-between text-paper/80 text-xs tracking-[0.3em] uppercase">
                <span>Est. Texas</span>
                <span>Vol. 01</span>
              </div>
              <div className="text-paper">
                <div className="font-display text-7xl font-black leading-[0.9] tracking-tight">
                  Since
                  <br />
                  day one.
                </div>
                <div className="mt-4 text-paper/80 text-sm tracking-[0.3em] uppercase">
                  Waller, Texas
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 card p-5 max-w-[14rem] hidden sm:block">
            <div className="text-xs tracking-[0.2em] uppercase text-muted">
              Smoked daily
            </div>
            <div className="mt-1 font-display text-2xl font-bold tracking-tight">
              4am &mdash; 9pm
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 60% at 80% 0%, rgba(200,147,43,0.18), transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(138,42,20,0.25), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8 py-24">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="eyebrow">Two locations</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
                Pick your destination.
              </h2>
            </div>
            <Link
              href="/locations"
              className="btn-outline border-paper/30 text-paper hover:bg-paper hover:text-ink"
            >
              All locations
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="group rounded-3xl overflow-hidden bg-paper text-ink relative"
                style={{
                  boxShadow:
                    "0 40px 70px -40px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  className="h-48 flex items-end p-6 relative"
                  style={{ background: loc.bg }}
                >
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 80% 10%, rgba(255,255,255,0.35), transparent 50%)",
                    }}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="text-paper/70 text-xs tracking-[0.3em] uppercase">
                      {loc.tagline}
                    </div>
                    <div className="font-display text-4xl font-black text-paper drop-shadow tracking-tight mt-1">
                      {loc.shortName}
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {loc.name}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {loc.address}
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Link href="/locations" className="btn-outline">
                      Details
                    </Link>
                    <Link
                      href={loc.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Directions
                      <Arrow />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-28 text-center relative">
        <p className="eyebrow">Hungry?</p>
        <h2 className="font-display text-5xl sm:text-7xl font-black mt-3 tracking-tight leading-[0.95]">
          See you on <span className="italic text-brand">the line.</span>
        </h2>
        <p className="mt-6 text-ink-soft max-w-xl mx-auto text-lg">
          Order online for pickup, or come on in &mdash; the screen door
          slams the same way it always has.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://direct.chownow.com/order/"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online
            <Arrow />
          </Link>
          <Link href="/contact" className="btn-outline">
            Book a Big Group
          </Link>
        </div>
      </section>
    </>
  );
}

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-gold">
      <path d="M12 2l2.4 6.7H22l-6 4.5L18.4 22 12 17.7 5.6 22l2.4-8.8-6-4.5h7.6z" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

const HIGHLIGHTS = [
  "Two Texas locations",
  "Smoked in-house daily",
  "Live music weekends",
];

const SPECIALTIES = [
  {
    title: "Smokehouse plates",
    body:
      "Brisket, ribs, and sausage smoked low and slow over post oak every morning.",
    tint: "color-mix(in srgb, #8a2a14 12%, transparent)",
    fg: "#8a2a14",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2c1.5 3-1 4-1 6s3 2 3 5-3 4-3 4" />
        <path d="M5 17h14" />
        <path d="M4 21h16" />
      </svg>
    ),
  },
  {
    title: "Burgers & Tex-Mex",
    body:
      "Hand-pressed burgers, loaded nachos, and breakfast tacos all day long.",
    tint: "color-mix(in srgb, #c8932b 18%, transparent)",
    fg: "#8a5a14",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 11c0-3 4-6 9-6s9 3 9 6" />
        <path d="M2 13h20" />
        <path d="M4 17c1 1 3 1 4 0s3-1 4 0 3 1 4 0 3-1 4 0" />
      </svg>
    ),
  },
  {
    title: "Cold drinks",
    body:
      "Texas drafts, frozen margaritas, and a bourbon list worth bragging about.",
    tint: "color-mix(in srgb, #3f5d3a 15%, transparent)",
    fg: "#3f5d3a",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 3h12l-1 18H7L6 3z" />
        <path d="M7 9h10" />
      </svg>
    ),
  },
];

const LOCATIONS = [
  {
    name: "Waller County Line — Waller",
    shortName: "WALLER",
    tagline: "The original",
    address: "Highway 290 & FM 362, Waller, TX",
    bg: "linear-gradient(135deg, #8a2a14 0%, #5e1a09 60%, #2a0c05 100%)",
    directions: "https://maps.google.com/?q=Waller+County+Line+Waller+TX",
  },
  {
    name: "Cedar Creek Saloon",
    shortName: "CEDAR CREEK",
    tagline: "Live music · late nights",
    address: "Cedar Creek, TX",
    bg: "linear-gradient(135deg, #3f5d3a 0%, #2a3f27 60%, #1f140c 100%)",
    directions: "https://maps.google.com/?q=Cedar+Creek+Saloon+TX",
  },
];
