import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SecYourFlow",
  description:
    "SecYourFlow helps teams organize security assets, vulnerabilities, threat context, risk scoring, and compliance mapping.",
  alternates: { canonical: "/projects/secyourflow" },
};

const features = [
  "Asset inventory",
  "Vulnerability management",
  "Threat context",
  "Risk scoring",
  "Compliance mapping",
];

export default function SecYourFlowPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Image
            alt="SecYourFlow logo"
            className="project-page-logo project-logo-secyourflow"
            height={112}
            src="/brand/secyourflow-logo.png"
            width={112}
          />
          <div className="eyebrow">Security workflow product</div>
          <h1>A connected view of security work.</h1>
          <p>
            SecYourFlow is a security workflow product designed to bring
            essential security information into a clearer, more connected view.
          </p>
        </div>
      </section>
      <section className="section-pad container content-grid">
        <div className="prose">
          <div className="eyebrow">About SecYourFlow</div>
          <h2>Context for the work that matters.</h2>
          <p>
            SecYourFlow helps teams organize their assets and vulnerabilities,
            add threat context, understand risk, and map work to compliance
            needs in a connected view.
          </p>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p>
            SecYourFlow is available privately. Email us to request a
            demonstration.
          </p>
          <p>
            <a
              className="button button-primary"
              href="mailto:whois@shyenasec.com?subject=SecYourFlow%20demo%20request"
            >
              Request a demo <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
        <aside className="info-panel">
          <h2>Project details</h2>
          <dl className="info-list">
            <div>
              <dt>Type</dt>
              <dd>Security workflow product</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Available privately</dd>
            </div>
            <div>
              <dt>Capabilities</dt>
              <dd>
                Assets, vulnerabilities, risk context, and compliance mapping
              </dd>
            </div>
            <div>
              <dt>Request</dt>
              <dd>
                <a href="mailto:whois@shyenasec.com?subject=SecYourFlow%20demo%20request">
                  Email to request a demo
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}
