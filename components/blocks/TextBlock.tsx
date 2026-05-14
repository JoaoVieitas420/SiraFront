import { TextBlockData } from "@/lib/api";

export function TextBlock({ data }: { data: TextBlockData }) {
  return (
    <section className="bg-sir-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="prose prose-xl md:prose-2xl max-w-none text-sir-dark leading-relaxed md:leading-loose text-lg md:text-xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-sir-black [&_h2]:text-3xl md:[&_h2]:text-4xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-sir-black [&_h3]:text-2xl md:[&_h3]:text-3xl [&_h3]:mt-8 [&_h3]:mb-4 [&_a]:text-sir-dark [&_a]:underline [&_p]:mb-6"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </section>
  );
}
