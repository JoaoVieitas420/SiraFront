import Link from "next/link";
import Image from "next/image";
import { MapPin, Music, Users, CalendarDays, ArrowRight } from "lucide-react";
import { getEvents, getServices, getPhotos, EventData, ServiceData, PhotoData } from "@/lib/api";

export default async function Home() {
  const eventos: EventData[] = await getEvents();
  const seccoes: ServiceData[] = await getServices();
  const fotosData: PhotoData[] = await getPhotos();

  const fotos = fotosData.slice(0, 3).map(foto => ({
    id: foto.id.toString(),
    url: `/storage/${foto.image}`,
    legenda: foto.legend || "Foto",
  }));

  const formatarDataSimples = (dataStr: string) => {
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' });
  };

  return (
    <>
      {/* Secção 1 — Hero */}
      <section
        className="relative text-sir-white py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/siraBg.jpg')" }}
      >
        <div className="absolute inset-0 bg-sir-black/60" aria-hidden="true"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            SIRAncorense
          </h1>
          <p className="text-sir-light text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Sociedade de Instrução e Recreio Ancorense — Uma instituição dedicada à cultura, música e recreação em Âncora desde 1974.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/sobre"
              className="px-8 py-3 bg-sir-white text-sir-black font-semibold rounded-md hover:bg-sir-light transition-colors"
            >
              Conheça a Nossa História
            </Link>
            <Link
              href="/contactos"
              className="px-8 py-3 bg-transparent text-sir-white font-semibold rounded-md border-2 border-sir-white hover:bg-white/10 transition-colors"
            >
              Contacte-nos
            </Link>
          </div>
        </div>
      </section>

      {/* Secção 2 — Sobre Nós (Preview) */}
      <section className="bg-sir-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl text-sir-black mb-6">
                Sobre Nós
              </h2>
              <p className="text-sir-medium text-lg mb-4 leading-relaxed">
                A Sociedade de Instrução e Recreio Ancorense é um pilar cultural na comunidade de Âncora. Há quase 50 anos que promovemos as tradições locais, a educação e o convívio saudável entre todas as gerações.
              </p>
              <p className="text-sir-medium text-lg mb-8 leading-relaxed">
                As nossas portas estão sempre abertas para quem quer aprender, ensinar ou simplesmente desfrutar de momentos de puro lazer em boa company.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center px-6 py-3 bg-transparent text-sir-black font-semibold rounded-md border border-sir-dark hover:bg-sir-light transition-colors"
              >
                Leia Mais Sobre a Nossa História
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-sir-light rounded-lg aspect-square flex items-center justify-center shadow-sm">
              <MapPin className="h-16 w-16 text-sir-medium" />
            </div>
          </div>
        </div>
      </section>

      {/* Secção — Secções (Antigos Serviços) */}
      <section className="bg-sir-white py-20 border-t border-sir-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl text-sir-black mb-4">
              Secções da Sociedade
            </h2>
            <p className="text-sir-medium text-lg">
              Conheça os grupos e atividades que dão vida à SIRAncorense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seccoes.map((seccao) => (
              <div key={seccao.id} className="bg-sir-light rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="aspect-video w-full overflow-hidden bg-sir-black flex items-center justify-center">
                  {seccao.image ? (
                    <Image
                      src={`/storage/${seccao.image}`}
                      alt={seccao.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="p-8 text-center flex-1 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-2xl text-sir-black mb-4">
                    {seccao.title}
                  </h3>
                  <p className="text-sir-dark leading-relaxed">
                    {seccao.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secção 3 — Galeria (Preview) */}
      <section className="bg-sir-light py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl text-sir-black mb-4">
              Galeria
            </h2>
            <p className="text-sir-medium text-lg">
              Momentos recentes das nossas atividades e celebrações em comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {fotos.map((foto) => (
              <div
                key={foto.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-sir-white shadow-sm cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={foto.url}
                  alt={foto.legenda}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-sir-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-sir-white font-medium mb-1">
                    {foto.legenda}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/galeria"
              className="inline-flex px-8 py-3 bg-sir-black text-sir-white font-semibold rounded-md hover:bg-sir-dark transition-colors"
            >
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>
      {/* Secção 4 — Próximos Eventos */}
      <section className="bg-sir-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl text-sir-black mb-12">
            Próximos Eventos
          </h2>

          <div className="flex flex-col gap-6 mb-12">
            {eventos.length > 0 ? (
              eventos.slice(0, 3).map((evento) => (
                <div key={evento.id} className="bg-sir-light rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row overflow-hidden">
                  <div className="bg-sir-black text-sir-white p-6 flex flex-col justify-center items-center min-w-[140px]">
                    <span className="font-bold text-xl whitespace-nowrap uppercase">{formatarDataSimples(evento.date)}</span>
                    <span className="text-sir-light/80 text-sm mt-1">{evento.time}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="font-display font-bold text-xl text-sir-black mb-2">
                      {evento.title}
                    </h3>
                    <p className="text-sir-medium">
                      {evento.description.substring(0, 120)}...
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sir-medium italic">Não existem eventos agendados de momento.</p>
            )}
          </div>

          <div className="text-center">
            <Link
              href="/eventos"
              className="inline-flex px-8 py-3 bg-transparent text-sir-black font-semibold rounded-md border border-sir-dark hover:bg-sir-light transition-colors"
            >
              Ver Todos os Eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Secção 5 — CTA */}
      <section className="bg-sir-black text-sir-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="font-display font-bold text-3xl mb-4">
            Faça Parte da Nossa Comunidade
          </h2>
          <p className="text-sir-medium text-lg max-w-2xl mb-8">
            Junte-se a nós para participar em atividades culturais e recreativas enriquecedoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contactos"
              className="px-8 py-3 bg-sir-white text-sir-black font-semibold rounded-md hover:bg-sir-light transition-colors"
            >
              Contacte-nos
            </Link>
            <a
              href="https://www.facebook.com/SIRAncorense"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent text-sir-white font-semibold rounded-md border border-sir-white hover:bg-white/10 transition-colors"
            >
              Visite-nos no Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
