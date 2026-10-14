import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/ui/card";
import type { Metadata } from "next";
import { ContactForm } from "./components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shyena Technologies Pvt. Ltd. in Lalitpur, Nepal, about services or projects.",
  alternates: { canonical: "/contact" },
};

const inquiryTopics = new Set([
  "Security services",
  "Hardware VAPT",
  "OT / ICS assessment",
  "IoT security testing",
  "SCADA network testing",
  "Red team operations",
  "Compliance & risk advisory",
  "FlagForge",
  "SecYourFlow demo",
  "Other inquiry",
]);

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const initialTopic = topic && inquiryTopics.has(topic) ? topic : "";

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Tell us what you’re working on.</h1>
          <p>
            Share a little context and our team can direct your inquiry to the
            right place.
          </p>
        </div>
      </section>
      <section className="section-pad contact-layout container">
        <div className="contact-copy">
          <h2>A direct line to our team.</h2>
          <p>
            Use the form for security service inquiries, FlagForge questions, or
            a private SecYourFlow demonstration.
          </p>
          <a className="contact-email" href="mailto:whois@shyenasec.com">
            whois@shyenasec.com ↗
          </a>
          <dl className="info-list">
            <div>
              <dt>Company</dt>
              <dd>Shyena Technologies Pvt. Ltd.</dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>Tikathali – 5, Lalitpur, Nepal</dd>
            </div>
          </dl>
        </div>
        <Card className="contact-form-card">
          <CardHeader className="contact-form-card-header">
            <CardTitle>Send an inquiry</CardTitle>
          </CardHeader>
          <CardContent className="contact-form-card-content">
            <ContactForm initialTopic={initialTopic} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
