import { TextBlockData } from "@/lib/api";

export function TextBlock({ data }: { data: TextBlockData }) {
  return (
    <section className="bg-sir-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="prose prose-xl max-w-none text-sir-dark leading-relaxed [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-sir-black [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-sir-black [&_a]:text-sir-dark [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </section>
  );
}
