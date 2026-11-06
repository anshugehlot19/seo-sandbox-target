export const GET = () => {
  const content = `
User-agent: *
Allow: /

# Sitemap
Sitemap: https://seo-sandbox-target.vercel.app/sitemap.xml

# Disallow admin and private routes
Disallow: /admin/
Disallow: /dashboard/

# Allow blog content
Allow: /blog/
Allow: /blog/*

Allow: /pricing

# Core Disallows
Disallow: /*.pdf$
Disallow: /*.jpg$
Disallow: /*.png$
Disallow: /*.css$
Disallow: /*.js$

# Remove script and style indexing
Host: seo-sandbox-target.vercel.app
`;
  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};