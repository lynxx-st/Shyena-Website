import { Button } from "@repo/design-system/components/ui/button";
import { Separator } from "@repo/design-system/components/ui/separator";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { footerLinkGroups } from "./site-links";

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-main container">
      <div className="footer-company">
        <Link
          aria-label="Shyena Technologies home"
          className="footer-brand"
          href="/"
        >
          <span aria-hidden="true" className="brand-mark">
            S<span>.</span>
          </span>
          <span>Shyena Technologies Pvt. Ltd.</span>
        </Link>
        <p>
          Cybersecurity services and products for software, connected devices,
          and operational technology.
        </p>
        <div className="footer-contact-details">
          <a href="mailto:whois@shyenasec.com">
            <Mail aria-hidden="true" /> whois@shyenasec.com
          </a>
          <span>
            <MapPin aria-hidden="true" /> Tikathali – 5, Lalitpur, Nepal
          </span>
        </div>
        <Button
          asChild
          className="footer-contact-action"
          size="sm"
          variant="outline"
        >
          <Link href="/contact">
            Discuss an engagement <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
      <div className="footer-link-groups">
        {footerLinkGroups.map((group) => (
          <div className="footer-link-group" key={group.title}>
            <h2>{group.title}</h2>
            <nav aria-label={group.title}>
              {group.links.map((link) => (
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </div>
    <Separator className="footer-separator container" />
    <div className="footer-bottom container">
      <span>© {new Date().getFullYear()} Shyena Technologies Pvt. Ltd.</span>
      <span>Company registration no. 403398/83/84</span>
      <nav aria-label="Legal" className="footer-legal-links">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
    </div>
  </footer>
);
