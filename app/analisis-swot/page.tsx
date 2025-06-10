
'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, AlertTriangle, Shield, Zap } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export default function AnalisisSwotPage() {
  const swotTequesquitengo = {
    fortalezas: [
      'Ubicación privilegiada junto al lago con vistas panorámicas',
      'Servicio al cliente excepcional y personalizado',
      'Instalaciones modernas con altos estándares de limpieza',
      'Oferta gastronómica de calidad',
      'Ambiente tranquilo propicio para el descanso',
      'Calificación general 7.9/10 en Booking.com'
    ],
    debilidades: [
      'Percepción de valor por dinero subóptima (7.2/10)',
      'Porciones de comida percibidas como mínimas',
      'Deficiencias menores en comodidades de habitación',
      'Inventario limitado de 17 habitaciones',
      'Bajo volumen de reseñas (120 en Booking.com)'
    ],
    oportunidades: [
      'Demanda creciente de escapadas de fin de semana',
      'Auge del turismo de bienestar y naturaleza',
      'Eventos locales y actividades recreativas',
      'Diferenciación por consistencia vs competencia inconsistente',
      'Asociaciones con torneos de esquí acuático y acceso a celebridades'
    ],
    amenazas: [
      'Competencia intensa de Airbnb (670 propiedades)',
      'Estacionalidad y baja ocupación entre semana',
      'Conciencia limitada del destino Tequesquitengo',
      'Percepciones de seguridad regionales'
    ]
  };

  const swotAcapulco = {
    fortalezas: [
      'Posicionamiento de lujo desde el origen',
      'Diseño y amenidades contemporáneas de alta calidad',
      'ADR promedio alto (USD 300 en mercado)',
      'Servicio altamente personalizado',
      'Entrada estratégica en segmento de mayor crecimiento'
    ],
    debilidades: [
      'Marca nueva en mercado de lujo de Acapulco',
      'Inventario limitado (30 habitaciones)',
      'Altos costos operativos iniciales',
      'Dependencia inicial de OTAs'
    ],
    oportunidades: [
      'Mercado de lujo establecido y resiliente',
      'Demanda de eventos y bodas de alto nivel',
      'Turismo nacional e internacional afluente',
      'Diferenciación de grandes resorts por intimidad'
    ],
    amenazas: [
      'Competencia intensa de grandes resorts de lujo',
      'Percepciones de seguridad del destino',
      'Dependencia del transporte aéreo',
      'Airbnb Luxe (~100 propiedades)'
    ]
  };

  const SwotCard = ({ title, items, icon: Icon, colorClass, bgClass }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${bgClass} p-6 rounded-xl shadow-lg card-hover`}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 ${colorClass} rounded-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item: string, index: number) => (
          <li key={index} className="text-sm text-gray-700 flex items-start space-x-2">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Target}
            title="Análisis SWOT"
            subtitle="Evaluación Estratégica Integral"
            description="Análisis detallado de fortalezas, debilidades, oportunidades y amenazas para VLU Tequesquitengo y VLU Acapulco Diamante, identificando factores críticos para el éxito estratégico."
          />
        </div>
      </section>

      {/* VLU Tequesquitengo SWOT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              VLU Tequesquitengo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Santuario exclusivo junto al lago - Análisis estratégico para optimizar posicionamiento y operaciones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SwotCard
              title="Fortalezas"
              items={swotTequesquitengo.fortalezas}
              icon={Shield}
              colorClass="bg-green-500"
              bgClass="bg-green-50 border border-green-200"
            />
            <SwotCard
              title="Debilidades"
              items={swotTequesquitengo.debilidades}
              icon={AlertTriangle}
              colorClass="bg-red-500"
              bgClass="bg-red-50 border border-red-200"
            />
            <SwotCard
              title="Oportunidades"
              items={swotTequesquitengo.oportunidades}
              icon={TrendingUp}
              colorClass="bg-blue-500"
              bgClass="bg-blue-50 border border-blue-200"
            />
            <SwotCard
              title="Amenazas"
              items={swotTequesquitengo.amenazas}
              icon={Zap}
              colorClass="bg-orange-500"
              bgClass="bg-orange-50 border border-orange-200"
            />
          </div>
        </div>
      </section>

      {/* VLU Acapulco Diamante SWOT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              VLU Acapulco Diamante
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enclave íntimo de lujo mexicano - Estrategia para establecer liderazgo en el segmento premium.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SwotCard
              title="Fortalezas"
              items={swotAcapulco.fortalezas}
              icon={Shield}
              colorClass="bg-green-500"
              bgClass="bg-green-50 border border-green-200"
            />
            <SwotCard
              title="Debilidades"
              items={swotAcapulco.debilidades}
              icon={AlertTriangle}
              colorClass="bg-red-500"
              bgClass="bg-red-50 border border-red-200"
            />
            <SwotCard
              title="Oportunidades"
              items={swotAcapulco.oportunidades}
              icon={TrendingUp}
              colorClass="bg-blue-500"
              bgClass="bg-blue-50 border border-blue-200"
            />
            <SwotCard
              title="Amenazas"
              items={swotAcapulco.amenazas}
              icon={Zap}
              colorClass="bg-orange-500"
              bgClass="bg-orange-50 border border-orange-200"
            />
          </div>
        </div>
      </section>

      {/* Strategic Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Insights Estratégicos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conclusiones clave derivadas del análisis SWOT para orientar la toma de decisiones estratégicas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tequesquitengo Insights */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-vlu-primary mb-6">
                Estrategia Tequesquitengo
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Aprovechar Fortalezas</h4>
                  <p className="text-sm text-gray-600">
                    Capitalizar la ubicación única y el servicio excepcional para diferenciarse de Airbnb 
                    y posicionarse como la opción premium consistente en el lago.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Abordar Debilidades</h4>
                  <p className="text-sm text-gray-600">
                    Mejorar la percepción de valor por dinero optimizando porciones gastronómicas y 
                    comodidades de habitación para alcanzar calificación 8.0+.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Capturar Oportunidades</h4>
                  <p className="text-sm text-gray-600">
                    Desarrollar paquetes de bienestar y experiencias locales para capitalizar 
                    el crecimiento del turismo de naturaleza y escapadas de fin de semana.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Mitigar Amenazas</h4>
                  <p className="text-sm text-gray-600">
                    Implementar estrategias de marketing digital y programas de lealtad para 
                    competir efectivamente con Airbnb y reducir estacionalidad.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Acapulco Insights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-vlu-primary mb-6">
                Estrategia Acapulco Diamante
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Aprovechar Fortalezas</h4>
                  <p className="text-sm text-gray-600">
                    Utilizar el posicionamiento de lujo desde el origen y el diseño contemporáneo 
                    para establecer rápidamente credibilidad en el mercado premium.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Abordar Debilidades</h4>
                  <p className="text-sm text-gray-600">
                    Acelerar la construcción de marca a través de marketing estratégico y 
                    desarrollar canales directos para reducir dependencia de OTAs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Capturar Oportunidades</h4>
                  <p className="text-sm text-gray-600">
                    Enfocarse en el mercado de eventos y bodas de lujo, aprovechando la 
                    intimidad como diferenciador frente a grandes resorts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Mitigar Amenazas</h4>
                  <p className="text-sm text-gray-600">
                    Desarrollar alianzas estratégicas y comunicación proactiva sobre seguridad 
                    para competir efectivamente con resorts establecidos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Matrix */}
      <section className="py-20 bg-vlu-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold">
              Matriz de Acción Estratégica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-vlu-medium/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-vlu-turquoise mb-4">
                  Prioridades Inmediatas (0-6 meses)
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>• Optimización experiencia huésped Tequesquitengo</li>
                  <li>• Construcción marca acelerada Acapulco</li>
                  <li>• Desarrollo paquetes bienestar</li>
                  <li>• Estrategia proactiva reseñas</li>
                </ul>
              </div>
              <div className="bg-vlu-medium/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-vlu-turquoise mb-4">
                  Objetivos Mediano Plazo (6-18 meses)
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>• Activación eventos alto perfil</li>
                  <li>• Desarrollo mercado bodas lujo</li>
                  <li>• Programa ventas directas</li>
                  <li>• Curación experiencias exclusivas</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
