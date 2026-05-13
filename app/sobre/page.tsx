import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Sobre | SIR Ancorense",
  description: "Conheça a história e missão da SIR Ancorense.",
};

export default async function Sobre() {
  const page = await getPage("sobre");

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

