import { LucideIcon, MapPin, Clock, Phone, Mail, Info } from "lucide-react";

export interface InfoItem {
    title: string;
    content: string;
    icon?: string;
}

export interface InfoGridBlockData {
    items: InfoItem[];
}

const iconMap: Record<string, LucideIcon> = {
    map: MapPin,
    clock: Clock,
    phone: Phone,
    mail: Mail,
    info: Info,
};

export function InfoGridBlock({ data }: { data: InfoGridBlockData }) {
    return (
        <section className="bg-sir-white py-20 border-t border-sir-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 md:grid-cols-${Math.min(data.items.length, 3)} gap-12`}>
                    {data.items.map((item, index) => {
                        const IconComponent = item.icon ? iconMap[item.icon] || Info : Info;

                        return (
                            <div key={index} className="bg-sir-light p-8 rounded-lg h-full">
                                <div className="flex items-center mb-6">
                                    <IconComponent className="h-8 w-8 text-sir-black mr-4" />
                                    <h2 className="font-display font-bold text-2xl text-sir-black">{item.title}</h2>
                                </div>
                                <div
                                    className="text-sir-dark text-lg leading-relaxed whitespace-pre-line"
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}