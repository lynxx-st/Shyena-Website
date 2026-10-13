import { Button } from "@repo/design-system/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HeroScene } from "./hero-scene";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <h1>
            Security from code to the <em>physical world.</em>
          </h1>
          <p className="hero-description">
            We secure software, connected devices and operational technology. We
            also build security tools and hands-on training.
          </p>
          <div className="hero-actions">
            <Button asChild className="hero-primary-action" size="lg">
              <Link href="/contact">
                Discuss a security need <ArrowUpRight aria-hidden="true" />
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
        <HeroScene />
      </div>
    </section>
  );
}
