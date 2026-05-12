import { User } from "lucide-react";
import { getTeamMembers } from "@/lib/api";

export const metadata = {
  title: "Sobre | SIR Ancorense",
  description: "Conheça a história e missão da SIR Ancorense.",
};

export default async function Sobre() {
  const members = await getTeamMembers();

  return (
    <>
      {/* Header da Página */}
      <section className="bg-sir-black text-sir-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">
            Sobre a SIR Ancorense
          </h1>
          <p className="text-sir-medium text-lg max-w-2xl mx-auto">
            Conheça a nossa história e missão
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-sir-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Bloco 1 — A Nossa História */}
          <div>
            <h2 className="font-display font-bold text-3xl text-sir-black mb-6">
              A Nossa História
            </h2>
            <div className="text-sir-dark text-lg leading-relaxed space-y-4">
              <p>
                Fundada em 1974, a Sociedade de Instrução e Recreio Ancorense nasceu do desejo genuíno dos habitantes de Vila Praia de Âncora de criar um espaço dedicado ao convívio, à cultura e à preservação das tradições locais. Num período de grande efervescência social no país, a SIR Ancorense assumiu rapidamente um papel central na dinamização da vida comunitária.
              </p>
              <p>
                Ao longo de quase cinco décadas, as nossas instalações foram palco de incontáveis atuações musicais, peças de teatro memoráveis, bailes que atravessaram gerações e atividades educativas que enriqueceram a vida de centenas de ancorenses. Hoje, continuamos a honrar o legado dos nossos fundadores, adaptando as nossas atividades às necessidades do presente, mas sempre com os olhos postos nos valores que nos deram origem.
              </p>
            </div>
          </div>

          {/* Bloco 2 — A Nossa Missão */}
          <div>
            <h2 className="font-display font-bold text-3xl text-sir-black mb-6">
              A Nossa Missão
            </h2>
            <div className="text-sir-dark text-lg leading-relaxed space-y-4">
              <p>
                A nossa missão é promover o desenvolvimento cultural, educativo e recreativo de Vila Praia de Âncora e das freguesias vizinhas, oferecendo um espaço inclusivo onde pessoas de todas as idades podem aprender, partilhar experiências e celebrar a identidade local.
              </p>
              <p>
                Acreditamos que a cultura e o convívio são pilares essenciais para a coesão social, e trabalhamos diariamente para garantir que as tradições minhotas e ancorenses continuam vivas e vibrantes nas novas gerações.
              </p>
            </div>
          </div>

          {/* Bloco 4 — Valores */}
          <div>
            <h2 className="font-display font-bold text-3xl text-sir-black mb-6">
              Valores
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="bg-sir-light p-6 rounded-lg shadow-sm">
                <h3 className="font-display font-bold text-xl text-sir-black mb-2">Comunidade</h3>
                <p className="text-sir-dark">Valorizamos o bem comum e o desenvolvimento coletivo, fomentando o espírito de entreajuda.</p>
              </li>
              <li className="bg-sir-light p-6 rounded-lg shadow-sm">
                <h3 className="font-display font-bold text-xl text-sir-black mb-2">Cultura</h3>
                <p className="text-sir-dark">Preservamos e promovemos as tradições locais, a música, o teatro e as artes.</p>
              </li>
              <li className="bg-sir-light p-6 rounded-lg shadow-sm">
                <h3 className="font-display font-bold text-xl text-sir-black mb-2">Educação</h3>
                <p className="text-sir-dark">Investimos no enriquecimento cultural das pessoas através da aprendizagem contínua.</p>
              </li>
              <li className="bg-sir-light p-6 rounded-lg shadow-sm">
                <h3 className="font-display font-bold text-xl text-sir-black mb-2">Inclusão</h3>
                <p className="text-sir-dark">Abrimos as portas a todos os membros da comunidade, independentemente da sua origem ou idade.</p>
              </li>
            </ul>
          </div>

          {/* Bloco 5 — A Nossa Equipa */}
          <div className="pt-8">
            <h2 className="font-display font-bold text-3xl text-sir-black mb-6">
              A Nossa Equipa
            </h2>
            <p className="text-sir-dark text-lg mb-12 leading-relaxed">
              A SIR Ancorense é conduzida por um grupo de sócios apaixonados que doam o seu tempo e energia para manter a instituição ativa. A nossa equipa trabalha incansavelmente para organizar eventos, gerir as instalações e garantir que todos os associados se sentem em casa.
            </p>

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
                  Se tens interesse em ajudar a tua comunidade, aprender novas competências ou simplesmente fazer parte de uma equipa unida, convidamos-te a juntar-te a nós.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
