import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";

export default async function Home() {
  const page = await getPage("inicio");

  if (!page) {
    // Caso a página de início não exista, podemos mostrar um fallback ou 404
    return (
      <div className="flex items-center justify-center py-32 text-sir-medium">
        <p>A página inicial não foi encontrada.</p>
      </div>
    );
  }

  // Ensure the first block is always a Hero if it exists in the content,
  // or handle cases where the content might have been accidentally reordered in the CMS.
  return (
    <>
      <BlockRenderer blocks={page.content} />
    </>
  );
}
