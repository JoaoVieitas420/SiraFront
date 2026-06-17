import GalleryGrid from "@/components/GalleryGrid";
import { FacebookGalleryGridBlockData } from "@/lib/api";
import { FaFacebook } from "react-icons/fa";

export async function FacebookGalleryGridBlock({ data }: { data: FacebookGalleryGridBlockData }) {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const token = process.env.FACEBOOK_ACCESS_TOKEN;
  const limit = data.limit || 24;

  if (!pageId || !token) {
    return (
      <section className="bg-sir-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-sir-black mb-6">
            {data.heading}
          </h2>
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Configuração em falta</h3>
            <p>
              A Galeria do Facebook precisa das credenciais da Meta configuradas nas variáveis de ambiente.
              Por favor, configure no seu servidor.
            </p>
          </div>
        </div>
      </section>
    );
  }

  let fotos = [];

  try {
    const url = `https://graph.facebook.com/v20.0/${pageId}/photos?type=uploaded&fields=id,images,name,created_time,link&access_token=${token}&limit=${limit}`;
    const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!res.ok) {
      throw new Error(`Facebook API responded with status ${res.status}`);
    }

    const json = await res.json();

    if (json.data && Array.isArray(json.data)) {
      fotos = json.data.map((foto: any) => {
        // Facebook returns an array of images with different sizes
        // We will try to pick a large one for the modal, a medium one for standard display, and a small one for grid
        const images = foto.images || [];
        // Sort images by width descending (largest first)
        images.sort((a: any, b: any) => b.width - a.width);

        const largest = images[0]?.source || "";
        const medium = images.find((i: any) => i.width <= 800)?.source || largest;
        const small = images.find((i: any) => i.width <= 400)?.source || medium;

        return {
          id: foto.id,
          url: largest,
          url_medium: medium,
          url_small: small,
          legenda: foto.name || "Foto do Facebook",
          data: foto.created_time || "",
          facebook_url: foto.link || `https://www.facebook.com/${pageId}`
        };
      });
    }
  } catch (error) {
    console.error("Error fetching Facebook photos:", error);
    return (
      <section className="bg-sir-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-sir-black mb-6">
            {data.heading}
          </h2>
          <div className="bg-red-50 border border-red-200 text-red-800 p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Erro de ligação</h3>
            <p>
              Não foi possível carregar as fotos do Facebook neste momento.
              Por favor, tente novamente mais tarde ou verifique se o Token expirou.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sir-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl text-sir-black mb-12 text-center">
          {data.heading}
        </h2>
        {fotos.length > 0 ? (
          <>
            <GalleryGrid fotos={fotos} />
            {data.facebook_url && (
              <div className="mt-12 text-center">
                <a
                  href={data.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
                >
                  <FaFacebook className="w-5 h-5 mr-2" />
                  Ver todas as fotos no Facebook
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-sir-medium">
            <p>Nenhuma foto encontrada na página do Facebook.</p>
          </div>
        )}
      </div>
    </section>
  );
}
