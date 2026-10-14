import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/design-system/components/ui/breadcrumb";
import { Button } from "@repo/design-system/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalPost, getJournalPosts } from "../content";
import { Markdown } from "../markdown";

export async function generateStaticParams() {
  const posts = await getJournalPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getJournalPost(slug);
  if (!post) {
    return { title: "Article not found" };
  }
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function JournalArticlePage({
  params,
}: PageProps<"/[locale]/blog/[slug]">) {
  const { slug } = await params;
  const post = await getJournalPost(slug);
  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Shyena Technologies Pvt. Ltd." },
    publisher: {
      "@type": "Organization",
      name: "Shyena Technologies Pvt. Ltd.",
    },
  };

  return (
    <main id="main">
      <section className="page-hero">
        <div className="article-head container">
          <Breadcrumb className="route-breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/blog">Journal</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <time className="journal-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span aria-hidden="true" className="journal-meta-separator">
            ·
          </span>
          <span className="journal-read-time">
            {post.readingTimeMinutes} min read
          </span>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </section>
      <article className="article-body">
        <Markdown source={post.body} />
        <footer className="article-endnote">
          <p>For a question about this article, write to</p>
          <a href="mailto:whois@shyenasec.com">whois@shyenasec.com</a>
          <Button asChild className="article-contact-button" variant="outline">
            <Link href="/contact">
              Discuss a security question <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </footer>
      </article>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON data is escaped before embedding.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
    </main>
  );
}

function formatDate(value: string) {
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(date);
}
