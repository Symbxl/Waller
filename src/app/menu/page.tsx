import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu — Waller County Line",
  description:
    "Smoked Texas barbecue, hand-pressed burgers, Tex-Mex favorites, and an ice-cold drink list. The full Waller County Line menu.",
};

type Item = { name: string; price: string; desc?: string; tag?: string };
type Section = { title: string; eyebrow: string; items: Item[] };

const MENU: Section[] = [
  {
    eyebrow: "From the Pit",
    title: "Smokehouse Plates",
    items: [
      {
        name: "Brisket Plate",
        price: "$18",
        desc: "Half-pound of post-oak smoked brisket, two sides, and Texas toast.",
        tag: "House favorite",
      },
      {
        name: "Pork Ribs",
        price: "$22",
        desc: "Full rack of St. Louis cut, dry-rubbed and smoked all day.",
      },
      {
        name: "Smoked Sausage Link",
        price: "$14",
        desc: "Jalapeño-cheddar link from the smoker, served with pickles and onion.",
      },
      {
        name: "Three-Meat Combo",
        price: "$28",
        desc: "Brisket, ribs, sausage. Two sides. Bring a friend.",
      },
      {
        name: "Smoked Half Chicken",
        price: "$16",
        desc: "Slow-smoked, finished crispy with our county-line glaze.",
      },
    ],
  },
  {
    eyebrow: "Off the Grill",
    title: "Burgers & Sandwiches",
    items: [
      {
        name: "The Roadhouse",
        price: "$13",
        desc: "Half-pound chuck, American cheese, lettuce, tomato, pickle, special sauce.",
      },
      {
        name: "Brisket Cheeseburger",
        price: "$16",
        desc: "Stacked with chopped brisket, smoked gouda, fried onions.",
        tag: "Best seller",
      },
      {
        name: "Chicken-Fried Chicken Sandwich",
        price: "$13",
        desc: "Buttermilk-fried, slaw, hot honey, brioche bun.",
      },
      {
        name: "Pulled Pork Sandwich",
        price: "$12",
        desc: "Smoked pork shoulder, pickled red onion, tangy mustard sauce.",
      },
    ],
  },
  {
    eyebrow: "South of the Line",
    title: "Tex-Mex",
    items: [
      {
        name: "Brisket Tacos (3)",
        price: "$14",
        desc: "Flour tortillas, smoked brisket, cilantro, onion, salsa verde.",
      },
      {
        name: "Loaded Nachos",
        price: "$13",
        desc: "Queso, beans, jalapeños, brisket or chicken.",
      },
      {
        name: "Breakfast Tacos (2)",
        price: "$8",
        desc: "Egg, cheese, choice of bacon, sausage, or chorizo. All day.",
      },
      {
        name: "Enchilada Plate",
        price: "$15",
        desc: "Three cheese enchiladas, chili gravy, rice, beans.",
      },
    ],
  },
  {
    eyebrow: "On the Side",
    title: "Sides",
    items: [
      { name: "Pit Beans", price: "$4" },
      { name: "Mac & Cheese", price: "$5" },
      { name: "Coleslaw", price: "$4" },
      { name: "Potato Salad", price: "$4" },
      { name: "Texas Toast", price: "$2" },
      { name: "Hand-Cut Fries", price: "$5" },
    ],
  },
  {
    eyebrow: "Cold & Cool",
    title: "Drinks",
    items: [
      {
        name: "Frozen Margarita",
        price: "$9",
        desc: "House recipe. Ask for it spicy.",
      },
      {
        name: "Texas Draft Beer",
        price: "$6",
        desc: "Rotating local taps. Always cold.",
      },
      {
        name: "Bourbon Flight",
        price: "$18",
        desc: "Three pours from our growing bourbon shelf.",
      },
      { name: "Sweet Tea / Lemonade", price: "$3" },
      { name: "Soft Drinks", price: "$3" },
    ],
  },
  {
    eyebrow: "Save Room",
    title: "Sweets",
    items: [
      {
        name: "Pecan Pie",
        price: "$7",
        desc: "Made down the road. Served warm with vanilla ice cream.",
      },
      {
        name: "Banana Pudding",
        price: "$6",
        desc: "Layered, chilled, and topped with vanilla wafers.",
      },
      {
        name: "Peach Cobbler",
        price: "$7",
        desc: "Hill Country peaches under a buttery crust.",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12 text-center">
          <p className="eyebrow">The Full Spread</p>
          <h1 className="font-display text-5xl sm:text-7xl font-black mt-4">
            The Menu
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-ink-soft">
            Everything we serve, all in one place. Prices are honest, portions
            are honest-er. Menus may vary slightly by location.
          </p>
          <Link
            href="https://direct.chownow.com/order/"
            className="btn-primary mt-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-20 space-y-20">
        {MENU.map((section) => (
          <div key={section.title}>
            <div className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4 mb-8">
              <div>
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
                  {section.title}
                </h2>
              </div>
            </div>
            <ul className="grid gap-7 sm:grid-cols-2">
              {section.items.map((item) => (
                <li key={item.name} className="flex gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg font-bold leading-tight">
                        {item.name}
                        {item.tag && (
                          <span className="ml-2 align-middle inline-block text-[0.6rem] tracking-[0.2em] uppercase text-paper bg-brand px-2 py-0.5 rounded">
                            {item.tag}
                          </span>
                        )}
                      </h3>
                      <span className="text-ink font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-center text-xs text-muted pt-8 border-t border-line">
          Allergen info available on request. 18% gratuity added to parties of
          eight or more. Menu and pricing subject to change.
        </p>
      </section>
    </>
  );
}
