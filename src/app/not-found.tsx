import Link from "next/link";

export default function NotFound() {
  return (
    <main className="gradient-mesh flex min-h-screen items-center justify-center bg-neutral-50 px-5 text-neutral-900">
      <div className="max-w-md text-center">
        <p className="label-tag mx-auto w-fit bg-medical-green-light text-teal-800">Not found</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight">
          This page is not available.
        </h1>
        <p className="mt-3 text-neutral-600">
          The portfolio item may have moved or the link may be incomplete.
        </p>
        <Link href="/" className="btn-primary mt-7">
          Return home
        </Link>
      </div>
    </main>
  );
}
