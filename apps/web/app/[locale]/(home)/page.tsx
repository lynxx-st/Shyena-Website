import { Badge } from "@repo/design-system/components/ui/badge";
import { Card, CardContent } from "@repo/design-system/components/ui/card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "../contact/components/contact-form";
import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";

export const metadata: Metadata = {
  title: "Cybersecurity for connected systems",
  description:
    "Shyena Technologies Pvt. Ltd. works across software security, connected devices and operational technology, alongside security products and hands-on learning.",
  alternates: { canonical: "/" },
};

const workAreas = [
  {
    key: "hardware-vapt",
    id: "hardware-vapt",
    title: "Hardware VAPT",
    description:
      "Review hardware, firmware and exposed debug interfaces to understand practical attack paths.",
  },
  {
    key: "ot-ics-assessment",
    id: "ot-ics-assessment",
    title: "OT / ICS assessment",
    description:
      "Assess industrial control environments, including PLC, DCS and SCADA components, within an agreed scope.",
  },
  {
    key: "iot-security",
    id: "iot-security",
    title: "IoT security testing",
    description:
      "Review device interfaces, firmware, companion applications and connected services as applicable.",
  },
  {
    key: "scada-penetration-testing",
    id: "scada-penetration-testing",
    title: "SCADA network testing",
    description:
      "Test protocol exposure, network segmentation and access controls in a controlled engagement.",
  },
  {
    key: "red-team-operations",
    id: "red-team-operations",
    title: "Red team operations",
    description:
      "Exercise agreed attack paths across connected IT and OT environments with operational constraints in scope.",
  },
  {
    key: "compliance-risk-advisory",
    id: "compliance-risk-advisory",
    title: "Compliance & risk advisory",
    description:
      "Identify security gaps and give teams a practical, prioritized path for risk treatment.",
  },
];

export default function Home() {
  return (
    <main id="main">
      <Hero />

      <section
        aria-labelledby="work-title"
        className="work-section container"
        id="services"
      >
        <div className="section-heading">
          <h2 id="work-title">
            Assessment and advisory for connected systems.
          </h2>
          <p className="section-summary">
            Hardware, device, and operational technology security work, planned
            around an agreed scope.
          </p>
        </div>
        <div className="service-list">
          {workAreas.map((area, index) => (
            <article className="service-item" id={area.id} key={area.id}>
              <div className="service-item-heading">
                <span aria-hidden="true" className="service-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{area.title}</h3>
              </div>
              <p>{area.description}</p>
              <Link
                className="service-link"
                href={`/contact?topic=${encodeURIComponent(area.title)}`}
              >
                Discuss this service <ArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="projects-title"
        className="projects-section"
        id="projects"
      >
        <div className="section-pad container">
          <div className="section-heading section-heading-projects">
            <h2 id="projects-title">Built for practice and security work.</h2>
            <p className="section-summary">
              FlagForge offers hands-on cybersecurity challenges. SecYourFlow
              organizes security work and is available privately by demo.
            </p>
          </div>
          <div className="project-grid">
            <Card className="project-card project-flagforge">
              <div aria-hidden="true" className="project-art project-art-forge">
                <Image
                  alt=""
                  className="project-logo project-logo-flagforge"
                  height={160}
                  src="/brand/flagforge-logo.png"
                  width={160}
                />
              </div>
              <CardContent className="project-card-copy">
                <Badge className="project-card-status" variant="outline">
                  Public
                </Badge>
                <h3>FlagForge</h3>
                <p>
                  Capture-the-flag challenges across web security, cryptography,
                  reverse engineering and forensics.
                </p>
                <span className="project-card-link">
                  <Link href="/projects/flagforge">Project details</Link>{" "}
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </CardContent>
            </Card>
            <Card className="project-card project-secyourflow">
              <div aria-hidden="true" className="project-art project-art-flow">
                <Image
                  alt=""
                  className="project-logo project-logo-secyourflow"
                  height={160}
                  src="/brand/secyourflow-logo.png"
                  width={160}
                />
              </div>
              <CardContent className="project-card-copy">
                <Badge className="project-card-status" variant="outline">
                  Available privately
                </Badge>
                <h3>SecYourFlow</h3>
                <p>
                  A private security workflow project. Contact us to ask for a
                  demonstration.
                </p>
                <span className="project-card-link">
                  <Link href="/projects/secyourflow">Request a demo</Link>{" "}
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </CardContent>
            </Card>
          </div>
          <Link className="all-projects-link" href="/projects">
            Browse all project details <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <FAQ />
      <section aria-labelledby="home-contact-title" className="home-contact">
        <div className="home-contact-layout container">
          <div className="home-contact-copy">
            <h2 id="home-contact-title">
              Let’s talk about what needs securing.
            </h2>
            <p>
              Tell us about a software, device or operational technology
              challenge—or ask for a SecYourFlow demonstration.
            </p>
            <a className="home-contact-email" href="mailto:whois@shyenasec.com">
              whois@shyenasec.com <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <Card className="home-contact-card">
            <CardContent className="home-contact-content">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
