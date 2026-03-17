import { AlertTriangle, BriefcaseBusiness, ShieldHalf } from "lucide-react";
import { Footer } from "@/components/footer";
import { SectionShell } from "@/components/section-shell";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "Challenge Passing",
    description:
      "We help clients pass Phase 1 and Phase 2 prop firm challenges through a simple onboarding and direct-contact process.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Funded Account Management",
    description:
      "We manage funded accounts safely with focus on protecting the account and generating profit.",
    icon: ShieldHalf,
  },
];

const rules = [
  "Challenge Passing for Phase 1 and Phase 2",
  "Funded Account Management with account protection focus",
  "Simple application flow",
  "Direct contact on WhatsApp and email",
];

export default function ServicesPage() {
  return (
    <div className="shell">
      <SiteHeader />
      <main>
        <SectionShell
          eyebrow="Services"
          title="Two core services presented clearly for direct client action."
          description="This page keeps the offer focused so clients immediately understand what services are available."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <div key={title} className="glass rounded-[2rem] p-8">
                <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                  <Icon size={24} />
                </div>
                <h2 className="mt-6 text-3xl font-semibold">{title}</h2>
                <p className="mt-4 text-base leading-8 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="Service Focus" title="Keep the website focused on safety, clarity, and service presentation.">
          <div className="glass rounded-[2rem] p-8">
            <div className="mb-8 flex items-center gap-3">
              <AlertTriangle className="text-signal" />
              <h3 className="text-2xl font-semibold">How the services should be positioned</h3>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {rules.map((rule) => (
                <div key={rule} className="rounded-[1.5rem] border border-line bg-white/[0.03] p-5 text-base text-muted">
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
}
