import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations — Waller County Line",
  description:
    "Find Waller County Line and Cedar Creek Saloon. Hours, addresses, directions, and phone numbers for both Texas locations.",
};

type Location = {
  name: string;
  shortName: string;
  tagline: string;
  address: string[];
  phone: string;
  hours: { day: string; time: string }[];
  features: string[];
  directions: string;
  bg: string;
};

const LOCATIONS: Location[] = [
  {
    name: "Waller County Line — Waller",
    shortName: "Waller",
    tagline: "The original. Right where the county line cuts the highway.",
    address: ["31515 Highway 290", "Waller, TX 77484"],
    phone: "(936) 555-0142",
    hours: [
      { day: "Mon – Thu", time: "11:00am – 10:00pm" },
      { day: "Fri – Sat", time: "11:00am – 12:00am" },
      { day: "Sunday", time: "11:00am – 9:00pm" },
    ],
    features: [
      "Full smokehouse menu",
      "Outdoor patio",
      "Dog-friendly yard",
      "Online ordering & pickup",
    ],
    directions: "https://maps.google.com/?q=Waller+County+Line+Waller+TX",
    bg: "linear-gradient(135deg, #8a2a14, #5e1a09)",
  },
  {
    name: "Cedar Creek Saloon",
    shortName: "Cedar Creek",
    tagline: "Cold beer, live music, late nights, dancing room.",
    address: ["Main Street", "Cedar Creek, TX"],
    phone: "(512) 555-0190",
    hours: [
      { day: "Mon – Wed", time: "Closed" },
      { day: "Thu", time: "4:00pm – 11:00pm" },
      { day: "Fri – Sat", time: "12:00pm – 2:00am" },
      { day: "Sunday", time: "12:00pm – 10:00pm" },
    ],
    features: [
      "Live music Fri & Sat",
      "Full bar",
      "Pool tables",
      "Private event space",
    ],
    directions: "https://maps.google.com/?q=Cedar+Creek+Saloon+TX",
    bg: "linear-gradient(135deg, #3f5d3a, #1f140c)",
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12 text-center">
          <p className="eyebrow">Find Us</p>
          <h1 className="font-display text-5xl sm:text-7xl font-black mt-4">
            Two Locations
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-ink-soft">
            Both are worth the drive. Pick whichever&rsquo;s closer &mdash;
            we&rsquo;ll save you a seat.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 space-y-20">
        {LOCATIONS.map((loc, idx) => (
          <article
            key={loc.name}
            className="grid gap-10 lg:grid-cols-5 lg:items-stretch"
          >
            <div
              className={`lg:col-span-2 rounded-md overflow-hidden border-4 border-ink ${
                idx % 2 === 0 ? "" : "lg:order-last"
              }`}
            >
              <div
                className="h-full min-h-[320px] flex flex-col items-center justify-center p-10 text-center"
                style={{ background: loc.bg }}
              >
                <div className="text-paper/80 text-xs tracking-[0.4em] uppercase">
                  Visit
                </div>
                <div className="font-display text-paper text-5xl sm:text-6xl font-black mt-3 leading-none">
                  {loc.shortName}
                </div>
                <div className="mt-6 text-paper/80 text-sm">{loc.tagline}</div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold">
                {loc.name}
              </h2>

              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="eyebrow">Address</p>
                  <address className="not-italic mt-2 text-ink-soft leading-relaxed">
                    {loc.address.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </address>
                  <p className="mt-3 text-ink-soft">
                    <a
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      className="hover:text-brand"
                    >
                      {loc.phone}
                    </a>
                  </p>
                </div>

                <div>
                  <p className="eyebrow">Hours</p>
                  <ul className="mt-2 text-sm text-ink-soft space-y-1">
                    {loc.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span className="font-semibold text-ink">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <p className="eyebrow">What&rsquo;s on tap here</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {loc.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-bg-alt border border-line text-ink-soft"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={loc.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Directions
                </Link>
                <Link href="/contact" className="btn-outline">
                  Reserve a Table
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
