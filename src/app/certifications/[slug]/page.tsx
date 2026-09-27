import { notFound } from "next/navigation";
import { certifications, getCertification } from "@/lib/portfolio";
import { CertificationDetail } from "@/components/CertificationDetail";

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

  return <CertificationDetail slug={slug} />;
}
