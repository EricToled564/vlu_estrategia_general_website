
'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Star, Compass, Palette, Heart, Award } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export default function PosicionamientoPage() {
  const arquitecturaPosicionamiento = {
    segmento_objetivo: 'Viajeros exigentes, nacionales e internacionales, que buscan experiencias boutique auténticas, personalizadas y de alta calidad',
    marco_diferenciacion: 'Diseño único, servicio excepcional, conexión profunda con destino',
    promesa_marca: 'Experiencias transformadoras que van más allá del alojamiento tradicional'
  };

  const pilaresPosicionamiento = [
    {
      pilar: 'Autenticidad Cultural',
      icon: Heart,
      descripcion: 'Conexión genuina con cultura local y tradiciones',
      manifestacion_tequesquitengo: 'Experiencias de Morelos, gastronomía local, artesanías tradicionales',
      manifestacion_acapulco: 'Arte contemporáneo mexicano, diseñadores locales, cultura costera',
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600'
    },
    {
      pilar: 'Servicio Excepcional',
      icon: Star,
      descripcion: 'Hospitalidad personalizada que anticipa necesidades',
      manifestacion_tequesquitengo: 'Servicio familiar cálido, atención personalizada',
      manifestacion_acapulco: 'Servicio de lujo sofisticado, mayordomo personal',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      pilar: 'Diseño Distintivo',
      icon: Palette,
      descripcion: 'Arquitectura y ambientes únicos que reflejan el destino',
      manifestacion_tequesquitengo: 'Integración con naturaleza del lago, diseño rústico-moderno',
      manifestacion_acapulco: 'Lujo contemporáneo, vistas al Pacífico, arquitectura vanguardista',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      pilar: 'Experiencias Curadas',
      icon: Compass,
      descripcion: 'Actividades y servicios cuidadosamente seleccionados',
      manifestacion_tequesquitengo: 'Bienestar, deportes acuáticos, inmersión cultural',
      manifestacion_acapulco: 'Experiencias de lujo, golf, eventos exclusivos',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    }
  ];

  const ventajaCompetitiva = {
    winning_edge: 'Lujo Consciente y Experiencial',
    descripcion: 'VLU lidera en el subsegmento emergente del "lujo consciente" - experiencias de lujo con propósito y atención plena',
    elementos_diferenciadores: [
      'Integración de prácticas sostenibilidad más allá del diseño ecológico',
      'Compromiso comunitario y abastecimiento local',
      'Curación profunda de experiencias de bienestar',
      'Servicio anticipatorio basado en datos',
      'Arquitectura de marca sofisticada que permite guía centralizada y autonomía local'
    ]
  };

  const fosoEstrategico = {
    tequesquitengo: [
      'Consistencia y calidad superior vs competencia inconsistente',
      'Valor percibido elevado a través de experiencias curadas',
      'Diferenciación clara de alternativas Airbnb',
      'Posicionamiento único como santuario exclusivo y epicentro eventos alto nivel'
    ],
    acapulco_diamante: [
      'Experiencia íntima y curada vs grandes resorts masificados',
      'Marca de lujo mexicano de vanguardia',
      'Hiper-personalización basada en datos',
      'Canales directos y ecosistema alianzas de lujo'
    ]
  };

  const posicionamientoDual = {
    tequesquitengo: 'Tu santuario exclusivo junto al lago para bienestar, recreación y experiencias auténticas de Morelos – un escape de fin de semana sin esfuerzo desde la ciudad',
    acapulco_diamante: 'Un enclave íntimo de lujo mexicano contemporáneo en Acapulco Diamante, ofreciendo experiencias hechas a medida, servicio sin igual y vistas impresionantes del Pacífico para el viajero exigente'
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Lightbulb}
            title="Estrategia de Posicionamiento"
            subtitle="Lujo Consciente y Experiencial"
            description="Estrategia integral de posicionamiento que establece a VLU como líder en el subsegmento emergente del lujo consciente, diferenciándose a través de experiencias auténticas, servicio excepcional y conexión profunda con el destino."
          />
        </div>
      </section>

      {/* Positioning Architecture */}
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
              Arquitectura de Posicionamiento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Marco estratégico que define nuestro segmento objetivo, diferenciación y promesa de marca.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Segmento Objetivo</h3>
              <p className="text-gray-600 leading-relaxed">
                {arquitecturaPosicionamiento.segmento_objetivo}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Compass className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marco de Diferenciación</h3>
              <p className="text-gray-600 leading-relaxed">
                {arquitecturaPosicionamiento.marco_diferenciacion}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Promesa de Marca</h3>
              <p className="text-gray-600 leading-relaxed">
                {arquitecturaPosicionamiento.promesa_marca}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Positioning Pillars */}
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
              Pilares de Posicionamiento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cuatro pilares fundamentales que sustentan nuestra propuesta de valor y se manifiestan 
              de manera única en cada propiedad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pilaresPosicionamiento.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${pilar.color} p-8 rounded-xl shadow-lg card-hover`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Icon className={`w-6 h-6 ${pilar.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{pilar.pilar}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {pilar.descripcion}
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">VLU Tequesquitengo</h4>
                      <p className="text-sm text-gray-700">{pilar.manifestacion_tequesquitengo}</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">VLU Acapulco Diamante</h4>
                      <p className="text-sm text-gray-700">{pilar.manifestacion_acapulco}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
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
              Ventaja Competitiva: {ventajaCompetitiva.winning_edge}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {ventajaCompetitiva.descripcion}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-vlu-primary to-vlu-medium p-8 rounded-xl text-white mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Elementos Diferenciadores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ventajaCompetitiva.elementos_diferenciadores.map((elemento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-vlu-turquoise rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200">{elemento}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Moat */}
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
              Foso Estratégico
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Barreras defensivas específicas para cada propiedad que protegen nuestra posición competitiva.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tequesquitengo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-vlu-primary mb-6">VLU Tequesquitengo</h3>
              <ul className="space-y-4">
                {fosoEstrategico.tequesquitengo.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-vlu-turquoise rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Acapulco Diamante */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-vlu-primary mb-6">VLU Acapulco Diamante</h3>
              <ul className="space-y-4">
                {fosoEstrategico.acapulco_diamante.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-vlu-turquoise rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Positioning */}
      <section className="py-20 bg-vlu-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Posicionamiento Dual
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mensajes de posicionamiento específicos que capturan la esencia única de cada propiedad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-vlu-medium/20 p-8 rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold text-vlu-turquoise mb-6">VLU Tequesquitengo</h3>
              <p className="text-lg text-gray-200 leading-relaxed italic">
                "{posicionamientoDual.tequesquitengo}"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-vlu-medium/20 p-8 rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold text-vlu-turquoise mb-6">VLU Acapulco Diamante</h3>
              <p className="text-lg text-gray-200 leading-relaxed italic">
                "{posicionamientoDual.acapulco_diamante}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
