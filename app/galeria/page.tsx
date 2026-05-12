import GalleryGrid from "@/components/GalleryGrid";
import { getPhotos } from "@/lib/api";

export const metadata = {
  title: "Galeria | SIR Ancorense",
  description: "Galeria de fotos das atividades da SIR Ancorense.",
};

export default async function Galeria() {
  const fotosData = await getPhotos();
  
  // Mapear os dados da API para o formato esperado pelo GalleryGrid
  const fotos = fotosData.map(foto => ({
    id: foto.id.toString(),
    url: `/storage/${foto.image}`,
    legenda: foto.legend || "Foto",
    data: foto.date || "",
    facebook_url: foto.facebook_url
  }));
  return (
    <>
      {/* Header da Página */}
      <section className="bg-sir-black text-sir-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">
            Galeria
          </h1>
          <p className="text-sir-medium text-lg max-w-2xl mx-auto">
            Momentos da nossa história e atividades recentes
          </p>
        </div>
      </section>

      {/* Grid de Fotos */}
      <section className="bg-sir-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <p className="text-sir-dark text-lg max-w-2xl mx-auto">
              Acompanhe os nossos eventos através desta galeria fotográfica, que futuramente será sincronizada de forma automática com a nossa página de Facebook.
            </p>
          </div>

          <GalleryGrid fotos={fotos} />

        </div>
      </section>
    </>
  );
}
