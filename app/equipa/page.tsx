import { User } from "lucide-react";
import { getTeamMembers } from "@/lib/api";

export const metadata = {
  title: "A Nossa Equipa | SIRAncorense",
  description: "Conheça a equipa dedicada da SIR Ancorense.",
};

export default async function Equipa() {
  const members = await getTeamMembers();

  return (
    <>
      {/* Header da Página */}
      <section className="bg-sir-black text-sir-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">
            A Nossa Equipa
          </h1>
          <p className="text-sir-medium text-lg max-w-2xl mx-auto">
            Pessoas dedicadas ao sucesso da SIR Ancorense
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-sir-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-sir-dark text-lg text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            A SIR Ancorense é conduzida por um grupo de sócios apaixonados que doam o seu tempo e energia para manter a instituição ativa. A nossa equipa trabalha incansavelmente para organizar eventos, gerir as instalações e garantir que todos os associados se sentem em casa.
          </p>

          {/* Grid de Membros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
            {members.map((member) => (
              <div key={member.id} className="bg-sir-white border border-sir-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center pb-6 flex flex-col">
                <div className="w-full aspect-square bg-sir-light flex items-center justify-center mb-6 overflow-hidden">
                  {member.image ? (
                    <img
                      src={`/storage/${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-20 w-20 text-sir-medium" />
                  )}
                </div>
                <div className="px-4 flex-1">
                  <h3 className="font-display font-bold text-xl text-sir-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sir-medium font-medium mb-3">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bloco Voluntariado */}
          <div className="bg-sir-light rounded-lg p-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-sir-black mb-4">
              Voluntariado
            </h2>
            <div className="text-sir-dark text-lg leading-relaxed space-y-4">
              <p>
                A SIR Ancorense só consegue alcançar os seus objetivos graças ao esforço incansável dos nossos voluntários. Desde a preparação de salas para ensaios até à organização de grandes bailes, cada par de mãos conta.
              </p>
              <p>
                Se tens interesse em ajudar a tua comunidade, aprender novas competências ou simplesmente fazer parte de uma equipa unida, convidamos-te a juntar-te a nós. Fala connosco no próximo evento ou envia-nos uma mensagem!
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
