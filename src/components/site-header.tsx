import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/apply", label: "Apply" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="metric-ring rounded-2xl border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-semibold tracking-[0.24em] text-accent">
            SEF
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">SniperEdge Funde</p>
            <p className="text-xs text-muted">Cost-friendly funded account service website</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/apply"
          className="rounded-full border border-accent/35 bg-accent/15 px-5 py-3 text-sm font-medium text-white shadow-glow transition hover:-translate-y-0.5"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}
