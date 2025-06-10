
'use client';

import { motion } from 'framer-motion';
import { Target, Award, TrendingUp, Zap, Calendar, User, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export default function PilaresEstrategicosPage() {
  const pilares = [
    {
      nombre: 'Excelencia Operacional',
      icon: Award,
      descripcion: 'Mantener estándares superiores de servicio y calidad en todas las operaciones',
      iniciativas: [
        'Programa optimización experiencia huésped',
        'Auditoría exhaustiva journey mapping',
        'Protocolos aseguramiento calidad',
        'Capacitación continua personal'
      ],
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      nombre: 'Diferenciación de Marca',
      icon: Target,
      descripcion: 'Construir identidad de marca distintiva y defensible',
      iniciativas: [
        'Desarrollo experiencias curadas únicas',
        'Integración cultura local auténtica',
        'Programa embajadores y influencers',
        'Construcción comunidad huéspedes'
      ],
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      nombre: 'Crecimiento Sostenible',
      icon: TrendingUp,
      descripcion: 'Expandir presencia de mercado manteniendo calidad y rentabilidad',
      iniciativas: [
        'Optimización revenue management',
        'Diversificación fuentes ingresos',
        'Expansión canales distribución',
        'Desarrollo mercados nicho'
      ],
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      nombre: 'Innovación Digital',
      icon: Zap,
      descripcion: 'Aprovechar tecnología para mejorar experiencia huésped y eficiencia operacional',
      iniciativas: [
        'Personalización impulsada por IA',
        'Integración tecnología habitaciones inteligentes',
        'Plataforma reservas directas optimizada',
        'Analytics avanzados comportamiento huésped'
      ],
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    }
  ];

  const proyectosTequesquitengo = [
    {
      proyecto: 'Programa Optimización Experiencia Huésped',
      objetivo: 'Aumentar calificación valor por dinero de 7.2 a 8.0',
      cronograma: '0-6 meses',
      propietario: 'Gerente Operaciones',
      prioridad: 'Alta'
    },
    {
      proyecto: 'Desarrollo Paquetes Bienestar y Experiencias Locales',
      objetivo: 'Capitalizar turismo bienestar y naturaleza',
      cronograma: '0-12 meses',
      propietario: 'Gerente Marketing',
      prioridad: 'Alta'
    },
    {
      proyecto: 'Estrategia Proactiva Fomento Reseñas',
      objetivo: 'Triplicar volumen reseñas de 120 a 360+',
      cronograma: '0-18 meses',
      propietario: 'Gerente Marketing',
      prioridad: 'Media'
    },
    {
      proyecto: 'Activación Eventos Alto Perfil',
      objetivo: 'Organizar 2 eventos VIP anuales, aumentar fiestas privadas 20%',
      cronograma: '0-24 meses',
      propietario: 'Gerente Eventos',
      prioridad: 'Media'
    }
  ];

  const proyectosAcapulco = [
    {
      proyecto: 'Construcción Marca Lujo Acelerada',
      objetivo: 'Establecer reconocimiento y credibilidad en segmento lujo',
      cronograma: 'Pre-apertura + 12 meses',
      propietario: 'Director Marketing',
      prioridad: 'Alta'
    },
    {
      proyecto: 'Curación Experiencias Exclusivas',
      objetivo: 'Desarrollar ofertas únicas que justifiquen precio premium',
      cronograma: 'Pre-apertura + 6 meses',
      propietario: 'Gerente Experiencias',
      prioridad: 'Alta'
    },
    {
      proyecto: 'Desarrollo Mercado Eventos y Bodas',
      objetivo: 'Capturar cuota significativa mercado bodas lujo',
      cronograma: '0-18 meses',
      propietario: 'Gerente Ventas Eventos',
      prioridad: 'Alta'
    },
    {
      proyecto: 'Programa Ventas Directas y Lealtad',
      objetivo: 'Minimizar dependencia OTAs, fomentar reservas directas',
      cronograma: '0-24 meses',
      propietario: 'Director Revenue',
      prioridad: 'Media'
    }
  ];

  const metricasExito = {
    financieras: {
      tequesquitengo: [
        'Aumentar ocupación de 45% a 65%',
        'Mejorar ADR manteniendo USD 229',
        '25% reservas directas',
        '45% aumento ingresos anuales'
      ],
      acapulco: [
        'Lograr ocupación 70%',
        'Mantener ADR USD 350',
        '30% reservas directas',
        'ROI positivo año 2'
      ]
    },
    operacionales: [
      'Calificación satisfacción general 8.5+',
      '90%+ satisfacción participantes programas',
      '40% tasa reserva repetida',
      '25% tasa referencia huéspedes'
    ],
    marca: [
      'Top 3 hoteles boutique en mercados respectivos',
      '100% aumento seguidores redes sociales',
      '360+ reseñas totales calificación 8.0+',
      'Reconocimiento liderazgo mercado'
    ]
  };

  const ProyectoCard = ({ proyecto, index }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">{proyecto.proyecto}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          proyecto.prioridad === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {proyecto.prioridad}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-gray-900">Objetivo</p>
            <p className="text-sm text-gray-600">{proyecto.objetivo}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Clock className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-gray-900">Cronograma</p>
            <p className="text-sm text-gray-600">{proyecto.cronograma}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <User className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-gray-900">Propietario</p>
            <p className="text-sm text-gray-600">{proyecto.propietario}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Target}
            title="Pilares Estratégicos"
            subtitle="Fundamentos para el Crecimiento"
            description="Cuatro pilares fundamentales que guían la estrategia de VLU Hospitality, cada uno con iniciativas específicas y proyectos estratégicos para impulsar el crecimiento sostenible y la diferenciación competitiva."
          />
        </div>
      </section>

      {/* Strategic Pillars */}
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
              Los Cuatro Pilares Estratégicos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada pilar representa un área crítica de enfoque con iniciativas específicas 
              para impulsar el éxito de VLU Hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pilares.map((pilar, index) => {
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
                    <h3 className="text-2xl font-bold text-gray-900">{pilar.nombre}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {pilar.descripcion}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Iniciativas Clave</h4>
                    <ul className="space-y-2">
                      {pilar.iniciativas.map((iniciativa, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{iniciativa}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Projects - Tequesquitengo */}
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
              Proyectos Estratégicos VLU Tequesquitengo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Iniciativas específicas para optimizar la experiencia del huésped y fortalecer 
              el posicionamiento del santuario exclusivo junto al lago.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proyectosTequesquitengo.map((proyecto, index) => (
              <ProyectoCard key={index} proyecto={proyecto} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Projects - Acapulco */}
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
              Proyectos Estratégicos VLU Acapulco Diamante
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proyectos enfocados en establecer el liderazgo en el segmento de lujo y 
              construir una marca reconocida en Acapulco Diamante.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proyectosAcapulco.map((proyecto, index) => (
              <ProyectoCard key={index} proyecto={proyecto} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
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
              Métricas de Éxito
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Indicadores clave para medir el progreso y éxito de la estrategia implementada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Financial Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-vlu-medium/20 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-vlu-turquoise mb-6">Métricas Financieras</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">VLU Tequesquitengo</h4>
                  <ul className="space-y-2">
                    {metricasExito.financieras.tequesquitengo.map((metrica, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-vlu-turquoise rounded-full mt-2 flex-shrink-0"></span>
                        <span>{metrica}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">VLU Acapulco Diamante</h4>
                  <ul className="space-y-2">
                    {metricasExito.financieras.acapulco.map((metrica, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-vlu-turquoise rounded-full mt-2 flex-shrink-0"></span>
                        <span>{metrica}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Operational Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-vlu-medium/20 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-vlu-turquoise mb-6">Métricas Operacionales</h3>
              <ul className="space-y-3">
                {metricasExito.operacionales.map((metrica, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-vlu-turquoise rounded-full mt-2 flex-shrink-0"></span>
                    <span>{metrica}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Brand Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-vlu-medium/20 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-vlu-turquoise mb-6">Métricas de Marca</h3>
              <ul className="space-y-3">
                {metricasExito.marca.map((metrica, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-vlu-turquoise rounded-full mt-2 flex-shrink-0"></span>
                    <span>{metrica}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cronograma de Implementación
            </h2>
            <p className="text-lg text-gray-600">
              Fases estratégicas para la ejecución exitosa de los pilares y proyectos.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fase 1: Fundación (0-6 meses)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Establecimiento de bases operacionales y optimización de experiencia actual.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Programa optimización experiencia huésped Tequesquitengo</li>
                <li>• Curación experiencias exclusivas Acapulco (pre-apertura)</li>
                <li>• Protocolos aseguramiento calidad</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fase 2: Crecimiento (6-18 meses)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Expansión de mercado y construcción de marca acelerada.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Desarrollo paquetes bienestar y experiencias locales</li>
                <li>• Construcción marca lujo acelerada Acapulco</li>
                <li>• Desarrollo mercado eventos y bodas</li>
                <li>• Estrategia proactiva fomento reseñas</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fase 3: Consolidación (18-24 meses)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Optimización y liderazgo de mercado establecido.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Activación eventos alto perfil</li>
                <li>• Programa ventas directas y lealtad</li>
                <li>• Personalización impulsada por IA</li>
                <li>• Reconocimiento liderazgo mercado</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
