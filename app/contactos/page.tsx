import { MapPin, Clock, Send } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export const metadata = {
  title: "Contactos | SIRAncorense",
  description: "Estamos aqui para responder às suas perguntas e convites.",
};

export default function Contactos() {
  return (
    <>
      {/* Header da Página */}
      <section className="bg-sir-black text-sir-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">
            Contacte-nos
          </h1>
          <p className="text-sir-medium text-lg max-w-2xl mx-auto">
            Estamos aqui para responder às suas perguntas e convites
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="bg-sir-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

            {/* Grid de Info */}
            <div className="space-y-8">
              {/* Localização */}
              <div className="bg-sir-white border border-sir-light p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-sir-black mr-4" />
                  <h2 className="font-display font-bold text-2xl text-sir-black">Localização</h2>
                </div>
                <p className="text-sir-dark text-lg leading-relaxed ml-12">
                  Rua de São Sebastião 16<br />
                  4910-020 Âncora<br />
                  Caminha, Portugal
                </p>
              </div>

              {/* Redes Sociais */}
              <div className="bg-sir-white border border-sir-light p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <FaFacebook className="h-8 w-8 text-sir-black mr-4" />
                  <h2 className="font-display font-bold text-2xl text-sir-black">Redes Sociais</h2>
                </div>
                <p className="text-sir-dark text-lg leading-relaxed ml-12 mb-6">
                  Siga a nossa página oficial para novidades diárias e contacto direto com a nossa equipa.
                </p>
                <div className="ml-12">
                  <a
                    href="https://www.facebook.com/SIRAncorense"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-6 py-2 bg-transparent text-sir-black font-semibold rounded-md border border-sir-dark hover:bg-sir-light transition-colors"
                  >
                    Visite o Nosso Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Bloco Mensagem (Placeholder) */}
            <div className="bg-sir-light p-8 rounded-lg">
              <h2 className="font-display font-bold text-2xl text-sir-black mb-4">
                Envie-nos uma Mensagem
              </h2>
              <p className="text-sir-dark mb-8">
                De momento, a forma mais rápida de nos contactar é através da nossa página de Facebook. Se preferir, pode também deslocar-se às nossas instalações dentro do horário de atendimento.
              </p>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-md border border-sir-medium bg-sir-white text-sir-black focus:outline-none focus:ring-2 focus:ring-sir-black"
                  disabled
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border border-sir-medium bg-sir-white text-sir-black focus:outline-none focus:ring-2 focus:ring-sir-black"
                  disabled
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-sir-medium bg-sir-white text-sir-black focus:outline-none focus:ring-2 focus:ring-sir-black"
                  disabled
                ></textarea>
                <button
                  className="w-full flex items-center justify-center px-6 py-3 bg-sir-black text-sir-white font-semibold rounded-md hover:bg-sir-dark transition-colors"
                  disabled
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar (Em Breve)
                </button>
              </div>
            </div>

          </div>

          {/* Card Horário */}
          <div className="bg-sir-light p-8 rounded-lg mb-16 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center mb-6 lg:mb-0">
                <Clock className="h-10 w-10 text-sir-black mr-4" />
                <h2 className="font-display font-bold text-3xl text-sir-black">Horário de Atendimento</h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 text-sir-dark text-lg font-medium">
                <div>
                  <span className="block text-sir-medium text-sm mb-1 uppercase tracking-wide">Segunda a Sexta</span>
                  18:00 - 22:00
                </div>
                <div>
                  <span className="block text-sir-medium text-sm mb-1 uppercase tracking-wide">Sábado</span>
                  15:00 - 23:00
                </div>
                <div>
                  <span className="block text-sir-medium text-sm mb-1 uppercase tracking-wide">Domingo</span>
                  15:00 - 21:00
                </div>
              </div>
            </div>
            <p className="text-sir-medium text-sm mt-6 text-center lg:text-right italic">
              * Sujeito a alteração durante eventos especiais
            </p>
          </div>

          {/* Mapa Interativo */}
          <div className="bg-sir-light p-1 rounded-lg overflow-hidden shadow-sm border border-sir-light">
            <div className="w-full aspect-video md:aspect-[21/9] rounded-lg overflow-hidden bg-sir-medium/10">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1769.8998361719955!2d-8.847716350730526!3d41.79522191070156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25c78aa64c7d25%3A0xadfdc3396171e549!2sSIRA%20-%20Sociedade%20de%20Instru%C3%A7%C3%A3o%20e%20Recreio%20Ancorense!5e1!3m2!1spt-PT!2sus!4v1778582977717!5m2!1spt-PT!2sus"
              ></iframe>
            </div>
            <div className="bg-sir-white py-6 px-4 text-center">
              <h2 className="font-display font-bold text-2xl text-sir-black mb-2">
                Encontre-nos em Âncora
              </h2>
              <p className="text-sir-dark font-medium">
                Rua de São Sebastião 16, 4910-020 Âncora, Caminha, Portugal
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
