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
      <section
        className="relative text-sir-white py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/siraBg.jpg')" }}
      >
        <div className="absolute inset-0 bg-sir-black/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-start mb-12">
            <Link
              href="/noticias"
              className="inline-flex items-center px-6 py-2 bg-transparent text-sir-white font-semibold rounded-md border-2 border-sir-white hover:bg-white/10 transition-colors uppercase tracking-wider text-xs"
            >
              Voltar para as Notícias
            </Link>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
            {noticia.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sir-light/80">
            <span className="w-8 h-px bg-sir-light/30"></span>
            <p className="font-medium uppercase tracking-wider text-sm">
              {formatarData(noticia.published_at)}
            </p>
            <span className="w-8 h-px bg-sir-light/30"></span>
          </div>
        </div>
      </section>

      <section className="bg-sir-white py-20 flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-xl max-w-none text-sir-dark leading-relaxed">
            <div className="whitespace-pre-wrap font-sans">
              {noticia.content}
            </div>
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
