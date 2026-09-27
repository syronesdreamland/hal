import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { ProjectPreview } from "@/components/ProjectPreview";
import { certifications, profile, projects, skillGroups } from "@/lib/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <header className="border-b border-slate-200 bg-white/90 px-5 py-5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 sm:px-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-tight">
            {profile.name}
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Link href="#projects" className="hidden text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white sm:inline">
              Projects
            </Link>
            <Link href="#certifications" className="hidden text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white sm:inline">
              Certifications
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-white"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-white"
              aria-label="Open GitHub profile"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto grid max-w-6xl gap-12 px-5 py-10 sm:px-8 lg:py-14">
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_320px]">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-600" />
                {profile.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span>{profile.university}</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              {profile.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              >
                View Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="justify-self-start lg:justify-self-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:h-72 sm:w-72">
              <Image
                src="/foto.jpg"
                alt="Alif Muhammad Aditya"
                fill
                priority
                sizes="(min-width: 1024px) 288px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.title}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Icon className="h-4 w-4 text-cyan-600" />
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section id="projects" className="grid gap-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">
                <BriefcaseBusiness className="h-4 w-4" />
                Selected Work
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Projects & Experience</h2>
            </div>
            <span className="hidden text-sm text-slate-500 dark:text-slate-400 sm:block">
              Click a card for details
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                  <Card className="h-full overflow-hidden transition duration-200 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-lg dark:group-hover:border-slate-700">
                    <ProjectPreview tone={project.tone} title={project.title} compact />
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{project.type}</p>
                          <CardTitle className="mt-1 flex items-center gap-2 text-xl">
                            <Icon className="h-5 w-5 text-cyan-600" />
                            {project.title}
                          </CardTitle>
                        </div>
                        <ArrowUpRight className="mt-1 h-5 w-5 text-slate-400 transition group-hover:text-slate-950 dark:group-hover:text-white" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="certifications" className="grid gap-5">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-300">
              <Award className="h-4 w-4" />
              Proof of Learning
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Certifications</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {certifications.map((certification) => {
              const Icon = certification.icon;
              return (
                <Link
                  key={certification.slug}
                  href={`/certifications/${certification.slug}`}
                  className="group rounded-lg border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-slate-950 dark:text-white">{certification.title}</h3>
                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{certification.issuer}</p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-slate-950 dark:group-hover:text-white" />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{certification.detail}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Open to backend, cloud, and AI integration opportunities.
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Best fit: practical product teams that need reliable APIs and cloud-aware implementation.
              </p>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
    </div>
  );
}
