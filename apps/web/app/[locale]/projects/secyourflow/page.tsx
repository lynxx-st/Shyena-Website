import { Badge } from "@repo/design-system/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/design-system/components/ui/breadcrumb";
import { Button } from "@repo/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
          <Breadcrumb className="route-breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/projects">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>SecYourFlow</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
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
          <Badge className="project-status" variant="outline">
            Available privately
          </Badge>
          <Button asChild className="project-detail-cta">
            <a href="mailto:whois@shyenasec.com?subject=SecYourFlow%20demo%20request">
              Request a demonstration <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
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
        </div>
        <Card className="info-panel">
          <CardHeader className="company-info-header">
            <CardTitle>Project details</CardTitle>
          </CardHeader>
          <CardContent className="company-info-content">
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
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
