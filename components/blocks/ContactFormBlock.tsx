import ContactForm from "@/components/ContactForm";

interface ContactFormBlockProps {
    data: {
        heading?: string;
        description?: string;
    };
}

export function ContactFormBlock({ data }: ContactFormBlockProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-sir-dark mb-4">
                            {data.heading || "Envie-nos uma mensagem"}
                        </h2>
                        {data.description && (
                            <p className="text-lg text-sir-medium">
                                {data.description}
                            </p>
                        )}
                    </div>

                    <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}