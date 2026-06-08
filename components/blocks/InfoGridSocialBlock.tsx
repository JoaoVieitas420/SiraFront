import { LucideIcon, MapPin, Clock, Phone, Mail, Info, Share2 } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { InfoGridSocialBlockData } from "@/lib/api";

const iconMap: Record<string, LucideIcon> = {
    map: MapPin,
    clock: Clock,
    phone: Phone,
    mail: Mail,
    info: Info,
};

export function InfoGridSocialBlock({ data }: { data: InfoGridSocialBlockData }) {
    const InfoIcon = data.info_icon ? iconMap[data.info_icon] || Info : Info;

    return (
        <section className="bg-sir-white py-20 border-t border-sir-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Bloco 1: Informação (ex: Localização) */}
                    <div className="bg-sir-light p-8 rounded-lg h-full flex flex-col">
                        <div className="flex items-center mb-6">
                            <InfoIcon className="h-8 w-8 text-sir-black mr-4 flex-shrink-0" />
                            <h2 className="font-display font-bold text-2xl text-sir-black">{data.info_title}</h2>
                        </div>
                        <div
                            className="text-sir-dark text-lg leading-relaxed whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: data.info_content }}
                        />
                    </div>

                    {/* Bloco 2: Redes Sociais */}
                    <div className="bg-sir-light p-8 rounded-lg h-full flex flex-col">
                        <div className="flex items-center mb-6">
                            <Share2 className="h-8 w-8 text-sir-black mr-4 flex-shrink-0" />
                            <h2 className="font-display font-bold text-2xl text-sir-black">{data.social_title}</h2>
                        </div>
                        
                        {data.social_content && (
                            <div
                                className="text-sir-dark text-lg leading-relaxed whitespace-pre-line mb-8 flex-grow"
                                dangerouslySetInnerHTML={{ __html: data.social_content }}
                            />
                        )}

                        {/* Links Redes Sociais */}
                        <div className="flex flex-col gap-4 mt-auto text-sir-dark text-lg">
                            {data.facebook_url && (
                                <a
                                    href={data.facebook_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-sir-black transition-colors"
                                >
                                    <FaFacebook className="h-6 w-6" />
                                    <span className="font-medium">Facebook</span>
                                </a>
                            )}
                            {data.instagram_url && (
                                <a
                                    href={data.instagram_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-sir-black transition-colors"
                                >
                                    <FaInstagram className="h-6 w-6" />
                                    <span className="font-medium">Instagram</span>
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
