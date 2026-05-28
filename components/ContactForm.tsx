"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
            const response = await fetch(`${apiUrl}/contact/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage(result.message);
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setMessage(result.message || "Ocorreu um erro ao enviar a mensagem.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Erro de ligação ao servidor.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-sir-black mb-2">
                    Nome Completo *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-sir-light border border-sir-medium/20 rounded-md focus:border-sir-black outline-none transition-all text-sir-black placeholder:text-sir-medium/50"
                    placeholder="O seu nome"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-sir-black mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-sir-light border border-sir-medium/20 rounded-md focus:border-sir-black outline-none transition-all text-sir-black placeholder:text-sir-medium/50"
                        placeholder="o-seu@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-sir-black mb-2">
                        Assunto
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 bg-sir-light border border-sir-medium/20 rounded-md focus:border-sir-black outline-none transition-all text-sir-black placeholder:text-sir-medium/50"
                        placeholder="Assunto da mensagem"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-sir-black mb-2">
                    Mensagem *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-sir-light border border-sir-medium/20 rounded-md focus:border-sir-black outline-none transition-all resize-none text-sir-black placeholder:text-sir-medium/50"
                    placeholder="Como podemos ajudar?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-sir-black text-sir-white font-bold py-4 px-8 rounded-md hover:bg-sir-dark transition-colors disabled:opacity-50 uppercase tracking-wider text-sm"
            >
                {status === "loading" ? "A enviar..." : "Enviar Mensagem"}
            </button>

            {status === "success" && (
                <div className="p-4 bg-green-100 text-green-700 rounded-md border border-green-200">
                    {message}
                </div>
            )}

            {status === "error" && (
                <div className="p-4 bg-red-100 text-red-700 rounded-md border border-red-200">
                    {message}
                </div>
            )}
        </form>
    );
}