import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@repo/design-system/components/ui/alert";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy notice — review draft",
  description:
    "Review draft for the Shyena Technologies website privacy notice.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyDraftPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Privacy</div>
          <h1>Privacy notice</h1>
          <p>Review draft for Shyena Technologies Pvt. Ltd.</p>
        </div>
      </section>
      <section className="section-pad container">
        <div className="legal-copy">
          <Alert className="legal-review-alert">
            <AlertTitle>Review draft — not approved for publication</AlertTitle>
            <AlertDescription>
              The final notice depends on the services and analytics enabled at
              launch. Legal review and confirmation of the items below are
              required before publication.
            </AlertDescription>
          </Alert>
          <h2>Information submitted through the contact form</h2>
          <p>
            The form asks for your name, email address, inquiry topic and
            message. If email delivery is configured, the message is sent to
            whois@shyenasec.com using Resend. The website application does not
            currently save form messages to its own database. Do not include
            passwords, access tokens or other secrets.
          </p>
          <h2>Service providers and technical logs</h2>
          <p>
            The application can use Resend to deliver email and Upstash Redis to
            limit repeated form submissions when those services are configured.
            The website host, CDN and their access logs must also be identified
            in the final notice. Confirm each provider, data location, retention
            period and applicable contract before publication.
          </p>
          <h2>Analytics and cookies</h2>
          <p>
            Google Analytics is optional and is only configured when a
            measurement ID is supplied. Confirm whether it will be enabled,
            which consent controls apply, what events and retention settings are
            used, and how visitors can change their preferences. This draft does
            not establish that analytics or non-essential cookies are active.
          </p>
          <h2>Retention, requests and contact</h2>
          <p>
            Before publication, Shyena Technologies must set out how long
            inquiry emails and provider logs are retained, how people can
            request access or correction where applicable, and how deletion
            requests are handled. Privacy questions can be directed to
            whois@shyenasec.com; this contact route should be confirmed by
            Legal.
          </p>
          <h2>Items for final review</h2>
          <ul>
            <li>
              Confirm the operating entity, audience and jurisdictions covered.
            </li>
            <li>
              Map the hosting, analytics, email and rate-limiting services in
              use at launch.
            </li>
            <li>
              Set retention, rights-request, consent and international-transfer
              wording.
            </li>
            <li>
              Approve the effective date and public contact for privacy
              requests.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
