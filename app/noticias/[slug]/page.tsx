import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, PostData } from "@/lib/api";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const noticia = await getPostBySlug(slug);
  
  if (!noticia) {
    return { title: "Notícia não encontrada | SIR Ancorense" };
  }

  return {
    title: `${noticia.title} | SIR Ancorense`,
    description: noticia.summary || noticia.content.substring(0, 150) + "...",
  };
}

export default async function NoticiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const noticia = await getPostBySlug(slug);

  if (!noticia) {
    notFound();
  }

  const formatarData = (dataStr: string) => {
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <>
      <section className="bg-sir-black text-sir-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/noticias" className="inline-flex items-center text-sir-medium hover:text-sir-white transition-colors mb-8">
            &larr; Voltar para as Notícias
          </Link>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
            {noticia.title}
          </h1>
          <p className="text-sir-medium font-medium">
            Publicado a {formatarData(noticia.published_at)}
          </p>
        </div>
      </section>

      <section className="bg-sir-white py-16 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none text-sir-dark">
            <div className="leading-relaxed whitespace-pre-wrap">
              {noticia.content}
            </div>
            {/* Poderíamos adicionar mais conteúdo aqui se as notícias fossem maiores (ex: imagem da notícia) */}
          </article>
        </div>
      </section>
    </>
  );
}
