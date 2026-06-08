"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export function Footer() {
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
    <footer className="bg-sir-black text-sir-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-sir-dark">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-display font-bold mb-4">Subscreva a nossa Newsletter</h3>
            <p className="text-sir-medium mb-8 text-lg">
              Fique a par de todas as novidades, eventos e atividades da SIRA.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Info */}
          <div>
            <h2 className="font-display font-bold text-2xl mb-4">SIRA</h2>
            <p className="text-sir-medium leading-relaxed max-w-sm">
              Sociedade de Instrução e Recreio Ancorense, dedicada à cultura, música e recreação desde 1928.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-sir-light">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sir-medium hover:text-sir-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sir-medium hover:text-sir-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-sir-medium hover:text-sir-white transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-sir-medium hover:text-sir-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-sir-medium hover:text-sir-white transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-sir-medium hover:text-sir-white transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-sir-light">Contactos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sir-medium mr-3 mt-1 flex-shrink-0" />
                <span className="text-sir-medium">
                  Rua de São Sebastião 16<br />
                  4910-020 Âncora<br />
                  Caminha, Portugal
                </span>
              </li>
              <li className="flex items-center">
                <FaFacebook className="h-5 w-5 text-sir-medium mr-3 flex-shrink-0" />
                <a
                  href="https://www.facebook.com/SIRAncorense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sir-medium hover:text-sir-white transition-colors"
                >
                  Siga-nos no Facebook
                </a>
              </li>
              <li className="flex items-center">
                <FaInstagram className="h-5 w-5 text-sir-medium mr-3 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/s.i.r.a.1928/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sir-medium hover:text-sir-white transition-colors"
                >
                  Siga-nos no Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-sir-dark text-center">
          <p className="text-sir-medium text-sm">
            &copy; {new Date().getFullYear()} SIRA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}