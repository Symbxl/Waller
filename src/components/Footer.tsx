import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm text-paper/70 leading-relaxed">
            Where Texas hospitality meets a hot grill and a cold beer. Two
            locations across Waller County serving up the good stuff seven
            days a week.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Visit</div>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <Link href="/locations" className="hover:text-gold">
                Waller
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-gold">
                Cedar Creek Saloon
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-gold">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Hours</div>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>Mon &ndash; Thu &nbsp;11am &ndash; 10pm</li>
            <li>Fri &ndash; Sat &nbsp;11am &ndash; midnight</li>
            <li>Sunday &nbsp;11am &ndash; 9pm</li>
          </ul>
          <Link
            href="https://direct.chownow.com/order/"
            className="btn-primary mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online
          </Link>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/60">
          <p>&copy; {year} Waller County Line. All rights reserved.</p>
          <p>Texas-made &middot; Family-owned</p>
        </div>
      </div>
    </footer>
  );
}
