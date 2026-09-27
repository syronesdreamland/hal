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
    <main className="gradient-mesh min-h-screen bg-neutral-50 px-5 py-8 text-neutral-900 sm:px-8">
      <div className="mx-auto grid max-w-3xl gap-6">
        <Link href="/#certifications" className="btn-secondary w-fit !px-4 !py-2 text-sm">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <section className="card-elevated p-7">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-medical-green-light text-teal-700">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <p className="label-tag w-fit bg-amber-100 text-amber-800">Certification</p>
              <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                {certification.title}
              </h1>
              <p className="mt-2 text-neutral-500">
                {certification.issuer}
                {certification.date ? ` · ${certification.date}` : ""}
              </p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-neutral-600">{certification.detail}</p>

          <div className="mt-6 grid gap-3">
            {certification.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-xl bg-neutral-100/80 p-3 text-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-medical-green" />
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
              className="btn-primary mt-7"
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
