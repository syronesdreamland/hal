import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/Badge";
import { ProjectPreview } from "@/components/ProjectPreview";
import { getShowcase, projects, experience } from "@/lib/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...projects, ...experience].map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const item = getShowcase(slug);

  if (!item) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${item.title} | Alif Muhammad Aditya`,
    description: item.summary,
  };
}

export default async function ShowcasePage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const item = getShowcase(slug);

  if (!item) {
    notFound();
  }

  const Icon = item.icon;

  return (
    <main className="gradient-mesh min-h-screen bg-neutral-50 px-5 py-8 text-neutral-900 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-8">
        <Link
          href="/#projects"
          className="btn-secondary w-fit !px-4 !py-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <section className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <div className="animate-slide-up">
            <p className="label-tag w-fit bg-medical-green-light text-teal-800">{item.type}</p>
            <h1 className="mt-4 flex items-center gap-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              <Icon className="h-9 w-9 text-medical-green" />
              {item.title}
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-widest text-neutral-500">
              {item.role} · {item.period}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">{item.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>{item.role}</Badge>
              <Badge variant="outline">{item.period}</Badge>
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            {item.preview ? (
              <div className="relative h-64 overflow-hidden rounded-2xl border border-neutral-200/60 shadow-card sm:h-72">
                <Image
                  src={item.preview}
                  alt={`${item.title} preview`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <ProjectPreview tone={item.tone} title={item.title} />
            )}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="card-elevated p-6">
            <div className="section-divider mb-4" />
            <h2 className="font-serif text-2xl font-semibold">What I Built</h2>
            <p className="mt-4 leading-7 text-neutral-600">{item.outcome}</p>
            <div className="mt-6 grid gap-3">
              {item.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-sm leading-6 text-neutral-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-medical-green" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="card-elevated p-5">
              <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500">
                Snapshot
              </h2>
              <div className="mt-4 grid gap-3">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl bg-neutral-100/80 p-3">
                    <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                      {metric.label}
                    </p>
                    <p className="mt-1 font-serif font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                Open Live
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </aside>
        </section>
      </div>
    </main>
  );
}
