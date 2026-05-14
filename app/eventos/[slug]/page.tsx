import { getEventBySlug, getEvents } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Clock } from "lucide-react";

export async function generateStaticParams() {
    const events = await getEvents();
    return events.map((event) => ({
        slug: event.slug,
    }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = await getEventBySlug(slug);

    if (!event) {
        notFound();
    }

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("pt-PT", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <>
            {/* Hero Section - Matching News Style */}
            <section
                className="relative text-sir-white py-24 md:py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/siraBg.jpg')" }}
            >
                <div className="absolute inset-0 bg-sir-black/70" aria-hidden="true" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-start mb-12">
                        <Link
                            href="/eventos"
                            className="inline-flex items-center px-6 py-2 bg-transparent text-sir-white font-semibold rounded-md border-2 border-sir-white hover:bg-white/10 transition-colors uppercase tracking-wider text-xs"
                        >
                            Voltar para os Eventos
                        </Link>
                    </div>
                    <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
                        {event.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-sir-light/80">
                        <span className="w-8 h-px bg-sir-light/30"></span>
                        <p className="font-medium uppercase tracking-wider text-sm">
                            {event.category}
                        </p>
                        <span className="w-8 h-px bg-sir-light/30"></span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-sir-white py-20 flex-1">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            {/* Poster Display - Moved to top, clean style */}
                            {event.image && (
                                <div className="">
                                    <div className="relative aspect-[2/3] max-w-2xl mx-auto">
                                        <Image
                                            src={`/storage/${event.image}`}
                                            alt={`Cartaz de ${event.title}`}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>
                            )}

                            <article className="prose prose-xl max-w-none text-sir-dark leading-relaxed">
                                <h2 className="text-sir-black font-bold mb-8 uppercase text-sm tracking-[0.2em] border-b border-sir-light pb-4">
                                    Sobre o Evento
                                </h2>
                                <div className="whitespace-pre-wrap font-sans">
                                    {event.description}
                                </div>
                            </article>
                        </div>

                        {/* Sidebar Info */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32 bg-sir-light rounded-2xl p-8 md:p-10 shadow-sm border border-sir-dark/5">
                                <h3 className="font-display font-bold text-2xl text-sir-black mb-8">
                                    Detalhes
                                </h3>

                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="bg-sir-white p-3 rounded-xl shadow-sm mr-4">
                                            <CalendarDays className="h-6 w-6 text-sir-dark" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-sir-medium uppercase tracking-widest mb-1">Data</p>
                                            <p className="text-sir-black font-semibold text-lg">{formatDate(event.date)}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-sir-white p-3 rounded-xl shadow-sm mr-4">
                                            <Clock className="h-6 w-6 text-sir-dark" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-sir-medium uppercase tracking-widest mb-1">Hora</p>
                                            <p className="text-sir-black font-semibold text-lg">{event.time}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-sir-white p-3 rounded-xl shadow-sm mr-4">
                                            <MapPin className="h-6 w-6 text-sir-dark" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-sir-medium uppercase tracking-widest mb-1">Localização</p>
                                            <p className="text-sir-black font-semibold text-lg">{event.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-sir-dark/10">
                                    <Link
                                        href="/contactos"
                                        className="block w-full py-4 bg-sir-black text-sir-white text-center font-bold rounded-xl hover:bg-sir-dark transition-all uppercase tracking-widest text-sm shadow-lg hover:shadow-xl active:scale-[0.98]"
                                    >
                                        Pedir Informações
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}