import Link from "next/link";
import { ArrowUpRight, BadgeCheck, MessageSquare, Shield, Sparkles, WalletCards } from "lucide-react";
import { Footer } from "@/components/footer";
import { SectionShell } from "@/components/section-shell";
import { SiteHeader } from "@/components/site-header";
import { bookingChecklist, liveMetrics, processSteps, serviceHighlights, supportedFirms } from "@/lib/data";

const trustCards = [
  {
    title: "Clear process",
    text: "Clients can understand the service, complete payment, and submit account details in one smooth flow.",
    icon: Shield,
  },
  {
    title: "Direct communication",
    text: "Every inquiry reaches you directly on WhatsApp or email so you can respond quickly.",
    icon: BadgeCheck,
  },
  {
    title: "Focused services",
    text: "The website stays focused on challenge passing and funded account management without unnecessary clutter.",
    icon: MessageSquare,
  },
];

export default function HomePage() {
  return (
    <div className="shell">
      <div className="grid-fade fixed inset-0 opacity-40" />
      <SiteHeader />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <Sparkles size={14} />
              Challenge passing and funded account management
            </span>
            <h1 className="mt-8 text-[clamp(3.4rem,8vw,7.2rem)] font-semibold leading-[0.95] tracking-[-0.08em]">
              Professional service presentation with direct application, payment confirmation, and quick contact.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              SniperEdge Funde helps clients with funded account challenge passing and funded account management through a clear and
              direct onboarding process.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="rounded-full border border-accent/30 bg-accent px-6 py-4 text-sm font-semibold text-[#052415] transition hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-line bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="glass rounded-[2.5rem] p-6 lg:p-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#091525] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-accent">Booking setup</p>
                  <h2 className="mt-2 text-2xl font-semibold">What clients send</h2>
                </div>
                <div className="rounded-full bg-accent/10 p-3 text-accent">
                  <WalletCards size={24} />
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                {bookingChecklist.map((item, index) => (
                  <div key={item} className="rounded-[1.5rem] border border-line bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.16em] text-muted">Step item {index + 1}</p>
                        <p className="mt-3 text-xl font-semibold">{item}</p>
                      </div>
                      <ArrowUpRight className="text-accent" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">Added in the form and sent directly after submission.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Why Choose Us"
          title="A simple structure built around your two main services."
          description="Clients can understand the offer, make payment, and submit account details without confusion."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {trustCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="glass rounded-[2rem] p-6">
                <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="How It Works" title="A four-step flow built for direct manual handling.">
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.id} className="glass rounded-[2rem] p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-signal">{step.id}</p>
                <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="Supported Firms" title="Show clients the prop firms you support.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportedFirms.map((firm) => (
              <div key={firm} className="glass rounded-[1.5rem] px-6 py-5 text-lg font-medium">
                {firm}
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Service Highlights"
          title="Show only the two main services your client approved."
          description="This section keeps the focus on challenge passing and funded account management."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceHighlights.map((item) => (
              <div key={item.title} className="glass rounded-[2rem] p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-accent">{item.title}</p>
                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="UPI Payment" title="Collect booking proof without adding a payment gateway.">
          <div className="glass rounded-[2rem] p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold">Simple payment flow</h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                  Client makes the payment using UPI, fills the form, then sends the prepared details on WhatsApp or email.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-accent/20 bg-accent/10 p-6">
                <p className="text-sm uppercase tracking-[0.16em] text-accent">UPI ID</p>
                <p className="mt-4 text-3xl font-semibold">sniperedge@upi</p>
                <p className="mt-3 text-sm leading-6 text-muted">Send payment first, then submit the form.</p>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Contact"
          title="Ready to collect applications?"
          description="Clients can visit the site, choose a service, pay through UPI, and send all details directly."
        >
          <div className="glass flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold">Speak directly and keep the process simple.</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Clients can choose a service, complete payment, fill the form, and send the details directly on WhatsApp or email.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply" className="rounded-full bg-accent px-5 py-3 font-semibold text-[#052415]">
                Apply Now
              </Link>
              <a href="https://wa.me/919567094491" className="rounded-full border border-line bg-white/5 px-5 py-3 font-semibold text-white">
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </SectionShell>

        <SectionShell eyebrow="Quick View" title="What clients can do on the website.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {liveMetrics.map((metric) => (
              <div key={metric.label} className="glass rounded-[1.5rem] px-6 py-5">
                <p className="text-sm uppercase tracking-[0.16em] text-muted">{metric.label}</p>
                <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{metric.detail}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
}
