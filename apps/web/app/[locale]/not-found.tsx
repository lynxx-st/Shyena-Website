import { Button } from "@repo/design-system/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found container">
      <div className="eyebrow">404 · Page not found</div>
      <h1>This page isn’t here.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <div className="not-found-actions">
        <Button asChild>
          <Link href="/">Return to the home page</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Shyena</Link>
        </Button>
      </div>
    </main>
  );
}
