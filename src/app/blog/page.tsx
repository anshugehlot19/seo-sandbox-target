export const metadata = {
  title: "Blog - FlowMetrics",
  description: "Read insightful articles about B2B SaaS analytics, growth strategies, and industry trends from FlowMetrics.",
};

export default function Blog() {
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

        <header className="mb-12">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            Blog
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Insights for B2B SaaS leaders
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Post 1 */}
          <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow dark:hover:bg-zinc-800">
            <div className="flex items-center gap-3 mb-3">
              <time
                className="text-zinc-500 dark:text-zinc-400 text-sm"
                dateTime="2024-01-15">
                Jan 15, 2024
              </time>
            </div>
            <h3 className="text-xl font-medium leading-tight tracking-tight text-black dark:text-zinc-50 group-hover:text-indigo-600 transition-colors">
              <a
                href="/blog/why-flowmetrics-is-the-future-of-b2b-analytics"
                className="no-underline"
              >
                Why FlowMetrics is the Future of B2B Analytics
              </a>
            </h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              Discover how FlowMetrics transforms B2B data analytics with AI-powered insights
            </p>
          </article>

          {/* Post 2 */}
          <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow dark:hover:bg-zinc-800">
            <div className="flex items-center gap-3 mb-3">
              <time
                className="text-zinc-500 dark:text-zinc-400 text-sm"
                dateTime="2024-02-20">
                Feb 20, 2024
              </time>
            </div>
            <h3 className="text-xl font-medium leading-tight tracking-tight text-black dark:text-zinc-50 group-hover:text-indigo-600 transition-colors">
              <a
                href="/blog/5-kpis-every-b2b-saas-company-should-track"
                className="no-underline"
              >
                5 KPIs Every B2B SaaS Company Should Track
              </a>
            </h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              The essential metrics that drive growth and investor confidence in B2B SaaS
            </p>
          </article>

          {/* Post 3 */}
          <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow dark:hover:bg-zinc-800">
            <div className="flex items-center gap-3 mb-3">
              <time
                className="text-zinc-500 dark:text-zinc-400 text-sm"
                dateTime="2024-03-10">
                Mar 10, 2024
              </time>
            </div>
            <h3 className="text-xl font-medium leading-tight tracking-tight text-black dark:text-zinc-50 group-hover:text-indigo-600 transition-colors">
              <a
                href="/blog/integrating-flowmetrics-with-your-existing-stack"
                className="no-underline"
              >
                Integrating FlowMetrics with Your Existing Stack
              </a>
            </h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              A step-by-step guide to integrating FlowMetrics with your current B2B technology stack
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}