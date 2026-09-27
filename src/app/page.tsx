import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { TypingText } from "@/components/TypingText";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { certifications, experience, profile, projects, skillGroups } from "@/lib/portfolio";

export default function Home() {
  return (
    <div className="gradient-mesh min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/75 backdrop-blur-xl">
        <nav className="editorial-container flex items-center justify-between gap-4 py-4">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            {profile.shortName}
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Link href="#projects" className="hidden text-neutral-600 transition hover:text-medical-green sm:inline">
              Projects
            </Link>
            <Link href="#experience" className="hidden text-neutral-600 transition hover:text-medical-green sm:inline">
              Experience
            </Link>
            <Link href="#certifications" className="hidden text-neutral-600 transition hover:text-medical-green sm:inline">
              Certifications
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white/70 text-neutral-700 backdrop-blur transition hover:border-medical-green hover:text-medical-green"
              aria-label="Open GitHub profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white/70 text-neutral-700 backdrop-blur transition hover:border-medical-green hover:text-medical-green"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <main className="editorial-container grid gap-20 py-14 lg:py-20">
        {/* ── Hero ── */}
        <section className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
          <div className="animate-slide-up">
            <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-medical-green" />
                {profile.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>{profile.university}</span>
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-lg uppercase tracking-widest text-medical-green">
              {profile.title}
            </p>
            <div className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
              <TypingText texts={profile.typing} />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {profile.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-secondary">
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
              <Link href="#projects" className="btn-secondary">
                View Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="justify-self-start lg:justify-self-end">
            <div className="animate-float relative h-64 w-64 overflow-hidden rounded-2xl border border-white/60 shadow-card sm:h-72 sm:w-72">
              <Image
                src="/foto.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 288px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="card-elevated p-6">
                <div className="section-divider mb-4" />
                <h3 className="flex items-center gap-2 font-serif text-lg">
                  <Icon className="h-4 w-4 text-medical-green" />
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="grid scroll-mt-24 gap-8">
          <div className="grid gap-3">
            <p className="label-tag w-fit bg-medical-green-light text-teal-800">
              <FolderGit2 className="mr-2 h-3.5 w-3.5" />
              Selected Work
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-tight">Projects</h2>
            <p className="max-w-2xl text-body-md text-neutral-600">
              Shipped systems and products — several running live in production right now.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ShowcaseCard
                key={project.slug}
                item={project}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="grid scroll-mt-24 gap-8">
          <div className="grid gap-3">
            <p className="label-tag w-fit bg-medical-blue-light text-sky-800">
              <BriefcaseBusiness className="mr-2 h-3.5 w-3.5" />
              Experience
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-tight">
              Experience & Roles
            </h2>
            <p className="max-w-2xl text-body-md text-neutral-600">
              Capstones, internships, and production operations — from campus teams to real customers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <ShowcaseCard
                key={item.slug}
                item={item}
                href={`/projects/${item.slug}`}
              />
            ))}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section id="certifications" className="grid scroll-mt-24 gap-8">
          <div className="grid gap-3">
            <p className="label-tag w-fit bg-amber-100 text-amber-800">
              <Award className="mr-2 h-3.5 w-3.5" />
              Proof of Learning
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-tight">Certifications</h2>
            <p className="max-w-2xl text-body-md text-neutral-600">
              {certifications.length} certifications across cloud, networking, AI, and software
              engineering fundamentals.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certification) => {
              const Icon = certification.icon;
              return (
                <Link
                  key={certification.slug}
                  href={`/certifications/${certification.slug}`}
                  className="group card-elevated flex items-start gap-4 p-5 transition duration-200 hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-medical-green-light text-teal-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-lg font-semibold leading-snug">
                          {certification.title}
                        </h3>
                        <p className="mt-0.5 text-body-sm text-neutral-500">
                          {certification.issuer}
                          {certification.date ? ` · ${certification.date}` : ""}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400 transition group-hover:text-medical-green" />
                    </div>
                    <p className="mt-2.5 line-clamp-2 text-body-sm leading-6 text-neutral-600">
                      {certification.detail}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="card-elevated grid gap-5 p-7 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Sparkles className="h-5 w-5 text-medical-green" />
              Open to backend, cloud, and AI integration opportunities.
            </p>
            <p className="mt-1.5 text-body-sm text-neutral-500">
              Best fit: practical product teams that need reliable APIs and cloud-aware
              implementation.
            </p>
          </div>
          <a href={`mailto:${profile.email}`} className="btn-primary w-fit">
            Start a Conversation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <footer className="border-t border-neutral-200/60 py-8 text-center text-body-sm text-neutral-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
    </div>
  );
}
