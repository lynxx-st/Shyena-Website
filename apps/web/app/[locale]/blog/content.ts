import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export interface JournalPost {
  body: string;
  date: string;
  description: string;
  slug: string;
  title: string;
}

const postsDirectory = path.join(process.cwd(), "content", "posts");
const markdownFilePattern = /\.md$/;
const slugPattern = /^[a-z0-9-]+$/;
const frontmatterPattern = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/;
const fieldPattern = /^([a-zA-Z][\w-]*):\s*(.*?)\s*$/;
const quotePattern = /^(["'])(.*)\1$/;
const newlinePattern = /\r?\n/;

export async function getJournalPosts(): Promise<JournalPost[]> {
  let filenames: string[];
  try {
    filenames = await readdir(postsDirectory);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    filenames
      .filter((filename) => markdownFilePattern.test(filename))
      .map(async (filename) => {
        const raw = await readFile(path.join(postsDirectory, filename), "utf8");
        return parsePost(raw, filename.replace(markdownFilePattern, ""));
      })
  );

  return posts
    .filter((post): post is JournalPost => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getJournalPost(
  slug: string
): Promise<JournalPost | null> {
  if (!slugPattern.test(slug)) {
    return null;
  }
  try {
    const raw = await readFile(path.join(postsDirectory, `${slug}.md`), "utf8");
    return parsePost(raw, slug);
  } catch {
    return null;
  }
}

function parsePost(raw: string, slug: string): JournalPost | null {
  const match = raw.match(frontmatterPattern);
  if (!match) {
    return null;
  }

  const fields: Record<string, string> = {};
  for (const line of match[1].split(newlinePattern)) {
    const field = line.match(fieldPattern);
    if (field) {
      fields[field[1]] = field[2].replace(quotePattern, "$2");
    }
  }

  if (
    fields.published !== "true" ||
    !fields.title ||
    !fields.date ||
    !fields.description
  ) {
    return null;
  }
  return {
    slug,
    title: fields.title,
    date: fields.date,
    description: fields.description,
    body: match[2].trim(),
  };
}
