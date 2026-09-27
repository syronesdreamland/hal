import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/Badge";
import { certifications, getCertification } from "@/lib/portfolio";

type CertificationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return certifications.map((certification) => ({ slug: certification.slug }));
}

export async function generateMetadata({ params }: CertificationPageProps) {
  const { slug } = await params;
  const certification = getCertification(slug);

  if (!certification) {
    return {
      title: "Certification Not Found",
    };
  }

  return {
    title: `${certification.title} | Alif Muhammad Aditya`,
    description: certification.detail,
  };
}

export default async function CertificationPage({ params }: CertificationPageProps) {
  const { slug } = await params;
  const certification = getCertification(slug);

  if (!certification) {
    notFound();
  }

  const Icon = certification.icon;

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-8 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-8">
      <div className="mx-auto grid max-w-3xl gap-6">
        <Link
          href="/#certifications"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <section className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-300">
                Certification
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{certification.title}</h1>
              <p className="mt-2 text-slate-500 dark:text-slate-400">{certification.issuer}</p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300">{certification.detail}</p>

          <div className="mt-6 grid gap-3">
            {certification.skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-950">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span>{skill}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {certification.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>

          {certification.href ? (
            <a
              href={certification.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Open Credential Link
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </section>
      </div>
    </main>
  );
}
