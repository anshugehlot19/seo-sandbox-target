export const metadata = {
  title: "Pricing - FlowMetrics",
  canonical: "/wrong-url",
};

export default function Pricing() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start sm:text-left">
        <div className="mb-8">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            Pricing
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-2xl">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 dark:bg-indigo-900 dark:border-indigo-800">
            <h3 className="text-xl font-medium text-indigo-600 dark:text-indigo-400">Pro</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">$49/month</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Up to 5 users</li>
              <li>✅ Basic analytics</li>
              <li>✅ Email support</li>
            </ul>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 dark:bg-indigo-900 dark:border-indigo-800">
            <h3 className="text-xl font-medium text-indigo-600 dark:text-indigo-400">Business</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">$149/month</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Unlimited users</li>
              <li>✅ Advanced analytics</li>
              <li>✅ Phone support</li>
              <li>✅ API access</li>
            </ul>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 dark:bg-indigo-900 dark:border-indigo-800">
            <h3 className="text-xl font-medium text-indigo-600 dark:text-indigo-400">Enterprise</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Custom pricing</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Everything in Business</li>
              <li>✅ Dedicated manager</li>
              <li>✅ Custom onboarding</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}