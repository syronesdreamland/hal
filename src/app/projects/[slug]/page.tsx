import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/Badge";
import { ProjectPreview } from "@/components/ProjectPreview";
import { getProject, projects } from "@/lib/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Alif Muhammad Aditya`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-8 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-8">
        <Link
          href="/#projects"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">
              {project.type}
            </p>
            <h1 className="mt-3 flex items-center gap-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              <Icon className="h-9 w-9 text-cyan-600" />
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>{project.role}</Badge>
              <Badge variant="outline">{project.period}</Badge>
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <ProjectPreview tone={project.tone} title={project.title} />
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold">What I Built</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.outcome}</p>
            <div className="mt-5 grid gap-3">
              {project.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Snapshot
              </h2>
              <div className="mt-4 grid gap-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-950">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </p>
                    <p className="mt-1 font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Open Related Link
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </aside>
        </section>
      </div>
    </main>
  );
}
