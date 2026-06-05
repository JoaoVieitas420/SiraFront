"use client";

import { useState } from "react";

export default function NewsletterForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const response = await fetch(`${apiUrl}/newsletter/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage(result.message);
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setMessage(result.message || "Ocorreu um erro ao subscrever.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Erro de ligação ao servidor.");
        }
    }

    return (
        <div className="bg-sir-black text-sir-white py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-3xl font-display font-bold mb-4">Subscreva a nossa Newsletter</h3>
                <p className="text-sir-medium mb-8 text-lg">
                    Fique a par de todas as novidades, eventos e atividades da SIRAncorense.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="O seu email"
                        className="flex-grow px-6 py-4 bg-sir-dark border border-sir-medium/20 rounded-md text-sir-white outline-none focus:border-sir-white transition-all placeholder:text-sir-medium/50"
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-sir-white text-sir-black hover:bg-sir-light font-bold py-4 px-10 rounded-md transition-colors disabled:opacity-50 whitespace-nowrap uppercase tracking-wider text-sm"
                    >
                        {status === "loading" ? "A processar..." : "Subscrever"}
                    </button>
                </form>

                {status === "success" && (
                    <p className="mt-4 text-green-400 font-medium">{message}</p>
                )}

                {status === "error" && (
                    <p className="mt-4 text-red-400 font-medium">{message}</p>
                )}

                <p className="mt-4 text-xs text-gray-400">
                    Ao subscrever, aceita a nossa política de privacidade e o envio de comunicações.
                </p>
            </div>
        </div>
    );
}