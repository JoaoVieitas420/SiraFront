import { LucideIcon, MapPin, Clock, Phone, Mail, Info } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export interface InfoGridSocialBlockData {
    info_title: string;
    info_content: string;
    info_icon?: string;
    social_title: string;
    social_content: string;
}

const iconMap: Record<string, LucideIcon> = {
    map: MapPin,
    clock: Clock,
    phone: Phone,
    mail: Mail,
    info: Info,
};

export function InfoGridSocialBlock({ data }: { data: InfoGridSocialBlockData }) {
    const IconComponent = data.info_icon ? iconMap[data.info_icon] || Info : Info;

    return (
        <section className="bg-sir-white py-20 border-t border-sir-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Block 1: Info */}
                    <div className="bg-sir-light p-8 rounded-lg h-full">
                        <div className="flex items-center mb-6">
                            <IconComponent className="h-8 w-8 text-sir-black mr-4 flex-shrink-0" />
                            <h2 className="font-display font-bold text-2xl text-sir-black">{data.info_title}</h2>
                        </div>
                        <div
                            className="text-sir-dark text-lg leading-relaxed whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: data.info_content }}
                        />
                    </div>

                    {/* Block 2: Social */}
                    <div className="bg-sir-light p-8 rounded-lg h-full">
                        <div className="flex items-center mb-6">
                            <h2 className="font-display font-bold text-2xl text-sir-black">{data.social_title || 'Redes Sociais'}</h2>
                        </div>
                        {data.social_content && (
                            <div
                                className="text-sir-dark text-lg leading-relaxed whitespace-pre-line mb-8"
                                dangerouslySetInnerHTML={{ __html: data.social_content }}
                            />
                        )}
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/SIRAncorense"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-sir-black text-sir-white p-4 rounded-full hover:bg-sir-dark transition-colors"
                            >
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/s.i.r.a.1928/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-sir-black text-sir-white p-4 rounded-full hover:bg-sir-dark transition-colors"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
