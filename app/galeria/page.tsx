import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Galeria | SIR Ancorense",
  description: "Galeria de fotos das atividades da SIR Ancorense.",
};

export default async function Galeria() {
  const page = await getPage("galeria");

  if (!page) {
    notFound();
  }

  return (
    <>
      <BlockRenderer blocks={page.content} />
    </>
  );
}

