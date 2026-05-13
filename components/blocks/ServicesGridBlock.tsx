import Image from "next/image";
import { ServicesGridBlockData, getServices } from "@/lib/api";

export async function ServicesGridBlock({ data }: { data: ServicesGridBlockData }) {
  const services = await getServices();

  return (
    <section className="bg-sir-white py-20 border-t border-sir-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-4xl text-sir-black mb-4">
            {data.heading}
          </h2>
          {data.description && (
            <p className="text-sir-medium text-lg">{data.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-sir-light rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden bg-sir-black flex items-center justify-center">
                {service.image ? (
                  <Image
                    src={service.image_medium || `/storage/${service.image}`}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="p-8 text-center flex-1 flex flex-col justify-center">
                <h3 className="font-display font-bold text-2xl text-sir-black mb-4">
                  {service.title}
                </h3>
                <p className="text-sir-dark leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
