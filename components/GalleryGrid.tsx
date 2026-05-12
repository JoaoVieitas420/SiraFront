"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

type Foto = {
  id: string;
  url: string;
  legenda: string;
  data: string;
  facebook_url?: string | null;
};

export default function GalleryGrid({ fotos }: { fotos: Foto[] }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState<Foto | null>(null);

  const featured = fotos.slice(0, 3);
  const remaining = fotos.slice(3);

  return (
    <div>
      {/* Fotos em Destaque */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featured.map((foto, idx) => (
          <div 
            key={foto.id} 
            onClick={() => setSelectedFoto(foto)}
            className={`group relative overflow-hidden rounded-lg bg-sir-light shadow-sm cursor-pointer ${
              idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-video md:aspect-auto min-h-[300px]' : 'aspect-square'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={foto.url} 
              alt={foto.legenda} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-sir-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-sir-white font-medium mb-1">
                {foto.legenda}
              </p>
              <p className="text-sir-light/80 text-sm">
                {foto.data}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Resto das Fotos */}
      {showAll && remaining.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {remaining.map((foto) => (
            <div 
              key={foto.id} 
              onClick={() => setSelectedFoto(foto)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-sir-light shadow-sm cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={foto.url} 
                alt={foto.legenda} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-sir-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-sir-white font-medium mb-1">
                  {foto.legenda}
                </p>
                <p className="text-sir-light/80 text-sm">
                  {foto.data}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Botão Ver Todas */}
      {!showAll && remaining.length > 0 && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(true)}
            className="inline-flex items-center px-8 py-3 bg-sir-black text-sir-white font-semibold rounded-md hover:bg-sir-dark transition-colors"
          >
            Ver todas as fotos
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedFoto && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedFoto(null)}
        >
          <button 
            className="absolute top-6 right-6 text-sir-white hover:text-sir-medium transition-colors p-2"
            onClick={() => setSelectedFoto(null)}
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedFoto.url} 
              alt={selectedFoto.legenda} 
              className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
            />
            <div className="mt-6 text-center">
              <p className="text-sir-white text-lg font-medium">{selectedFoto.legenda}</p>
              <p className="text-sir-medium mt-1">{selectedFoto.data}</p>
              
              {selectedFoto.facebook_url && (
                <a 
                  href={selectedFoto.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-[#1877F2] text-white font-semibold rounded-md hover:bg-[#166fe5] transition-colors"
                >
                  <FaFacebook className="h-5 w-5" />
                  Ver no Facebook
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
