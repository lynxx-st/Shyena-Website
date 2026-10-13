import type { Metadata } from "next";
import Link from "next/link";
import { getJournalPosts } from "./content";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on security engineering, connected systems, and practical security work from Shyena Technologies.",
  alternates: { canonical: "/blog" },
};

export default async function JournalPage() {
  const posts = await getJournalPosts();
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Journal</div>
          <h1>Notes from the work.</h1>
          <p>
            Practical thinking on security engineering, connected systems and
            the details that make findings useful.
          </p>
        </div>
      </section>
      <section className="section-pad container">
        {posts.length ? (
          <div className="journal-grid">
            {posts.map((post) => (
              <Link
                className="journal-card"
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <time className="journal-date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className="journal-read">
                  Read the article <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-editorial">
            <h2>New writing is in progress.</h2>
            <p>
              Our journal will collect practical notes from Shyena Technologies.
              You can reach us at{" "}
              <a href="mailto:whois@shyenasec.com">whois@shyenasec.com</a> in
              the meantime.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

function formatDate(value: string) {
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(date);
}
