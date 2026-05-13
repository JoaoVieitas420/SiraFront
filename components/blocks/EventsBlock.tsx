import Link from "next/link";
import { EventsBlockData, getEvents } from "@/lib/api";
import { CalendarDays } from "lucide-react";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-PT", { day: "numeric", month: "short" });
}

export async function EventsBlock({ data }: { data: EventsBlockData }) {
  const allEvents = await getEvents();
  const events = allEvents.slice(0, data.count ?? 3);

  return (
    <section className="bg-sir-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl text-sir-black mb-12">
          {data.heading}
        </h2>

        <div className="flex flex-col gap-6 mb-12">
          {events.length > 0 ? (
            events.map((evento) => (
              <div
                key={evento.id}
                className="bg-sir-light rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row overflow-hidden"
              >
                <div className="bg-sir-black text-sir-white p-6 flex flex-col justify-center items-center min-w-[140px]">
                  <CalendarDays className="h-6 w-6 mb-2 text-sir-light/70" />
                  <span className="font-bold text-xl whitespace-nowrap uppercase">
                    {formatDate(evento.date)}
                  </span>
                  <span className="text-sir-light/80 text-sm mt-1">{evento.time}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-xl text-sir-black mb-2">
                    {evento.title}
                  </h3>
                  <p className="text-sir-medium">
                    {evento.description.substring(0, 120)}...
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sir-medium italic">
              Não existem eventos agendados de momento.
            </p>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/eventos"
            className="inline-flex px-8 py-3 bg-transparent text-sir-black font-semibold rounded-md border border-sir-dark hover:bg-sir-light transition-colors"
          >
            Ver Todos os Eventos
          </Link>
        </div>
      </div>
    </section>
  );
}
