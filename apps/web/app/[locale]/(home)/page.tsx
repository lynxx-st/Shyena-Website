import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@repo/design-system/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "../contact/components/contact-form";
import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";

export const metadata: Metadata = {
  title: "Cybersecurity across software, devices and operations",
  description:
    "Shyena Technologies Pvt. Ltd. works across software security, connected devices and operational technology, alongside security products and hands-on learning.",
  alternates: { canonical: "/" },
};

const workAreas = [
  {
    key: "software",
    icon: ShieldCheck,
    title: "Software security",
    description:
      "Security assessment and engineering support for software and the systems built around it.",
    href: "/contact",
    action: "Discuss an engagement",
  },
  {
    key: "systems",
    icon: Cpu,
    title: "Devices and OT",
    description:
      "Security work where software connects to hardware, embedded devices and operational technology.",
    href: "/about",
    action: "About our focus",
  },
  {
    key: "products",
    icon: Workflow,
    title: "Security products & learning",
    description:
      "FlagForge supports hands-on practice. SecYourFlow is available privately by demo.",
    href: "/projects",
    action: "See our projects",
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
          <h2 id="work-title">Where security meets software and devices.</h2>
          <p className="section-summary">
            Security services, products and practical learning across software,
            connected devices and operational technology.
          </p>
        </div>
        <div className="work-grid">
          {workAreas.map((area) => (
            <Card
              className={`work-card work-card-${area.key}`}
              key={area.title}
            >
              <CardHeader className="work-card-header">
                <h3>{area.title}</h3>
                <CardAction aria-hidden="true" className="work-card-icon">
                  <area.icon />
                </CardAction>
              </CardHeader>
              <CardContent className="work-card-content">
                <p>{area.description}</p>
              </CardContent>
              <CardFooter className="work-card-footer">
                <Link className="work-card-link" href={area.href}>
                  {area.action} <ArrowUpRight aria-hidden="true" />
                </Link>
              </CardFooter>
            </Card>
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
            <Link
              className="project-card project-flagforge"
              href="/projects/flagforge"
            >
              <div aria-hidden="true" className="project-art project-art-forge">
                <Image
                  alt=""
                  className="project-logo project-logo-flagforge"
                  height={160}
                  src="/brand/flagforge-logo.png"
                  width={160}
                />
              </div>
              <div className="project-card-copy">
                <h3>FlagForge</h3>
                <p>
                  Capture-the-flag challenges across web security, cryptography,
                  reverse engineering and forensics.
                </p>
                <span className="project-card-link">
                  Project details <ArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link
              className="project-card project-secyourflow"
              href="/projects/secyourflow"
            >
              <div aria-hidden="true" className="project-art project-art-flow">
                <Image
                  alt=""
                  className="project-logo project-logo-secyourflow"
                  height={160}
                  src="/brand/secyourflow-logo.png"
                  width={160}
                />
              </div>
              <div className="project-card-copy">
                <h3>SecYourFlow</h3>
                <p>
                  A private security workflow project. Contact us to ask for a
                  demonstration.
                </p>
                <span className="project-card-link">
                  Request a demo <ArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </Link>
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
