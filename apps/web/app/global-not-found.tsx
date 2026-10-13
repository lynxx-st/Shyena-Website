import type { Metadata } from "next";
import Link from "next/link";
import "./[locale]/styles.css";

export const metadata: Metadata = {
  title: "Page not found | Shyena Technologies Pvt. Ltd.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="not-found container" id="main">
          <Link
            aria-label="Shyena Technologies Pvt. Ltd. home"
            className="brand"
            href="/"
          >
            <span aria-hidden="true" className="brand-mark">
              S<span>.</span>
            </span>
            <span className="brand-name">
              Shyena Technologies<span>Pvt. Ltd.</span>
            </span>
          </Link>
          <div className="eyebrow">404 · Page not found</div>
          <h1>This page isn’t here.</h1>
          <p>The page may have moved, or the address may be incorrect.</p>
          <p>
            <Link className="button button-primary" href="/">
              Return to the home page <span aria-hidden="true">→</span>
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
