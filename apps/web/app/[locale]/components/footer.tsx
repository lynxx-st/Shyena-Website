import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

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
          Cybersecurity services, products and practical learning from Nepal.
        </p>
        <div className="footer-contact-details">
          <a href="mailto:whois@shyenasec.com">
            <Mail aria-hidden="true" /> whois@shyenasec.com
          </a>
          <span>
            <MapPin aria-hidden="true" /> Tikathali – 5, Lalitpur, Nepal
          </span>
        </div>
      </div>
      <div className="footer-link-groups">
        <div className="footer-link-group">
          <h2>Explore</h2>
          <nav aria-label="Explore">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Journal</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-link-group">
          <h2>Company</h2>
          <nav aria-label="Company">
            <Link href="/projects/flagforge">FlagForge</Link>
            <Link href="/projects/secyourflow">SecYourFlow</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
      </div>
    </div>
    <div className="footer-bottom container">
      <span>© {new Date().getFullYear()} Shyena Technologies Pvt. Ltd.</span>
      <span>Company registration no. 403398/83/84</span>
    </div>
  </footer>
);
