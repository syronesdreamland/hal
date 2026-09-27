import { notFound } from "next/navigation";
import { getShowcase, projects, experience } from "@/lib/portfolio";
import { ShowcaseDetail } from "@/components/ShowcaseDetail";

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

  return <ShowcaseDetail slug={slug} />;
}
