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
      
      {/* Secção de Registo de Sócio */}
      <section className="bg-sir-light/10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-sir-black mb-4">Torne-se Sócio</h2>
            <p className="text-sir-medium text-lg max-w-2xl mx-auto">
              Junte-se à SIRA e faça parte da nossa comunidade. Preencha o formulário abaixo para se registar.
            </p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 w-full" style={{ minHeight: '750px' }}>
            <iframe 
              src="https://admin.sira.pt/login/registarsocio/" 
              className="w-full h-full"
              style={{ minHeight: '750px', border: 'none' }}
              title="Registo de Sócio"
            />
          </div>
        </div>
      </section>
    </>
  );
}
