import { Button } from "@repo/design-system/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="contact-cta container">
      <div>
        <p className="section-index">Start a conversation</p>
        <h2>Tell us what you’re working on.</h2>
        <p>
          Reach out about a security engagement, a product question, or a
          SecYourFlow demonstration.
        </p>
      </div>
      <Button asChild className="cta-action" size="lg">
        <Link href="/contact">
          Contact our team <ArrowUpRight aria-hidden="true" />
        </Link>
      </Button>
    </section>
  );
}
