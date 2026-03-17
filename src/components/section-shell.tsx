type SectionShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionShell({ eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="mb-10 max-w-3xl">
        {eyebrow ? <span className="eyebrow mb-5">{eyebrow}</span> : null}
        <h2 className="section-title">{title}</h2>
        {description ? <p className="mt-5 text-lg leading-8 text-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
