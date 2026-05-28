import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Sobre SIRA",
  description: "Conheça a história e missão da SIRA.",
};

export default async function Sobre() {
  const page = await getPage("sobre");

  if (!page) {
    notFound();
  }

  return (
    <>
      <BlockRenderer blocks={page.content} />
    </>
  );
}

