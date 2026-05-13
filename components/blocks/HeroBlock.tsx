import Link from "next/link";
import { HeroBlockData } from "@/lib/api";

export function HeroBlock({ data }: { data: HeroBlockData }) {
  return (
    <section
      className="relative text-sir-white py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/siraBg.jpg')" }}
    >
      <div className="absolute inset-0 bg-sir-black/60" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="text-sir-light text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {data.subtitle}
          </p>
        )}
        {(data.btn1_text || data.btn2_text) && (
          <div className="flex flex-col sm:flex-row gap-4">
            {data.btn1_text && data.btn1_link && (
              <Link
                href={data.btn1_link}
                className="px-8 py-3 bg-sir-white text-sir-black font-semibold rounded-md hover:bg-sir-light transition-colors"
              >
                {data.btn1_text}
              </Link>
            )}
            {data.btn2_text && data.btn2_link && (
              <Link
                href={data.btn2_link}
                className="px-8 py-3 bg-transparent text-sir-white font-semibold rounded-md border-2 border-sir-white hover:bg-white/10 transition-colors"
              >
                {data.btn2_text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
