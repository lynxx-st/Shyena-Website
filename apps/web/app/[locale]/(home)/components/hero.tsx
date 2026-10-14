import { Button } from "@repo/design-system/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GlobalGlobe } from "./global-globe";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="hero-eyebrow">Shyena Technologies · Cybersecurity</p>
          <h1>
            Cybersecurity for <em>connected systems.</em>
          </h1>
          <p className="hero-description">
            Security testing and advisory for hardware, connected devices, and
            operational technology—alongside tools and practical training.
          </p>
          <div className="hero-actions">
            <Button
              asChild
              className="hero-primary-action"
              size="lg"
              variant="outline"
            >
              <Link href="/contact">
                <span className="liquid-button-content">
                  Discuss a security need <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              className="hero-secondary-action"
              size="lg"
              variant="outline"
            >
              <Link href="/projects">
                View projects <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hero-globe-visual">
          <GlobalGlobe />
          <p className="hero-globe-caption">
            Illustrative routes radiate from Lalitpur. Endpoints are not
            customer or office locations.
          </p>
        </div>
      </div>
    </section>
  );
}
