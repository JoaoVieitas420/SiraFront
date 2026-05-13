import Link from "next/link";
import { CtaBlockData } from "@/lib/api";

export function CtaBlock({ data }: { data: CtaBlockData }) {
  return (
    <section className="bg-sir-black text-sir-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="font-display font-bold text-3xl mb-4">{data.title}</h2>
        {data.subtitle && (
          <p className="text-sir-medium text-lg max-w-2xl mb-8">{data.subtitle}</p>
        )}
        {data.btn_text && data.link && (
          <Link
            href={data.link}
            className="px-8 py-3 bg-sir-white text-sir-black font-semibold rounded-md hover:bg-sir-light transition-colors"
          >
            {data.btn_text}
          </Link>
        )}
      </div>
    </section>
  );
}
