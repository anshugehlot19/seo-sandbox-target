import React from "react";

interface PostData {
  title: string;
  date: string;
  description: string;
  content: string;
}

const postsData: Record<string, PostData> = {
  "why-flowmetrics-is-the-future-of-b2b-analytics": {
    title: "Why FlowMetrics is the Future of B2B Analytics",
    date: "2024-01-15",
    description: "Discover how FlowMetrics transforms B2B data analytics with AI-powered insights",
    content: `<p>FlowMetrics helps B2B companies unlock the full potential of their data. Our platform combines AI-powered analysis with intuitive dashboards to provide actionable insights that drive growth.</p><h2>Key Benefits</h2><ul><li><strong>AI-Powered Insights</strong>: Automatic pattern detection and predictive analytics</li><li><strong>Unified Data View</strong>: Consolidate data from across your tech stack in one place</li><li><strong>Real-Time Analytics</strong>: Stay on top of trends as they happen</li><li><strong>Team Collaboration</strong>: Share insights across your organization seamlessly</li></ul><p><strong>Getting Started</strong>: Sign up for a free trial and see how FlowMetrics can transform your B2B analytics today.</p>`,
  },
  "5-kpis-every-b2b-saas-company-should-track": {
    title: "5 KPIs Every B2B SaaS Company Should Track",
    date: "2024-02-20",
    description: "The essential metrics that drive growth and investor confidence in B2B SaaS",
    content: `<p>Building a successful B2B SaaS company requires tracking the right metrics. Here are the five most critical KPIs that every founder and executive should monitor.</p><h2>1. Monthly Recurring Revenue (MRR)</h2><p>MRR is the lifeblood of any subscription business. It provides a predictable view of revenue streams and helps forecast future growth.</p><h2>2. Customer Acquisition Cost (CAC)</h2><p>Understanding how much it costs to acquire a new customer is essential for optimizing marketing spend and ensuring sustainable growth.</p><h2>3. Lifetime Value (LTV)</h2><p>LTV tells you how much revenue a customer will generate over their entire relationship with your company. The LTV/CAC ratio is a key indicator of business health.</p><h2>4. Churn Rate</h2><p>Churn measures the percentage of customers who cancel their subscription over a given period. High churn can signal product-market fit issues.</p><h2>5. Activation Rate</h2><p>The percentage of new users who experience the core value of your product within their first few days. Improving activation rate often has an immediate impact on retention and expansion.</p><p><strong>Conclusion</strong>: Focus on these five KPIs to build a data-driven culture and make informed decisions that drive sustainable B2B SaaS growth.</p>`,
  },
  "integrating-flowmetrics-with-your-existing-stack": {
    title: "Integrating FlowMetrics with Your Existing Stack",
    date: "2024-03-10",
    description: "A step-by-step guide to integrating FlowMetrics with your current B2B technology stack",
    content: `<p>Adding FlowMetrics to your B2B tech stack is seamless and non-disruptive. Follow this guide to get up and running in minutes.</p><h2>Step 1: Authentication</h2><p>Connect your identity provider using OAuth 2.0 or SAML for enterprise SSO.</p><h2>Step 2: API Integration</h2><p>Use our RESTful API or Webhook endpoints to sync data from your existing tools.</p><h2>Step 3: Dashboard Configuration</h2><p>Customize your dashboards to show the metrics that matter most to your team.</p><h2>Step 4: Team Onboarding</h2><p>Invite team members and set permission levels based on roles and responsibilities.</p><h2>Common Integrations</h2><ul><li><strong>CRM</strong>: Salesforce, HubSpot, Pipedrive</li><li><strong>Analytics</strong>: Google Analytics, Mixpanel, Amplitude</li><li><strong>Customer Success</strong>: Intercom, Zendesk, Freshdesk</li><li><strong>Payment</strong>: Stripe, Braintree, PayPal</li></ul><h2>Best Practices</h2><ul><li>Start with core metrics before onboarding additional data sources</li><li>Use webhooks for real-time updates on critical events</li><li>Set up automated reports to keep stakeholders informed</li><li>Regularly audit your data connections for accuracy</li></ul><p><strong>Conclusion</strong>: FlowMetrics integrates with over 50 popular B2B tools, making it easy to consolidate your data landscape and gain a unified view of your business health.</p>`,
  },
};

export const metadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = postsData[params.slug];

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: "https://seo-sandbox-target.vercel.app/blog-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://seo-sandbox-target.vercel.app/blog-image.png"],
    },
  };
};

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = postsData[params.slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  // Generate JSON-LD Article schema
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "FlowMetrics",
    },
    publisher: {
      "@type": "Organization",
      name: "FlowMetrics",
      logo: {
        "@type": "ImageObject",
        url: "https://seo-sandbox-target.vercel.app/favicon.ico",
        width: 512,
        height: 512,
      },
    },
    image: {
      "@type": "ImageObject",
      url: "https://seo-sandbox-target.vercel.app/blog-image.png",
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://seo-sandbox-target.vercel.app/blog/${params.slug}`,
    },
  };

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
            <time
              className="text-zinc-500 dark:text-zinc-400 text-sm"
              dateTime={post.date}>
              {post.date}
            </time>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 mb-4">
              {post.title}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {post.description}
            </p>
          </header>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          <footer className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Originally published {new Date(post.date).toLocaleDateString()}
            </p>
          </footer>
        </article>

        {/* JSON-LD Article Schema */}
        <script
          async
          type="application/ld+json"
        >
          {JSON.stringify(jsonLdData, null, 2)}
        </script>

        <div className="mt-12 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <nav className="flex gap-6 text-zinc-600 dark:text-zinc-400 text-sm">
            <a href="/blog" className="hover:text-indigo-600 transition-colors">
              ← Back to Blog
            </a>
            <a
              href="/"
              className="hover:text-indigo-600 transition-colors"
            >
              Home
            </a>
          </nav>
        </div>
      </main>
    </div>
  );
}