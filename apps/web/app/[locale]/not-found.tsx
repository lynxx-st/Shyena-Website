import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found container">
      <div className="eyebrow">404 · Page not found</div>
      <h1>This page isn’t here.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <p>
        <Link className="text-link" href="/">
          Return to the home page <span aria-hidden="true">→</span>
        </Link>
      </p>
    </main>
  );
}
