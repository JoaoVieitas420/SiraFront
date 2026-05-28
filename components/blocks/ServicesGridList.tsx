"use client";

import { useState } from "react";
import Image from "next/image";
import { ServiceData } from "@/lib/api";

interface ServicesGridListProps {
  initialServices: ServiceData[];
}

export default function ServicesGridList({ initialServices }: ServicesGridListProps) {
  const [showAll, setShowAll] = useState(false);

  const services = showAll ? initialServices : initialServices.slice(0, 3);

  if (initialServices.length === 0) {
    return (
      <p className="text-sir-medium italic text-center">
        Não existem secções de momento.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-sir-light rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="aspect-video w-full overflow-hidden bg-sir-black relative">
              {service.image ? (
                <Image
                  src={service.image_medium || `/storage/${service.image}`}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : null}
            </div>
            <div className="p-8 text-center flex-1 flex flex-col justify-center">
              <h3 className="font-display font-bold text-2xl text-sir-black mb-4 group-hover:text-sir-dark transition-colors">
                {service.title}
              </h3>
              <p className="text-sir-dark leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && initialServices.length > 3 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex px-8 py-3 bg-transparent text-sir-black font-semibold rounded-md border border-sir-dark hover:bg-sir-light transition-colors"
          >
            Ver Mais Secções
          </button>
        </div>
      )}

      {showAll && initialServices.length > 3 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex px-8 py-3 bg-transparent text-sir-black font-semibold rounded-md border border-sir-dark hover:bg-sir-light transition-colors"
          >
            Ver Menos
          </button>
        </div>
      )}
    </>
  );
}
