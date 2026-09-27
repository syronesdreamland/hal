import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { ProjectPreview } from "@/components/ProjectPreview";
import type { Showcase } from "@/lib/portfolio";

export function ShowcaseCard({ item, href }: { item: Showcase; href: string }) {
  const Icon = item.icon;
  return (
    <Link href={href} className="group block h-full">
      <Card className="card-elevated h-full overflow-hidden p-0">
        <div className="relative h-44 overflow-hidden sm:h-48">
          {item.preview ? (
            <>
              <Image
                src={item.preview}
                alt={`${item.title} preview`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/55 via-transparent to-transparent" />
            </>
          ) : (
            <ProjectPreview tone={item.tone} title={item.title} compact />
          )}
          <span className="label-tag absolute left-4 top-4 bg-white/85 text-neutral-800 backdrop-blur-sm dark:bg-neutral-900/80 dark:text-neutral-100">
            {item.type}
          </span>
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="mt-2 flex items-center gap-2 font-serif text-xl">
              <Icon className="h-5 w-5 text-medical-green" />
              {item.title}
            </CardTitle>
            <ArrowUpRight className="mt-2 h-5 w-5 text-neutral-400 transition group-hover:text-neutral-900 dark:group-hover:text-white" />
          </div>
          <p className="text-caption font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            {item.role} · {item.period}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="line-clamp-3 text-body-sm leading-6 text-neutral-600 dark:text-neutral-300">
            {item.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
