import { BookingForm } from "@/components/booking-form";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export default function ApplyPage() {
  return (
    <div className="shell">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Apply</span>
          <h1 className="section-title mt-6">Submit your account details after payment.</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Fill the form, prepare the message, and send your details on WhatsApp or email.
          </p>
        </div>

        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
