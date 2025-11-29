import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-semibold mb-2">
        404 - Page not found
      </h1>
      <p className="text-muted-foreground mb-6">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        Go back to the home page
      </Link>
    </main>
  );
}
