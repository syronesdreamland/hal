import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-5 text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Not found
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page is not available.</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          The portfolio item may have moved or the link may be incomplete.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
