import type { ProjectTone } from "@/lib/portfolio";

type ProjectPreviewProps = {
  tone: ProjectTone;
  title: string;
  compact?: boolean;
};

const toneStyles: Record<ProjectTone, string> = {
  teal: "from-emerald-500 via-cyan-500 to-slate-900",
  blue: "from-sky-500 via-blue-600 to-slate-950",
  amber: "from-amber-400 via-orange-500 to-slate-900",
  violet: "from-violet-500 via-fuchsia-500 to-slate-950",
};

const lineStyles: Record<ProjectTone, string> = {
  teal: "bg-emerald-200/80",
  blue: "bg-sky-200/80",
  amber: "bg-amber-100/90",
  violet: "bg-violet-200/80",
};

export function ProjectPreview({ tone, title, compact = false }: ProjectPreviewProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${toneStyles[tone]} ${
        compact ? "h-36" : "h-64"
      }`}
      aria-label={`${title} project preview`}
    >
      <div className="absolute inset-x-4 top-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
      </div>

      <div className="absolute left-4 right-4 top-12 rounded-md border border-white/15 bg-white/12 p-3 shadow-2xl backdrop-blur-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-white/75" />
          <div className="h-5 w-14 rounded-full bg-white/20" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 space-y-2 rounded-md bg-slate-950/30 p-3">
            <div className={`h-2 rounded-full ${lineStyles[tone]}`} />
            <div className="h-2 w-3/4 rounded-full bg-white/35" />
            <div className="h-2 w-1/2 rounded-full bg-white/25" />
          </div>
          <div className="rounded-md bg-white/20 p-2">
            <div className="h-full min-h-14 rounded bg-slate-950/25" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
        <div className="h-12 rounded-md bg-white/18" />
        <div className="h-12 rounded-md bg-white/14" />
        <div className="h-12 rounded-md bg-white/10" />
      </div>
    </div>
  );
}
