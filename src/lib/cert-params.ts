import { certifications } from "@/lib/portfolio";

export function certificationStaticParams() {
  return certifications.map((certification) => ({ slug: certification.slug }));
}
