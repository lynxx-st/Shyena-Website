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
          <Breadcrumb className="route-breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/projects">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FlagForge</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
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
          <Badge className="project-status" variant="outline">
            Public platform
          </Badge>
          <Button asChild className="project-detail-cta">
            <a
              href="https://www.flagforgectf.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit FlagForge <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
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
        </div>
        <Card className="info-panel">
          <CardHeader className="company-info-header">
            <CardTitle>Project details</CardTitle>
          </CardHeader>
          <CardContent className="company-info-content">
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
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
