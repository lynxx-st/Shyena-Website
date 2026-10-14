import { Badge } from "@repo/design-system/components/ui/badge";
import { Button } from "@repo/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Shyena Technologies",
  description:
    "Learn about Shyena Technologies Pvt. Ltd., a Nepal-based cybersecurity and technology company building services and security products.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About us</div>
          <h1>Security services and products, built in Nepal.</h1>
          <p>
            Shyena Technologies Pvt. Ltd. provides cybersecurity services,
            develops security products, and creates practical learning
            experiences from Lalitpur, Nepal.
          </p>
        </div>
      </section>
      <section className="section-pad container content-grid">
        <div className="prose">
          <div className="eyebrow">Our approach</div>
          <h2>Assessment, products, and practical learning.</h2>
          <p>
            Our services cover hardware, connected devices, industrial control
            environments, red team exercises, and security risk advisory. We
            also work on products for hands-on learning and security workflows.
          </p>
          <p>
            Our projects, FlagForge and SecYourFlow, reflect that approach: one
            makes practice more engaging, while the other helps organize
            security work into clearer workflows.
          </p>
          <p>
            For an engagement or product inquiry, contact the team in Lalitpur.
          </p>
          <Button asChild className="company-contact-button" variant="outline">
            <Link href="/contact">
              Talk with Shyena <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <Card className="info-panel">
          <CardHeader className="company-info-header">
            <Badge className="project-card-status" variant="outline">
              Nepal
            </Badge>
            <CardTitle>Company information</CardTitle>
          </CardHeader>
          <CardContent className="company-info-content">
            <dl className="info-list">
              <div>
                <dt>Company</dt>
                <dd>Shyena Technologies Pvt. Ltd.</dd>
              </div>
              <div>
                <dt>Registration no.</dt>
                <dd>403398/83/84</dd>
              </div>
              <div>
                <dt>PAN no.</dt>
                <dd>624728049</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>Tikathali – 5, Lalitpur, Nepal</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:whois@shyenasec.com">whois@shyenasec.com</a>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
