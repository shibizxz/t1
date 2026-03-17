import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

const contactCards = [
  {
    title: "WhatsApp",
    value: "+91 95670 94491",
    href: "https://wa.me/919567094491",
  },
  {
    title: "Email",
    value: "shibilmulakkal@gmail.com",
    href: "mailto:shibilmulakkal@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="shell">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="section-title mt-6">Talk directly and keep the booking flow simple.</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Clients can contact you directly on WhatsApp or email for service inquiries and account submission guidance.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contactCards.map((card) => (
            <a key={card.title} href={card.href} className="glass rounded-[2rem] p-8 transition hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.18em] text-accent">{card.title}</p>
              <h2 className="mt-4 text-2xl font-semibold">{card.value}</h2>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
