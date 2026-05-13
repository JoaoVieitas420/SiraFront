import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";
import { MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contactos | SIRAncorense",
  description: "Estamos aqui para responder às suas perguntas e convites.",
};

export default async function Contactos() {
  const page = await getPage("contactos");

  if (!page) {
    notFound();
  }

  // Filter out hero blocks from the CMS content if there's more than one.
  // We keep the original order of the blocks.
  let heroFound = false;
  const filteredContent = page.content.filter((block) => {
    if (block.type === 'hero') {
      if (heroFound) return false;
      heroFound = true;
    }
    return true;
  });

  return (
    <>
      <BlockRenderer blocks={filteredContent} />
    </>
  );
}
