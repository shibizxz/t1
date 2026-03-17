"use client";

import { useRef, useState } from "react";

const textInputClass =
  "mt-3 w-full rounded-[1.2rem] border border-line bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-muted focus:border-accent/50";

const whatsappNumber = "919567094491";
const emailAddress = "shibilmulakkal@gmail.com";

type FormState = {
  service: string;
  name: string;
  email: string;
  contact: string;
  propFirm: string;
  accountSize: string;
  accountPhase: string;
  mt5LoginId: string;
  investorPassword: string;
};

const initialState: FormState = {
  service: "Challenge Passing",
  name: "",
  email: "",
  contact: "",
  propFirm: "",
  accountSize: "",
  accountPhase: "",
  mt5LoginId: "",
  investorPassword: "",
};

export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState("");
  const [error, setError] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function buildMessage(payload: FormState) {
    return [
      "New SniperEdge Funde booking request",
      `Service: ${payload.service}`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `WhatsApp / Telegram: ${payload.contact}`,
      `Prop firm: ${payload.propFirm}`,
      `Account size: ${payload.accountSize}`,
      `Account phase: ${payload.accountPhase}`,
      `MT5 login ID: ${payload.mt5LoginId}`,
      `Investor password: ${payload.investorPassword}`,
    ].join("\n");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = formRef.current;

    if (!formElement) {
      return;
    }

    if (!formElement.checkValidity()) {
      setSubmitted(false);
      setPreparedMessage("");
      setError("Please fill all required fields before preparing the booking details.");
      formElement.reportValidity();
      return;
    }

    setError("");
    setPreparedMessage(buildMessage(form));
    setSubmitted(true);
  }

  const whatsappLink = preparedMessage
    ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(preparedMessage)}`
    : `https://wa.me/${whatsappNumber}`;

  const mailtoLink = preparedMessage
    ? `mailto:${emailAddress}?subject=${encodeURIComponent("New booking request - SniperEdge Funde")}&body=${encodeURIComponent(preparedMessage)}`
    : `mailto:${emailAddress}`;

  return (
    <form ref={formRef} className="glass rounded-[2rem] p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm text-muted">
          Service
          <select className={textInputClass} value={form.service} onChange={(event) => updateField("service", event.target.value)}>
            <option className="text-black">Challenge Passing</option>
            <option className="text-black">Funded Account Management</option>
          </select>
        </label>
        <label className="block text-sm text-muted">
          Full Name
          <input required className={textInputClass} value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Enter full name" />
        </label>
        <label className="block text-sm text-muted">
          Email
          <input required type="email" className={textInputClass} value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="Enter email address" />
        </label>
        <label className="block text-sm text-muted">
          WhatsApp / Telegram
          <input required className={textInputClass} value={form.contact} onChange={(event) => updateField("contact", event.target.value)} placeholder="@username or phone number" />
        </label>
        <label className="block text-sm text-muted">
          Prop firm name
          <input required className={textInputClass} value={form.propFirm} onChange={(event) => updateField("propFirm", event.target.value)} placeholder="FTMO / The Funded Trader / etc." />
        </label>
        <label className="block text-sm text-muted">
          Account size
          <input required className={textInputClass} value={form.accountSize} onChange={(event) => updateField("accountSize", event.target.value)} placeholder="$10k / $50k / $100k" />
        </label>
        <label className="block text-sm text-muted">
          Account phase
          <select className={textInputClass} value={form.accountPhase} onChange={(event) => updateField("accountPhase", event.target.value)} required>
            <option value="" disabled className="text-black">
              Select account phase
            </option>
            <option className="text-black">Challenge</option>
            <option className="text-black">Funded</option>
          </select>
        </label>
        <label className="block text-sm text-muted">
          MT5 login ID
          <input required className={textInputClass} value={form.mt5LoginId} onChange={(event) => updateField("mt5LoginId", event.target.value)} placeholder="Enter MT5 login ID" />
        </label>
        <label className="block text-sm text-muted">
          Investor password
          <input required className={textInputClass} value={form.investorPassword} onChange={(event) => updateField("investorPassword", event.target.value)} placeholder="Enter investor password" />
        </label>
      </div>

      {error ? (
        <div className="mt-6 rounded-[1.2rem] border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-white">
          {error}
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="submit" className="rounded-full bg-accent px-6 py-4 text-sm font-semibold text-[#052415] transition hover:-translate-y-0.5">
          Prepare Booking Details
        </button>
        <a href={`https://wa.me/${whatsappNumber}`} className="rounded-full border border-line bg-white/5 px-6 py-4 text-sm font-semibold text-white">
          Contact on WhatsApp
        </a>
        <a href={`mailto:${emailAddress}`} className="rounded-full border border-line bg-white/5 px-6 py-4 text-sm font-semibold text-white">
          Contact by Email
        </a>
      </div>

      <div className="mt-8 space-y-4 rounded-[1.5rem] border border-line bg-white/[0.03] p-6">
        <div>
          <p className="text-lg font-semibold">{submitted ? "Booking details prepared" : "Prepare the message first"}</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {submitted
              ? "Your message is ready. Use WhatsApp or email below to send the details."
              : "Fill the form and click Prepare Booking Details. The message preview and send links will update here."}
          </p>
        </div>
        <div className="rounded-[1.2rem] border border-line bg-black/10 p-4">
          <p className="mb-2 text-sm uppercase tracking-[0.16em] text-accent">Message preview</p>
          <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-6 text-muted">
            {preparedMessage || "No message prepared yet."}
          </pre>
        </div>
        <div className="rounded-[1.2rem] border border-accent/20 bg-accent/10 p-4 text-sm leading-6 text-white">
          After sending the details, share your payment screenshot separately on WhatsApp or email.
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full px-5 py-3 text-sm font-semibold ${submitted ? "bg-accent text-[#052415]" : "pointer-events-none bg-white/10 text-muted"}`}
          >
            Send on WhatsApp
          </a>
          <a
            href={mailtoLink}
            className={`rounded-full border border-line px-5 py-3 text-sm font-semibold ${submitted ? "bg-white/5 text-white" : "pointer-events-none bg-white/5 text-muted"}`}
          >
            Send by Email
          </a>
        </div>
      </div>
    </form>
  );
}
