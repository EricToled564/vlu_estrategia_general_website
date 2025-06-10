
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  BarChart3,
  ArrowRight,
  Building2,
  Globe,
  Star
} from 'lucide-react';
import { AnimatedCounter } from '@/components/animated-counter';

export default function HomePage() {
  const strategicAreas = [
    {
      icon: BarChart3,
      title: 'Análisis de Mercado',
      description: 'TAM: USD 80.52M, TCAC 6.8% - Oportunidades de crecimiento en hotelería boutique',
      href: '/analisis-mercado',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Análisis SWOT',
      description: 'Evaluación estratégica completa para Tequesquitengo y Acapulco Diamante',
      href: '/analisis-swot',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Reputación Digital',
      description: 'Calificación 7.9/10 - Análisis de sentimientos y oportunidades de mejora',
      href: '/reputacion',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Segmentación',
      description: 'Personas detalladas y segmentos prioritarios para ambas propiedades',
      href: '/segmentacion',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Lightbulb,
      title: 'Posicionamiento',
      description: 'Estrategia "Lujo Consciente y Experiencial" - Ventaja competitiva diferenciadora',
      href: '/posicionamiento',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Target,
      title: 'Pilares Estratégicos',
      description: 'Cuatro pilares fundamentales con proyectos y cronogramas específicos',
      href: '/pilares-estrategicos',
      color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      iconColor: 'text-indigo-600'
    }
  ];

  const keyMetrics = [
    { value: 80.52, suffix: 'M', label: 'TAM Consolidado (USD)', prefix: '$' },
    { value: 6.8, suffix: '%', label: 'TCAC 2025-2030' },
    { value: 7.9, suffix: '/10', label: 'Calificación Actual' },
    { value: 47, suffix: '', label: 'Habitaciones Totales' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vlu-primary via-vlu-medium to-vlu-turquoise"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24">
                <Image
                  src="/vlu-logo.png"
                  alt="VLU Hospitality"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              VLU Hospitality
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-vlu-turquoise">
              Estrategia General y Análisis de Mercado
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Consolidándose como marca líder en hotelería boutique de lujo y experiencias auténticas en el dinámico mercado mexicano
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link
                href="/analisis-mercado"
                className="bg-white text-vlu-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Ver Análisis Completo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pilares-estrategicos"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-vlu-primary transition-all duration-300 flex items-center space-x-2"
              >
                <Target className="w-5 h-5" />
                <span>Pilares Estratégicos</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Métricas Clave del Mercado
            </h2>
            <p className="text-xl text-gray-600">
              Indicadores fundamentales que sustentan nuestra estrategia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center card-hover"
              >
                <div className="text-4xl font-bold text-vlu-primary mb-2">
                  <AnimatedCounter 
                    end={metric.value} 
                    prefix={metric.prefix || ''} 
                    suffix={metric.suffix}
                    decimals={metric.suffix === '%' ? 1 : (metric.value < 10 ? 1 : 0)}
                  />
                </div>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Áreas Estratégicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Análisis integral que abarca desde el mercado hasta la implementación de proyectos estratégicos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={area.href}>
                    <div className={`p-8 rounded-xl border-2 transition-all duration-300 card-hover h-full ${area.color}`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <Icon className={`w-6 h-6 ${area.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {area.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {area.description}
                      </p>
                      <div className="flex items-center text-gray-600 mt-4">
                        <span className="text-sm font-medium">Ver detalles</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Properties Overview */}
      <section className="py-20 bg-vlu-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Nuestras Propiedades
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dos destinos únicos con posicionamiento estratégico diferenciado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tequesquitengo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-vlu-medium/20 p-8 rounded-xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Building2 className="w-8 h-8 text-vlu-turquoise" />
                <h3 className="text-2xl font-bold">VLU Tequesquitengo</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Tu santuario exclusivo junto al lago para bienestar, recreación y experiencias auténticas de Morelos – un escape de fin de semana sin esfuerzo desde la ciudad.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-vlu-turquoise font-semibold">Habitaciones</p>
                  <p>17 habitaciones</p>
                </div>
                <div>
                  <p className="text-vlu-turquoise font-semibold">ADR Objetivo</p>
                  <p>USD $229</p>
                </div>
                <div>
                  <p className="text-vlu-turquoise font-semibold">Ocupación Meta</p>
                  <p>65%</p>
                </div>
                <div>
                  <p className="text-vlu-turquoise font-semibold">SOM</p>
                  <p>USD $0.922M</p>
                </div>
              </div>
            </motion.div>

            {/* Acapulco Diamante */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-vlu-medium/20 p-8 rounded-xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Building2 className="w-8 h-8 text-vlu-turquoise" />
                <h3 className="text-2xl font-bold">VLU Acapulco Diamante</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Un enclave íntimo de lujo mexicano contemporáneo en Acapulco Diamante, ofreciendo experiencias hechas a medida, servicio sin igual y vistas impresionantes del Pacífico.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-vlu-turquesa font-semibold">Habitaciones</p>
                  <p>30 habitaciones</p>
                </div>
                <div>
                  <p className="text-vlu-turquoise font-semibold">ADR Objetivo</p>
                  <p>USD $350</p>
                </div>
                <div>
                  <p className="text-vlu-turquoise font-semibold">Ocupación Meta</p>
                  <p>70%</p>
                </div>
                <div>
                  <p className="text-vlu-turquoise font-semibold">SOM</p>
                  <p>USD $2.68M</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-vlu-primary to-vlu-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Estrategia Integral para el Crecimiento
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Descubre cómo nuestra estrategia "Lujo Consciente y Experiencial" posiciona a VLU como líder en el mercado boutique mexicano
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/posicionamiento"
                className="bg-white text-vlu-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Lightbulb className="w-5 h-5" />
                <span>Ver Estrategia de Posicionamiento</span>
              </Link>
              <Link
                href="/pilares-estrategicos"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-vlu-primary transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Target className="w-5 h-5" />
                <span>Proyectos Estratégicos</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
