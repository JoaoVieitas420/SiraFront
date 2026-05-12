import Link from "next/link";
import { getPosts, PostData } from "@/lib/api";

export const metadata = {
  title: "Notícias | SIR Ancorense",
  description: "Acompanhe as novidades da SIR Ancorense.",
};

export default async function Noticias() {
  const noticias: PostData[] = await getPosts();

  const formatarData = (dataStr: string) => {
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <>
      {/* Header da Página */}
      <section className="bg-sir-black text-sir-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">
            Notícias
          </h1>
          <p className="text-sir-medium text-lg max-w-2xl mx-auto">
            Acompanhe as novidades da SIR Ancorense
          </p>
        </div>
      </section>

      {/* Lista de Posts */}
      <section className="bg-sir-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {noticias.map((noticia) => (
              <div 
                key={noticia.slug}
                className="bg-sir-white border border-sir-light rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                  <h2 className="font-display font-bold text-2xl text-sir-black">
                    <Link href={`/noticias/${noticia.slug}`} className="hover:text-sir-medium transition-colors">
                      {noticia.title}
                    </Link>
                  </h2>
                  <span className="text-sir-medium text-sm font-medium whitespace-nowrap">
                    {formatarData(noticia.published_at)}
                  </span>
                </div>
                <div className="text-sir-dark leading-relaxed">
                  <p>{noticia.summary || noticia.content.substring(0, 150) + '...'}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-sir-light">
                  <Link 
                    href={`/noticias/${noticia.slug}`} 
                    className="inline-flex text-sir-black font-semibold hover:text-sir-medium transition-colors"
                  >
                    Ler artigo completo &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
