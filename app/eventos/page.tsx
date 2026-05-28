import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Eventos | SIR Ancorense",
  description: "Descubra as nossas próximas atividades e celebrações.",
};

export default async function Eventos() {
  const page = await getPage("eventos");

  if (!page) {
    notFound();
  }

  return (
    <>
      <BlockRenderer blocks={page.content} />
    </>
  );
}
