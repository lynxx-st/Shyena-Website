import type { ReactNode } from "react";

const lineBreakPattern = /\r?\n/;
const headingPattern = /^(#{2,3})\s+(.+)$/;
const bulletPattern = /^[-*]\s+(.+)$/;
const orderedPattern = /^\d+[.)]\s+(.+)$/;
const quotePattern = /^>\s?(.*)$/;
const inlinePattern =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*/g;

export function Markdown({ source }: { source: string }) {
  const lines = source.split(lineBreakPattern);
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let orderedList: string[] = [];
  let quote: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push(
        <p key={`p-${blocks.length}`}>{inline(paragraph.join(" "))}</p>
      );
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push(
        <ul key={`ul-${blocks.length}`}>
          {list.map((item) => (
            <li key={item}>{inline(item)}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };
  const flushOrderedList = () => {
    if (orderedList.length) {
      blocks.push(
        <ol key={`ol-${blocks.length}`}>
          {orderedList.map((item) => (
            <li key={item}>{inline(item)}</li>
          ))}
        </ol>
      );
      orderedList = [];
    }
  };
  const flushQuote = () => {
    if (quote.length) {
      blocks.push(
        <blockquote key={`quote-${blocks.length}`}>
          <p>{inline(quote.join(" "))}</p>
        </blockquote>
      );
      quote = [];
    }
  };
  const flushBlocks = () => {
    flushParagraph();
    flushList();
    flushOrderedList();
    flushQuote();
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBlocks();
      continue;
    }
    const heading = trimmed.match(headingPattern);
    if (heading) {
      flushBlocks();
      const title = inline(heading[2]);
      blocks.push(
        heading[1].length === 2 ? (
          <h2 key={`h2-${blocks.length}`}>{title}</h2>
        ) : (
          <h3 key={`h3-${blocks.length}`}>{title}</h3>
        )
      );
      continue;
    }
    const bullet = trimmed.match(bulletPattern);
    if (bullet) {
      flushParagraph();
      flushOrderedList();
      flushQuote();
      list.push(bullet[1]);
      continue;
    }
    const ordered = trimmed.match(orderedPattern);
    if (ordered) {
      flushParagraph();
      flushList();
      flushQuote();
      orderedList.push(ordered[1]);
      continue;
    }
    const quoted = trimmed.match(quotePattern);
    if (quoted) {
      flushParagraph();
      flushList();
      flushOrderedList();
      quote.push(quoted[1]);
      continue;
    }
    flushList();
    flushOrderedList();
    flushQuote();
    paragraph.push(trimmed);
  }
  flushBlocks();
  return <>{blocks}</>;
}

function inline(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(inlinePattern)) {
    const index = match.index ?? 0;
    if (index > cursor) {
      result.push(text.slice(cursor, index));
    }
    if (match[1] && match[2]) {
      result.push(
        <a
          href={match[2]}
          key={`link-${index}`}
          rel="noreferrer"
          target="_blank"
        >
          {match[1]}
        </a>
      );
    } else if (match[3]) {
      result.push(<strong key={`bold-${index}`}>{match[3]}</strong>);
    } else if (match[4]) {
      result.push(<code key={`code-${index}`}>{match[4]}</code>);
    } else if (match[5]) {
      result.push(<em key={`em-${index}`}>{match[5]}</em>);
    }
    cursor = index + match[0].length;
  }
  if (cursor < text.length) {
    result.push(text.slice(cursor));
  }
  return result;
}
