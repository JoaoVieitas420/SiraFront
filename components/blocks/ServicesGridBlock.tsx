import { ServicesGridBlockData, getServices } from "@/lib/api";
import ServicesGridList from "./ServicesGridList";

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

        <ServicesGridList initialServices={services} />
      </div>
    </section>
  );
}
