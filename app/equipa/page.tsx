import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";

export const metadata = {
  title: "A Nossa Equipa | SIRAncorense",
  description: "Conheça a equipa dedicada da SIR Ancorense.",
};

export default async function Equipa() {
  const page = await getPage("equipa");

  if (!page) {
    notFound();
  }

  return (
    <>
      <BlockRenderer blocks={page.content} />
    </>
  );
}
