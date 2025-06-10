
'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Globe, Target, DollarSign, Users } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { AnimatedCounter } from '@/components/animated-counter';

export default function AnalisisMercadoPage() {
  const marketData = [
    {
      metric: 'Valor del Mercado 2024',
      value: 1267.4,
      suffix: 'M',
      prefix: '$',
      description: 'Millones USD en hotelería boutique México'
    },
    {
      metric: 'Proyección 2030',
      value: 1868.5,
      suffix: 'M',
      prefix: '$',
      description: 'Crecimiento proyectado del mercado'
    },
    {
      metric: 'TCAC 2025-2030',
      value: 6.8,
      suffix: '%',
      description: 'Tasa de crecimiento anual compuesta'
    },
    {
      metric: 'Participación Global',
      value: 4.7,
      suffix: '%',
      description: 'México en mercado global boutique'
    }
  ];

  const tamSamSom = {
    consolidado: {
      tam: 80.52,
      sam: 24.56,
      som: 3.602
    },
    tequesquitengo: {
      tam: 42.46,
      sam: 7.43,
      som: 0.922,
      habitaciones: 17,
      adr: 229,
      ocupacion: 65
    },
    acapulco: {
      tam: 38.06,
      sam: 17.13,
      som: 2.68,
      habitaciones: 30,
      adr: 350,
      ocupacion: 70
    }
  };

  const tendencias = [
    {
      icon: Users,
      title: 'Viajes Experienciales y Autenticidad',
      description: 'Los viajeros buscan experiencias únicas y auténticas que conecten con la cultura local'
    },
    {
      icon: Target,
      title: 'Bienestar y Turismo de Naturaleza',
      description: 'Creciente demanda por destinos que ofrezcan bienestar físico y mental en entornos naturales'
    },
    {
      icon: Globe,
      title: 'Sostenibilidad y Viajes Conscientes',
      description: 'Los huéspedes valoran prácticas sostenibles y responsabilidad social corporativa'
    },
    {
      icon: TrendingUp,
      title: 'Integración Tecnológica',
      description: 'Adopción de tecnología para personalizar experiencias y mejorar eficiencia operacional'
    },
    {
      icon: DollarSign,
      title: 'Escapadas de Fin de Semana',
      description: 'Aumento en viajes cortos y escapadas de proximidad, especialmente post-pandemia'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={BarChart3}
            title="Análisis de Mercado"
            subtitle="Hotelería Boutique en México"
            description="Evaluación integral del mercado de hotelería boutique mexicano, identificando oportunidades de crecimiento y posicionamiento estratégico para VLU Hospitality."
          />
        </div>
      </section>

      {/* Market Overview */}
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
              Panorama del Mercado
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El mercado mexicano de hotelería boutique muestra un crecimiento sólido y sostenido, 
              con el segmento de lujo liderando la generación de ingresos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center card-hover border border-gray-100"
              >
                <div className="text-4xl font-bold text-vlu-primary mb-2">
                  <AnimatedCounter 
                    end={item.value} 
                    prefix={item.prefix || ''} 
                    suffix={item.suffix}
                    decimals={item.suffix === '%' ? 1 : 1}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.metric}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAM SAM SOM Analysis */}
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
              Análisis TAM • SAM • SOM
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evaluación del mercado total direccionable, mercado disponible y mercado obtenible 
              para nuestras propiedades en Tequesquitengo y Acapulco Diamante.
            </p>
          </motion.div>

          {/* Consolidated View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg mb-12"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Mercado Consolidado VLU
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">
                      <AnimatedCounter end={tamSamSom.consolidado.tam} prefix="$" suffix="M" decimals={1} />
                    </div>
                    <div className="text-sm font-semibold text-blue-600">TAM</div>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900">Total Addressable Market</h4>
                <p className="text-sm text-gray-600">Mercado total de hotelería boutique</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">
                      <AnimatedCounter end={tamSamSom.consolidado.sam} prefix="$" suffix="M" decimals={1} />
                    </div>
                    <div className="text-sm font-semibold text-green-600">SAM</div>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900">Serviceable Available Market</h4>
                <p className="text-sm text-gray-600">Mercado disponible para VLU</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">
                      <AnimatedCounter end={tamSamSom.consolidado.som} prefix="$" suffix="M" decimals={2} />
                    </div>
                    <div className="text-sm font-semibold text-purple-600">SOM</div>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900">Serviceable Obtainable Market</h4>
                <p className="text-sm text-gray-600">Mercado obtenible realista</p>
              </div>
            </div>
          </motion.div>

          {/* Property Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tequesquitengo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-vlu-primary mb-6">VLU Tequesquitengo</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      <AnimatedCounter end={tamSamSom.tequesquitengo.tam} prefix="$" suffix="M" decimals={1} />
                    </div>
                    <div className="text-sm text-gray-600">TAM</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      <AnimatedCounter end={tamSamSom.tequesquitengo.sam} prefix="$" suffix="M" decimals={1} />
                    </div>
                    <div className="text-sm text-gray-600">SAM</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      <AnimatedCounter end={tamSamSom.tequesquitengo.som} prefix="$" suffix="M" decimals={2} />
                    </div>
                    <div className="text-sm text-gray-600">SOM</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">
                        <AnimatedCounter end={tamSamSom.tequesquitengo.habitaciones} />
                      </div>
                      <div className="text-gray-600">Habitaciones</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        $<AnimatedCounter end={tamSamSom.tequesquitengo.adr} />
                      </div>
                      <div className="text-gray-600">ADR</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        <AnimatedCounter end={tamSamSom.tequesquitengo.ocupacion} />%
                      </div>
                      <div className="text-gray-600">Ocupación</div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      <AnimatedCounter end={tamSamSom.acapulco.tam} prefix="$" suffix="M" decimals={1} />
                    </div>
                    <div className="text-sm text-gray-600">TAM</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      <AnimatedCounter end={tamSamSom.acapulco.sam} prefix="$" suffix="M" decimals={1} />
                    </div>
                    <div className="text-sm text-gray-600">SAM</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      <AnimatedCounter end={tamSamSom.acapulco.som} prefix="$" suffix="M" decimals={2} />
                    </div>
                    <div className="text-sm text-gray-600">SOM</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">
                        <AnimatedCounter end={tamSamSom.acapulco.habitaciones} />
                      </div>
                      <div className="text-gray-600">Habitaciones</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        $<AnimatedCounter end={tamSamSom.acapulco.adr} />
                      </div>
                      <div className="text-gray-600">ADR</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        <AnimatedCounter end={tamSamSom.acapulco.ocupacion} />%
                      </div>
                      <div className="text-gray-600">Ocupación</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
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
              Tendencias Clave del Mercado
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Factores que impulsan el crecimiento y definen las oportunidades en el sector de hotelería boutique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tendencias.map((tendencia, index) => {
              const Icon = tendencia.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-vlu-turquoise/10 rounded-lg">
                      <Icon className="w-6 h-6 text-vlu-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {tendencia.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {tendencia.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Insights */}
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
              Insights Estratégicos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-vlu-turquoise">Oportunidad de Mercado</h3>
                <p className="text-gray-200 leading-relaxed">
                  El segmento de lujo lidera el crecimiento con una participación significativa en la generación de ingresos. 
                  VLU está posicionado para capturar esta oportunidad con sus dos propiedades estratégicamente ubicadas.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-vlu-turquoise">Ventaja Competitiva</h3>
                <p className="text-gray-200 leading-relaxed">
                  La demanda creciente por experiencias auténticas y viajes conscientes se alinea perfectamente con 
                  la propuesta de valor de VLU de "Lujo Consciente y Experiencial".
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
