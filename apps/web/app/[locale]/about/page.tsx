import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shyena Technologies",
  description:
    "Learn about Shyena Technologies Pvt. Ltd., a Nepal-based cybersecurity and technology company building services and security products.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About us</div>
          <h1>A Nepal-based cybersecurity and technology company.</h1>
          <p>
            Shyena Technologies Pvt. Ltd. is a Nepal-based cybersecurity and
            technology company. We provide security services, build security
            products, and support practical cybersecurity learning.
          </p>
        </div>
      </section>
      <section className="section-pad container content-grid">
        <div className="prose">
          <div className="eyebrow">Our approach</div>
          <h2>Security should help people move forward.</h2>
          <p>
            We bring together hands-on security work, product development, and
            learning experiences. Our focus includes application security and
            the connected systems where software meets hardware and operational
            technology.
          </p>
          <p>
            Our projects, FlagForge and SecYourFlow, reflect that approach: one
            makes practice more engaging, while the other helps organize
            security work into clearer workflows.
          </p>
          <h2>Company information</h2>
          <p>
            Shyena Technologies Pvt. Ltd. is registered in Nepal. Contact us by
            email for company and service inquiries.
          </p>
        </div>
        <aside className="info-panel">
          <h2>Company details</h2>
          <dl className="info-list">
            <div>
              <dt>Company</dt>
              <dd>Shyena Technologies Pvt. Ltd.</dd>
            </div>
            <div>
              <dt>Registration no.</dt>
              <dd>403398/83/84</dd>
            </div>
            <div>
              <dt>PAN no.</dt>
              <dd>624728049</dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>Tikathali – 5, Lalitpur, Nepal</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:whois@shyenasec.com">whois@shyenasec.com</a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}
