import Image from "next/image";

export const metadata = {
  title: "Why FlowMetrics is the Future of B2B Analytics",
  description: "Discover how FlowMetrics transforms B2B data analytics with AI-powered insights",
  openGraph: {
    title: "Why FlowMetrics is the Future of B2B Analytics",
    description: "Discover how FlowMetrics transforms B2B data analytics with AI-powered insights",
    images: [
      {
        url: "https://seo-sandbox-target.vercel.app/blog-image.png",
        width: 1200,
        height: 630,
        alt: "Why FlowMetrics is the Future of B2B Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why FlowMetrics is the Future of B2B Analytics",
    description: "Discover how FlowMetrics transforms B2B data analytics with AI-powered insights",
    images: ["https://seo-sandbox-target.vercel.app/blog-image.png"],
  },
};

export default function BlogPost() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl mx-4 py-12 px-6 sm:px-8">
        <nav className="mb-8" aria-label="Main navigation">
          <ul className="flex flex-col sm:flex-row gap-4">
            <li>
              <a
                href="/"
                className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-indigo-600 dark:text-indigo-400 font-medium transition-colors border-b-2 border-indigo-600 after:w-0 after-content-[''] after:block after:transition-after"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <article className="prose dark:prose-inmax max-w-none">
          <header className="mb-8">
            <time dateTime="2024-01-15" className="text-zinc-500 dark:text-zinc-400 text-sm">
              Jan 15, 2024
            </time>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 mb-4">
              Why FlowMetrics is the Future of B2B Analytics
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Discover how FlowMetrics transforms B2B data analytics with AI-powered insights
            </p>
          </header>

          <div dangerouslySetInnerHTML={{ __html: `<p>FlowMetrics helps B2B companies unlock the full potential of their data. Our platform combines AI-powered analysis with intuitive dashboards to provide actionable insights that drive growth.</p><h2>Key Benefits</h2><ul><li><strong>AI-Powered Insights</strong>: Automatic pattern detection and predictive analytics</li><li><strong>Unified Data View</strong>: Consolidate data from across your tech stack in one place</li><li><strong>Real-Time Analytics</strong>: Stay on top of trends as they happen</li><li><strong>Team Collaboration</strong>: Share insights across your organization seamlessly</li></ul><p><strong>Getting Started</strong>: Sign up for a free trial and see how FlowMetrics can transform your B2B analytics today.</p>` }} />

          <footer className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Originally published Jan 15, 2024
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}