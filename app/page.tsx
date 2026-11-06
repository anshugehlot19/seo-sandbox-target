import Image from "next/image";

export const metadata = {
  title: "FlowMetrics - B2B SaaS Analytics Platform",
  description: "FlowMetrics helps B2B companies unlock the full potential of their data with AI-powered analytics, intuitive dashboards, and actionable insights that drive growth. Start your free trial today.",
  canonical: "https://seo-sandbox-target.vercel.app/",
  openGraph: {
    title: "FlowMetrics - B2B SaaS Analytics Platform",
    description: "FlowMetrics helps B2B companies unlock the full potential of their data with AI-powered analytics",
    images: [
      {
        url: "https://seo-sandbox-target.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlowMetrics - B2B SaaS Analytics Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowMetrics - B2B SaaS Analytics Platform",
    description: "FlowMetrics helps B2B companies unlock the full potential of their data with AI-powered analytics",
    images: ["https://seo-sandbox-target.vercel.app/og-image.png"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start sm:text-left">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/flowmetrics-logo.svg"
          alt="FlowMetrics"
          width={100}
          height={20}
          priority
        />
        <div className="mb-8 text-center">
          <h1 className="max-w-xs text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            FlowMetrics
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            AI-powered analytics for B2B companies. Turn data into growth.
          </p>
        </div>
        <div className="flex gap-3 justify-center sm:gap-4">
          <a
            href="#"
            className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-600 px-8 text-white font-medium transition-colors hover:bg-indigo-500"
          >
            Get Started
          </a>
          <a
            href="/pricing"
            className="flex h-12 w-full items-center justify-center rounded-full border border-indigo-600 px-8 text-indigo-600 font-medium transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-500"
          >
            View Pricing
          </a>
        </div>
      </main>
    </div>
  );
}