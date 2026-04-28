import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Waller County Line",
  description:
    "Reach Waller County Line for reservations, private events, catering, or just to say hey. Two Texas locations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 pt-16 pb-12 text-center">
          <p className="eyebrow">Drop a Line</p>
          <h1 className="font-display text-5xl sm:text-7xl font-black mt-4">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-ink-soft">
            Catering an office, booking a band, or planning a wedding rehearsal?
            We&rsquo;ve got room. Send a note and we&rsquo;ll get right back.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 grid gap-12 lg:grid-cols-5">
        {/* FORM */}
        <div className="lg:col-span-3">
          <form
            action="https://formspree.io/f/your-id"
            method="POST"
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Date (if applicable)" name="date" type="date" />
            </div>
            <SelectField
              label="What are you reaching out about?"
              name="topic"
              options={[
                "General question",
                "Reservation (8+ people)",
                "Private event",
                "Catering",
                "Press / media",
                "Something else",
              ]}
            />
            <TextAreaField
              label="Tell us a little more"
              name="message"
              required
            />
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send Message
            </button>
            <p className="text-xs text-muted">
              We typically reply within one business day. For same-day
              questions, give us a call.
            </p>
          </form>
        </div>

        {/* DETAILS */}
        <aside className="lg:col-span-2 space-y-10">
          <div>
            <p className="eyebrow">Call Us</p>
            <ul className="mt-3 space-y-3 text-ink-soft">
              <li>
                <div className="font-display text-lg font-bold text-ink">
                  Waller
                </div>
                <a href="tel:9365550142" className="hover:text-brand">
                  (936) 555-0142
                </a>
              </li>
              <li>
                <div className="font-display text-lg font-bold text-ink">
                  Cedar Creek
                </div>
                <a href="tel:5125550190" className="hover:text-brand">
                  (512) 555-0190
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Email</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              <li>
                <span className="font-semibold text-ink">General:</span>{" "}
                <a
                  href="mailto:howdy@wallercountyline.com"
                  className="hover:text-brand"
                >
                  howdy@wallercountyline.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-ink">Catering:</span>{" "}
                <a
                  href="mailto:catering@wallercountyline.com"
                  className="hover:text-brand"
                >
                  catering@wallercountyline.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-ink">Events:</span>{" "}
                <a
                  href="mailto:events@wallercountyline.com"
                  className="hover:text-brand"
                >
                  events@wallercountyline.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-bg-alt border border-line rounded-md p-6">
            <p className="eyebrow">Quick Bites</p>
            <p className="mt-3 text-ink-soft text-sm leading-relaxed">
              Looking to order food right now? Skip the form &mdash; we keep
              online ordering open from open to close.
            </p>
            <Link
              href="https://direct.chownow.com/order/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4"
            >
              Order Online
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] font-semibold text-ink-soft mb-2">
        {label}
        {required && <span className="text-brand ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 bg-paper border-2 border-line rounded focus:border-ink focus:outline-none transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] font-semibold text-ink-soft mb-2">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full px-4 py-3 bg-paper border-2 border-line rounded focus:border-ink focus:outline-none transition-colors"
      >
        <option value="" disabled>
          Pick one...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] font-semibold text-ink-soft mb-2">
        {label}
        {required && <span className="text-brand ml-1">*</span>}
      </span>
      <textarea
        name={name}
        rows={5}
        required={required}
        className="w-full px-4 py-3 bg-paper border-2 border-line rounded focus:border-ink focus:outline-none transition-colors resize-y"
      />
    </label>
  );
}
