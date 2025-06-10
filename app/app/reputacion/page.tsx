
'use client';

import { motion } from 'framer-motion';
import { Award, Star, MessageCircle, TrendingUp, Users, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { AnimatedCounter } from '@/components/animated-counter';

export default function ReputacionPage() {
  const reputacionData = {
    calificacion_general: 7.9,
    calificacion_makemytrip: 4.0,
    volumen_resenas: 120,
    plataforma_principal: 'Booking.com'
  };

  const sentimientos = [
    { categoria: 'Ubicación', calificacion: 8.4, color: 'bg-green-500' },
    { categoria: 'Limpieza', calificacion: 8.4, color: 'bg-green-500' },
    { categoria: 'Servicio Personal', calificacion: 8.0, color: 'bg-blue-500' },
    { categoria: 'Instalaciones', calificacion: 7.9, color: 'bg-blue-500' },
    { categoria: 'Comida y Bebida', calificacion: 7.5, color: 'bg-yellow-500' },
    { categoria: 'Valor por Dinero', calificacion: 7.2, color: 'bg-orange-500' }
  ];

  const puntosElogio = [
    'Vista desde la habitación',
    'Tranquilidad del entorno',
    'Ubicación estratégica',
    'Personal muy amable y empático',
    'Instalaciones modernas y muy limpias',
    'Comida muy buena y sabrosa'
  ];

  const areasMejora = [
    'Valor por dinero (7.2/10)',
    'Porciones mínimas de comida',
    'Falta de sillas en habitaciones',
    'Problemas menores con regaderas'
  ];

  const palabrasClave = [
    'Vista', 'Tranquilidad', 'Amable', 'Limpio', 'Ubicación', 
    'Comida', 'Servicio', 'Habitación', 'Piscina', 'Descansar'
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Award}
            title="Reputación Digital"
            subtitle="Análisis de Sentimientos y Percepción"
            description="Evaluación integral de la reputación online de VLU Tequesquitengo basada en reseñas de huéspedes, identificando fortalezas percibidas y oportunidades de mejora."
          />
        </div>
      </section>

      {/* Overview Metrics */}
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
              Panorama de Reputación
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Métricas clave que reflejan la percepción actual de los huéspedes sobre VLU Tequesquitengo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center card-hover border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                <AnimatedCounter end={reputacionData.calificacion_general} suffix="/10" decimals={1} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Calificación General</h3>
              <p className="text-sm text-gray-600">Booking.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center card-hover border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={reputacionData.calificacion_makemytrip} suffix="/5" decimals={1} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">MakeMyTrip</h3>
              <p className="text-sm text-gray-600">Calificación alternativa</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center card-hover border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={reputacionData.volumen_resenas} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reseñas Totales</h3>
              <p className="text-sm text-gray-600">Volumen actual</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center card-hover border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">360+</div>
              <h3 className="font-semibold text-gray-900 mb-2">Meta 18 Meses</h3>
              <p className="text-sm text-gray-600">Objetivo reseñas</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentiment Analysis */}
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
              Análisis de Sentimientos por Categoría
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desglose detallado de las calificaciones por área de servicio, identificando fortalezas y oportunidades específicas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sentimientos.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{item.categoria}</h3>
                  <div className="text-2xl font-bold text-gray-900">
                    <AnimatedCounter end={item.calificacion} suffix="/10" decimals={1} />
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.calificacion / 10) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-3 rounded-full ${item.color}`}
                  ></motion.div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {item.calificacion >= 8.0 ? 'Excelente' : 
                   item.calificacion >= 7.5 ? 'Muy Bueno' : 
                   item.calificacion >= 7.0 ? 'Bueno' : 'Necesita Mejora'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Analysis */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Puntos de Elogio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-xl border border-green-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-500 rounded-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Puntos de Elogio</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Aspectos más valorados por los huéspedes según las reseñas analizadas.
              </p>
              <ul className="space-y-3">
                {puntosElogio.map((punto, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{punto}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Áreas de Mejora */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-orange-50 p-8 rounded-xl border border-orange-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Áreas de Mejora</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Oportunidades identificadas para optimizar la experiencia del huésped.
              </p>
              <ul className="space-y-3">
                {areasMejora.map((area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Keywords Cloud */}
      <section className="py-20 bg-vlu-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">
              Palabras Clave Más Frecuentes
            </h2>
            <p className="text-xl text-gray-200">
              Términos que los huéspedes utilizan con mayor frecuencia en sus reseñas
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {palabrasClave.map((palabra, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-vlu-turquoise/20 text-vlu-turquoise px-4 py-2 rounded-full text-sm font-medium border border-vlu-turquoise/30"
                >
                  {palabra}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Action Plan */}
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
              Plan de Acción para Reputación
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estrategias específicas para optimizar la reputación digital y alcanzar los objetivos de calificación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900">Optimización Valor</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Mejorar percepción valor por dinero de 7.2 a 8.0 mediante optimización de porciones gastronómicas y amenidades.
              </p>
              <div className="text-xs text-blue-600 font-medium">Meta: 0-6 meses</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900">Fomento Reseñas</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Triplicar volumen de reseñas de 120 a 360+ mediante estrategia proactiva de seguimiento post-estancia.
              </p>
              <div className="text-xs text-green-600 font-medium">Meta: 0-18 meses</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900">Calificación 8.5+</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Alcanzar calificación general de 8.5+ manteniendo fortalezas actuales y mejorando áreas identificadas.
              </p>
              <div className="text-xs text-purple-600 font-medium">Meta: 12-24 meses</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
