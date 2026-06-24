import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/api";
import { HeroBlock } from "@/components/blocks/HeroBlock";

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const noticia = await getPostBySlug(slug);

  if (!noticia) {
    return { title: "Notícia não encontrada | SIR Ancorense" };
  }

  return {
    title: `${noticia.title} | SIR Ancorense`,
    description: noticia.summary || stripHtml(noticia.content).substring(0, 150) + "...",
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
      <HeroBlock
        title={noticia.title}
        subtitle={formatarData(noticia.published_at)}
      />

      <section className="bg-sir-white py-20 flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/noticias"
            className="inline-flex items-center text-sir-medium hover:text-sir-black transition-colors mb-8 font-semibold uppercase tracking-wider text-xs"
          >
            ← Voltar para as Notícias
          </Link>

          <article className="prose prose-xl max-w-none text-sir-dark leading-relaxed">
            <div 
              className="font-sans"
              dangerouslySetInnerHTML={{ __html: noticia.content }}
            />
          </article>

          <div className="mt-16 pt-8 border-t border-sir-light flex justify-center">
            <Link
              href="/noticias"
              className="px-8 py-3 bg-sir-black text-sir-white font-semibold rounded-md hover:bg-sir-dark transition-colors uppercase tracking-wider text-sm"
            >
              Ver mais notícias
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
