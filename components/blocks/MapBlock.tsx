export interface MapBlockData {
    title?: string;
    embed_url: string;
}

export function MapBlock({ data }: { data: MapBlockData }) {
    return (
        <section className="bg-sir-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {data.title && (
                    <h2 className="font-display font-bold text-3xl text-sir-black mb-8 text-center">
                        {data.title}
                    </h2>
                )}
                <div className="rounded-lg overflow-hidden border border-sir-light shadow-sm aspect-video md:aspect-[21/9]">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={data.embed_url}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}