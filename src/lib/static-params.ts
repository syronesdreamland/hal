import { projects, experience } from "@/lib/portfolio";

export function generateStaticParams() {
  return [...projects, ...experience].map((item) => ({ slug: item.slug }));
}

export { certificationStaticParams } from "@/lib/cert-params";

