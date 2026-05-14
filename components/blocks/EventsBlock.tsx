import { EventsBlockData, getEvents } from "@/lib/api";
import EventsList from "@/components/EventsList";

export async function EventsBlock({ data }: { data: EventsBlockData }) {
  const allEvents = await getEvents();

  return (
    <section className="bg-sir-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display font-bold text-4xl text-sir-black mb-12">
          {data.heading}
        </h2>

        <EventsList allEvents={allEvents} initialCount={data.count ?? 3} />
      </div>
    </section>
  );
}
