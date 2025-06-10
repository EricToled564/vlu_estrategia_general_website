
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-vlu-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/vlu-logo.png"
                  alt="VLU Hospitality"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">VLU Hospitality</h3>
                <p className="text-sm text-vlu-turquoise">Estrategia General</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Consolidándose como marca líder en hotelería boutique de lujo y experiencias auténticas en el dinámico mercado mexicano.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-vlu-turquoise">Estrategia</h4>
            <div className="space-y-2">
              <Link href="/analisis-mercado" className="block text-gray-300 hover:text-vlu-turquoise transition-colors text-sm">
                Análisis de Mercado
              </Link>
              <Link href="/analisis-swot" className="block text-gray-300 hover:text-vlu-turquoise transition-colors text-sm">
                Análisis SWOT
              </Link>
              <Link href="/segmentacion" className="block text-gray-300 hover:text-vlu-turquoise transition-colors text-sm">
                Segmentación
              </Link>
              <Link href="/pilares-estrategicos" className="block text-gray-300 hover:text-vlu-turquoise transition-colors text-sm">
                Pilares Estratégicos
              </Link>
            </div>
          </div>

          {/* Propiedades */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-vlu-turquoise">Propiedades</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-vlu-turquoise mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">VLU Tequesquitengo</p>
                  <p className="text-gray-300 text-xs">Santuario exclusivo junto al lago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-vlu-turquoise mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">VLU Acapulco Diamante</p>
                  <p className="text-gray-300 text-xs">Enclave íntimo de lujo mexicano</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-vlu-medium mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 VLU Hospitality. Estrategia General y Análisis de Mercado.
          </p>
        </div>
      </div>
    </footer>
  );
}
