import { notFound } from "next/navigation";
import { getPage, getPages } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) return { title: "Página não encontrada" };

  return {
    title: `${page.title} — SIR Ancorense`,
    description: `Página ${page.title} do site SIR Ancorense`,
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      {/* @ts-expect-error async server component */}
      <BlockRenderer blocks={page.content} />
    </>
  );
}
