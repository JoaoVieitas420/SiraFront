import { PageBlock } from "@/lib/api";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { TextBlock } from "@/components/blocks/TextBlock";
import { ServicesGridBlock } from "@/components/blocks/ServicesGridBlock";
import { EventsBlock } from "@/components/blocks/EventsBlock";
import { CtaBlock } from "@/components/blocks/CtaBlock";
import { GalleryGridBlock } from "@/components/blocks/GalleryGridBlock";
import { TeamGridBlock } from "@/components/blocks/TeamGridBlock";
import { LatestPostsBlock } from "@/components/blocks/LatestPostsBlock";
import { InfoGridBlock } from "@/components/blocks/InfoGridBlock";
import { MapBlock } from "@/components/blocks/MapBlock";
import { InfoImageBlock } from "@/components/blocks/InfoImageBlock";
import { ContactFormBlock } from "@/components/blocks/ContactFormBlock";
import { InfoGridSocialBlock } from "@/components/blocks/InfoGridSocialBlock";


interface BlockRendererProps {
  blocks: PageBlock[];
}

export async function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="flex items-center justify-center py-32 text-sir-medium">
        <p>Esta página não tem conteúdo ainda.</p>
      </div>
    );
  }

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "hero":
            return <HeroBlock key={index} data={block.data} />;
          case "text":
            return <TextBlock key={index} data={block.data} />;
          case "services_grid":
            return <ServicesGridBlock key={index} data={block.data} />;
          case "events":
            return <EventsBlock key={index} data={block.data} />;
          case "cta":
            return <CtaBlock key={index} data={block.data} />;
          case "gallery_grid":
            return <GalleryGridBlock key={index} data={block.data} />;
          case "team_grid":
            return <TeamGridBlock key={index} data={block.data} />;
          case "latest_posts":
            return <LatestPostsBlock key={index} data={block.data} />;
          case "info_grid":
            return <InfoGridBlock key={index} data={block.data} />;
          case "info_grid_social":
            return <InfoGridSocialBlock key={index} data={block.data} />;
          case "map":
            return <MapBlock key={index} data={block.data} />;
          case "info_image":
            return <InfoImageBlock key={index} data={block.data} />;
          case "contact_form":
            return <ContactFormBlock key={index} data={block.data} />;
          default:
            return null;
        }

      })}
    </>
  );
}

