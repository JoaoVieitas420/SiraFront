import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { getEvents, EventData } from "@/lib/api";

export const metadata = {
  title: "Eventos | SIR Ancorense",
  description: "Descubra as nossas próximas atividades e celebrações.",
};

export default async function Eventos() {
  const eventos: EventData[] = await getEvents();

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
            Eventos
          </h1>
          <p className="text-sir-medium text-lg max-w-2xl mx-auto">
            Descubra as nossas próximas atividades e celebrações
          </p>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="bg-sir-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-sir-black mb-10">
            Próximos Eventos
          </h2>

          <div className="flex flex-col gap-6">
            {eventos.map((evento) => (
              <div
                key={evento.id}
                className="bg-sir-white border border-sir-light rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row overflow-hidden"
              >
                <div className="bg-sir-black text-sir-white p-6 flex flex-col justify-center items-center min-w-[160px]">
                  <span className="font-bold text-xl text-center mb-1">{formatarData(evento.date)}</span>
                  <span className="text-sir-light/80 text-sm">{evento.time}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-display font-bold text-2xl text-sir-black">
                      {evento.title}
                    </h3>
                  </div>
                  <p className="text-sir-medium text-sm font-medium mb-3 uppercase tracking-wide">
                    {evento.location}
                  </p>
                  <p className="text-sir-dark leading-relaxed">
                    {evento.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secção Info */}
      <section className="bg-sir-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-sir-black mb-4">
            Fique Atualizado
          </h2>
          <p className="text-sir-dark text-lg mb-8 max-w-2xl mx-auto">
            Acompanhe a nossa página de Facebook para ter acesso às novidades mais recentes, alterações de horário e galerias de fotos dos nossos eventos.
          </p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-sir-black text-sir-white font-semibold rounded-md hover:bg-sir-dark transition-colors"
          >
            <FaFacebook className="mr-2 h-5 w-5" />
            Siga-nos no Facebook
          </a>
        </div>
      </section>
    </>
  );
}
