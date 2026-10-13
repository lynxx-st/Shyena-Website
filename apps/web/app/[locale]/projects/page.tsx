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
  },
  {
    name: "SecYourFlow",
    category: "Security workflow",
    summary:
      "A workflow product for organizing security assets, vulnerabilities, and risk context.",
    href: "/projects/secyourflow",
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
              <Link
                className="project-card"
                href={project.href}
                key={project.name}
              >
                <div className="project-card-top">
                  <span className="project-kicker">{project.category}</span>
                </div>
                <div aria-hidden="true" className="project-art">
                  <Image
                    alt=""
                    className={`project-logo project-logo-${project.name === "FlagForge" ? "flagforge" : "secyourflow"}`}
                    height={160}
                    src={`/brand/${project.name === "FlagForge" ? "flagforge" : "secyourflow"}-logo.png`}
                    width={160}
                  />
                </div>
                <div className="project-card-copy">
                  <h2>{project.name}</h2>
                  <p>{project.summary}</p>
                </div>
                <div className="project-card-link">
                  <span>View project</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
