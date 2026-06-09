import Image from "next/image";
import { getResizedImageUrl } from "@/lib/api";

export interface InfoImageBlockData {
    title: string;
    content: string;
    image: string;
    image_alt?: string;
}

export function InfoImageBlock({ data }: { data: InfoImageBlockData }) {
    const imageUrl = data.image.startsWith('http') ? data.image : `/storage/${data.image}`;

    return (
        <section className="bg-sir-white py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Text Content */}
                    <div className="bg-sir-light p-10 rounded-lg shadow-sm flex flex-col justify-center">
                        <h2 className="font-display font-bold text-3xl text-sir-black mb-6">
                            {data.title}
                        </h2>
                        <div
                            className="prose prose-lg text-sir-dark leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full rounded-lg overflow-hidden shadow-md">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={getResizedImageUrl(data.image, 'medium')}
                            alt={data.image_alt || data.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}