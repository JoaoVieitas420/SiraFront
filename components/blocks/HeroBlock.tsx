import Link from "next/link";
import { ReactNode } from "react";
import { HeroBlockData } from "@/lib/api";

interface HeroBlockProps {
  data?: HeroBlockData;
  title?: string;
  subtitle?: string | ReactNode;
  backLink?: {
    href: string;
    label: string;
  };
  buttons?: {
    text: string;
    link: string;
    variant: "primary" | "outline";
  }[];
}

export function HeroBlock({ data, title, subtitle, backLink, buttons }: HeroBlockProps) {
  // Use data from CMS if provided, otherwise use direct props
  const displayTitle = title || data?.title || "";
  const displaySubtitle = subtitle || data?.subtitle;

  let displayButtons = buttons;
  if (!displayButtons && data) {
    displayButtons = [];
    if (data.btn1_text && data.btn1_link) {
      displayButtons.push({ text: data.btn1_text, link: data.btn1_link, variant: "primary" });
    }
    if (data.btn2_text && data.btn2_link) {
      displayButtons.push({ text: data.btn2_text, link: data.btn2_link, variant: "outline" });
    }
  }

  return (
    <section
      className="relative text-sir-white py-24 md:py-32 bg-cover bg-center min-h-[400px] md:min-h-[500px] flex items-center"
      style={{ backgroundImage: "url('/siraBg.jpg')" }}
    >
      <div className="absolute inset-0 bg-sir-black/70" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {backLink && (
          <div className="w-full flex justify-start mb-12">
            <Link
              href={backLink.href}
              className="inline-flex items-center px-6 py-2 bg-transparent text-sir-white font-semibold rounded-md border-2 border-sir-white hover:bg-white/10 transition-colors uppercase tracking-wider text-xs"
            >
              {backLink.label}
            </Link>
          </div>
        )}

        <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
          {displayTitle}
        </h1>

        {displaySubtitle && (
          <div className="flex items-center justify-center gap-4 text-sir-light/80 mb-10">
            {typeof displaySubtitle === "string" ? (
              <>
                <p className="font-medium uppercase tracking-wider text-sm">
                  {displaySubtitle}
                </p>
              </>
            ) : (
              displaySubtitle
            )}
          </div>
        )}

        {displayButtons && displayButtons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4">
            {displayButtons.map((btn, index) => (
              <Link
                key={index}
                href={btn.link}
                className={`px-8 py-3 font-semibold rounded-md transition-colors ${btn.variant === "primary"
                  ? "bg-sir-white text-sir-black hover:bg-sir-light"
                  : "bg-transparent text-sir-white border-2 border-sir-white hover:bg-white/10"
                  }`}
              >
                {btn.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
