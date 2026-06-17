"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="bg-sir-black text-sir-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

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