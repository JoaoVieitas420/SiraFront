"use client";

import { useState } from "react";
import { EventData, getResizedImageUrl } from "@/lib/api";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventsListProps {
    allEvents: EventData[];
    initialCount: number;
}

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-PT", { day: "numeric", month: "short" });
}

export default function EventsList({ allEvents, initialCount }: EventsListProps) {
    const [showAll, setShowAll] = useState(false);

    const events = showAll ? allEvents : allEvents.slice(0, initialCount);

    if (allEvents.length === 0) {
        return (
            <p className="text-sir-medium italic text-center">
                Não existem eventos agendados de momento.
            </p>
        );
    }

    return (
        <>
            <div className="flex flex-col gap-6 mb-12">
                {events.map((evento) => (
                    <Link
                        key={evento.id}
                        href={`/eventos/${evento.slug}`}
                        className="bg-sir-light rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 group"
                    >
                        <div className="relative bg-sir-black text-sir-white flex flex-col justify-center items-center min-w-[160px] min-h-[160px] overflow-hidden">
                            {evento.image ? (
                                <>
                                    <Image
                                        src={getResizedImageUrl(evento.image, 'medium')}
                                        alt={evento.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-sir-black/40 group-hover:bg-sir-black/20 transition-colors" />
                                </>
                            ) : (
                                <CalendarDays className="h-8 w-8 mb-2 text-sir-light/70 relative z-10" />
                            )}
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="font-bold text-xl whitespace-nowrap uppercase drop-shadow-md">
                                    {formatDate(evento.date)}
                                </span>
                                <span className="text-sir-light text-sm mt-1 font-medium drop-shadow-md">{evento.time}</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-center">
                            <h3 className="font-display font-bold text-xl text-sir-black mb-2 group-hover:text-sir-dark transition-colors">
                                {evento.title}
                            </h3>
                            <p className="text-sir-medium line-clamp-2">
                                {evento.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {!showAll && allEvents.length > initialCount && (
                <div className="text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="inline-flex px-8 py-3 bg-transparent text-sir-black font-semibold rounded-md border border-sir-dark hover:bg-sir-light transition-colors"
                    >
                        Ver Todos os Eventos
                    </button>
                </div>
            )}

            {showAll && allEvents.length > initialCount && (
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
