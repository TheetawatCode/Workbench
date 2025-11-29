// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function GET() {
  const paths = [
    "/",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
  ];

  const urls = paths
    .map(
      (path) =>
        `<url><loc>${SITE_URL}${path}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
