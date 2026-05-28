import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Notícias | SIR Ancorense",
  description: "Acompanhe as novidades da SIR Ancorense.",
};

export default async function Noticias() {
  const page = await getPage("noticias");

  if (!page) {
    notFound();
  }

  return (
    <>
      <BlockRenderer blocks={page.content} />
    </>
  );
}

