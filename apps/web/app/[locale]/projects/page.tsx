import { Badge } from "@repo/design-system/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@repo/design-system/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore FlagForge, a cybersecurity CTF platform, and SecYourFlow, a private security workflow product from Shyena Technologies.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    name: "FlagForge",
    category: "Cybersecurity learning",
    summary:
      "A capture-the-flag platform for hands-on cybersecurity challenges and learning.",
    href: "/projects/flagforge",
    availability: "Public",
    slug: "flagforge",
  },
  {
    name: "SecYourFlow",
    category: "Security workflow",
    summary:
      "A workflow product for organizing security assets, vulnerabilities, and risk context.",
    href: "/projects/secyourflow",
    availability: "Available privately",
    slug: "secyourflow",
  },
];

export default function ProjectsPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Projects</div>
          <h1>Tools for learning and security work.</h1>
          <p>
            Explore security products and learning experiences from Shyena
            Technologies.
          </p>
        </div>
      </section>
      <section className="projects-section">
        <div className="section-pad container">
          <div className="project-grid">
            {projects.map((project) => (
              <Card
                className="project-card project-index-card"
                key={project.name}
              >
                <div
                  aria-hidden="true"
                  className={`project-art project-art-${project.slug}`}
                >
                  <Image
                    alt=""
                    className={`project-logo project-logo-${project.name === "FlagForge" ? "flagforge" : "secyourflow"}`}
                    height={160}
                    src={`/brand/${project.name === "FlagForge" ? "flagforge" : "secyourflow"}-logo.png`}
                    width={160}
                  />
                </div>
                <CardContent className="project-card-copy project-index-copy">
                  <Badge className="project-card-status" variant="outline">
                    {project.availability}
                  </Badge>
                  <p className="project-kicker">{project.category}</p>
                  <h2>
                    <Link href={project.href}>{project.name}</Link>
                  </h2>
                  <p>{project.summary}</p>
                </CardContent>
                <CardFooter className="project-index-footer">
                  <Link className="project-card-link" href={project.href}>
                    View project details <ArrowUpRight aria-hidden="true" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
