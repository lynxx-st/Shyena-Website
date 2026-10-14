import { Badge } from "@repo/design-system/components/ui/badge";
import { Button } from "@repo/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@repo/design-system/components/ui/card";
import { ArrowUpRight } from "lucide-react";
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
          <div
            className={
              posts.length === 1
                ? "journal-grid journal-grid-featured"
                : "journal-grid"
            }
          >
            {posts.map((post) => (
              <Card className="journal-card" key={post.slug}>
                <CardContent className="journal-card-content">
                  <div className="journal-meta">
                    <time className="journal-date" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <Badge className="journal-badge" variant="outline">
                      {post.readingTimeMinutes} min read
                    </Badge>
                  </div>
                  <h2>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.description}</p>
                </CardContent>
                <CardFooter className="journal-card-footer">
                  <Button
                    asChild
                    className="journal-read-button"
                    variant="link"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read article <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
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
