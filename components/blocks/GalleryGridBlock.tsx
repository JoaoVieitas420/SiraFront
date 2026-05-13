import GalleryGrid from "@/components/GalleryGrid";
import { getPhotos, GalleryGridBlockData } from "@/lib/api";

export async function GalleryGridBlock({ data }: { data: GalleryGridBlockData }) {
  const fotosData = await getPhotos();
  
  const fotos = fotosData.map(foto => ({
    id: foto.id.toString(),
    url: `/storage/${foto.image}`,
    url_medium: foto.image_medium,
    url_small: foto.image_small,
    legenda: foto.legend || "Foto",
    data: foto.date || "",
    facebook_url: foto.facebook_url
  }));

  return (
    <section className="bg-sir-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl text-sir-black mb-12 text-center">
          {data.heading}
        </h2>
        <GalleryGrid fotos={fotos} />
      </div>
    </section>
  );
}
