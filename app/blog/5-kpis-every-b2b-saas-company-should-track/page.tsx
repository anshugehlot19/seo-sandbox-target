import Image from "next/image";

export const metadata = {
  title: "5 KPIs Every B2B SaaS Company Should Track",
  description: "The essential metrics that drive growth and investor confidence in B2B SaaS",
  openGraph: {
    title: "5 KPIs Every B2B SaaS Company Should Track",
    description: "The essential metrics that drive growth and investor confidence in B2B SaaS",
    images: [
      {
        url: "https://seo-sandbox-target.vercel.app/blog-image.png",
        width: 1200,
        height: 630,
        alt: "5 KPIs Every B2B SaaS Company Should Track",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 KPIs Every B2B SaaS Company Should Track",
    description: "The essential metrics that drive growth and investor confidence in B2B SaaS",
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
            <time dateTime="2024-02-20" className="text-zinc-500 dark:text-zinc-400 text-sm">
              Feb 20, 2024
            </time>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 mb-4">
              5 KPIs Every B2B SaaS Company Should Track
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              The essential metrics that drive growth and investor confidence in B2B SaaS
            </p>
          </header>

          <div dangerouslySetInnerHTML={{ __html: `<p>Building a successful B2B SaaS company requires tracking the right metrics. Here are the five most critical KPIs that every founder and executive should monitor.</p><h2>1. Monthly Recurring Revenue (MRR)</h2><p>MRR is the lifeblood of any subscription business. It provides a predictable view of revenue streams and helps forecast future growth.</p><h2>2. Customer Acquisition Cost (CAC)</h2><p>Understanding how much it costs to acquire a new customer is essential for optimizing marketing spend and ensuring sustainable growth.</p><h2>3. Lifetime Value (LTV)</h2><p>LTV tells you how much revenue a customer will generate over their entire relationship with your company. The LTV/CAC ratio is a key indicator of business health.</p><h2>4. Churn Rate</h2><p>Churn measures the percentage of customers who cancel their subscription over a given period. High churn can signal product-market fit issues.</p><h2>5. Activation Rate</h2><p>The percentage of new users who experience the core value of your product within their first few days. Improving activation rate often has an immediate impact on retention and expansion.</p><p><strong>Conclusion</strong>: Focus on these five KPIs to build a data-driven culture and make informed decisions that drive sustainable B2B SaaS growth.</p>` }} />

          <footer className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Originally published Feb 20, 2024
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}