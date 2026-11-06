export const GET = async () => {
  const baseUrl = "https://seo-sandbox-target.vercel.app";

  // Static pages
  const staticPages = [
    { url: "/", lastModified: new Date() },
    { url: "/pricing", lastModified: new Date() },
    { url: "/blog", lastModified: new Date() },
  ];

  // Blog posts
  const blogPosts = [
    { url: "/blog/why-flowmetrics-is-the-future-of-b2b-analytics", lastModified: new Date("2024-01-15") },
    { url: "/blog/5-kpis-every-b2b-saas-company-should-track", lastModified: new Date("2024-02-20") },
    { url: "/blog/integrating-flowmetrics-with-your-existing-stack", lastModified: new Date("2024-03-10") },
  ];

  const allItems = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allItems
    .map(
      (item) => `
    <url>
      <loc>${baseUrl}${item.url}</loc>
      <lastmod>${item.lastModified.toISOString().split("T")[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${item.url === "/" ? "1.0" : item.url === "/pricing" ? "0.8" : "0.5"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};