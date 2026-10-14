import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@repo/design-system/components/ui/alert";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website terms — review draft",
  description:
    "Review draft for website terms for Shyena Technologies Pvt. Ltd.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/terms" },
};

export default function TermsDraftPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Terms</div>
          <h1>Website terms</h1>
          <p>Review draft for Shyena Technologies Pvt. Ltd.</p>
        </div>
      </section>
      <section className="section-pad container">
        <div className="legal-copy">
          <Alert className="legal-review-alert">
            <AlertTitle>Review draft — not approved for publication</AlertTitle>
            <AlertDescription>
              These draft notes cover this website only. Legal review is
              required before publication, and separate terms may be needed for
              services, FlagForge or SecYourFlow.
            </AlertDescription>
          </Alert>
          <h2>Using this website</h2>
          <p>
            This website provides general information about Shyena Technologies
            Pvt. Ltd. and its projects. The company should confirm the
            permitted-use rules, applicable law and any age or location limits
            that belong in the final terms.
          </p>
          <h2>Security testing and project access</h2>
          <p>
            Do not treat information on this site as permission to test, scan or
            access any system. Only perform security testing when the system
            owner has given clear authorization and the activity stays within
            its agreed scope. Legal review must define appropriate terms for
            FlagForge participation and for any service or product access.
          </p>
          <h2>External websites</h2>
          <p>
            This website links to external project websites, including
            FlagForge. The final terms should explain that those sites may have
            separate terms and privacy practices, and should identify
            responsibility for the linked content.
          </p>
          <h2>Items for final review</h2>
          <ul>
            <li>
              Decide whether these terms cover only the company website or also
              link into service and product terms.
            </li>
            <li>
              Review intellectual property, acceptable use, disclaimers and
              liability wording.
            </li>
            <li>
              Set governing law, dispute process, suspension rules, effective
              date and company contact.
            </li>
            <li>
              Confirm the terms for the external FlagForge platform with its
              operator.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
