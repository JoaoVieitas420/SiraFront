import { getServices, ServiceData } from "@/lib/api";

export const metadata = {
  title: "Secções | SIR Ancorense",
  description: "Conheça as várias secções e grupos da nossa Sociedade.",
};

export default async function SeccoesPage() {
  const seccoes: ServiceData[] = await getServices();

  return (
    <>
      {/* Header da Página */}
      <section className="bg-sir-black text-sir-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">
            Secções da Sociedade
          </h1>
          <p className="text-sir-medium text-lg max-w-2xl mx-auto">
            Os grupos e atividades que mantêm vivas as nossas tradições
          </p>
        </div>
      </section>

      {/* Lista de Secções */}
      <section className="bg-sir-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {seccoes.length > 0 ? (
              seccoes.map((seccao) => (
                <div
                  key={seccao.id}
                  className="bg-sir-white border border-sir-light rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  <div className="aspect-video w-full overflow-hidden bg-sir-black flex items-center justify-center">
                    {seccao.image ? (
                      <img
                        src={`/storage/${seccao.image}`}
                        alt={seccao.title}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="p-8">
                    <h2 className="font-display font-bold text-2xl text-sir-black mb-4">
                      {seccao.title}
                    </h2>
                    <p className="text-sir-dark text-lg leading-relaxed">
                      {seccao.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-sir-medium italic text-xl">Ainda não existem secções registadas.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sir-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-sir-black mb-6">
            Quer fazer parte de uma destas secções?
          </h2>
          <p className="text-sir-dark text-lg mb-8 leading-relaxed">
            Estamos sempre de portas abertas para novos membros. Quer seja para aprender música, participar no teatro ou ajudar na organização, a sua presença é bem-vinda.
          </p>
          <a
            href="/contactos"
            className="inline-flex px-8 py-3 bg-sir-black text-sir-white font-semibold rounded-md hover:bg-sir-dark transition-colors"
          >
            Contacte-nos para mais informações
          </a>
        </div>
      </section>
    </>
  );
}
