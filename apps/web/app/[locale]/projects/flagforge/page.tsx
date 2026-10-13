import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FlagForge CTF",
  description:
    "FlagForge is a cybersecurity capture-the-flag platform for practicing web security, cryptography, reverse engineering, and forensics.",
  alternates: { canonical: "/projects/flagforge" },
  openGraph: {
    title: "FlagForge CTF | Shyena Technologies",
    description:
      "Hands-on cybersecurity challenges from Shyena Technologies Pvt. Ltd.",
  },
};

export default function FlagForgePage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Image
            alt="FlagForge logo"
            className="project-page-logo project-logo-flagforge"
            height={112}
            src="/brand/flagforge-logo.png"
            width={112}
          />
          <div className="eyebrow">Cybersecurity learning platform</div>
          <h1>Hands-on challenges in cybersecurity.</h1>
          <p>
            FlagForge is a capture-the-flag platform with hands-on cybersecurity
            challenges designed to help people explore security concepts through
            practice.
          </p>
        </div>
      </section>
      <section className="section-pad container content-grid">
        <div className="prose">
          <div className="eyebrow">About FlagForge</div>
          <h2>Practice across core security disciplines.</h2>
          <p>
            FlagForge brings together challenges in web security, cryptography,
            reverse engineering, and forensics. Participants can work through
            problems, learn from the process, and follow progress through the
            platform.
          </p>
          <ul>
            <li>Web security</li>
            <li>Cryptography</li>
            <li>Reverse engineering</li>
            <li>Digital forensics</li>
          </ul>
          <p>
            Visit the public platform to see current challenges and available
            information.
          </p>
          <p>
            <a
              className="button button-primary"
              href="https://www.flagforgectf.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit FlagForge <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
        <aside className="info-panel">
          <h2>Project details</h2>
          <dl className="info-list">
            <div>
              <dt>Type</dt>
              <dd>Cybersecurity learning platform</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Public</dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>
                <a
                  href="https://www.flagforgectf.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  flagforgectf.com ↗
                </a>
              </dd>
            </div>
            <div>
              <dt>Built by</dt>
              <dd>Shyena Technologies Pvt. Ltd.</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}
