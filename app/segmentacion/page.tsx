
'use client';

import { motion } from 'framer-motion';
import { Users, Target, Heart, Briefcase, Calendar, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export default function SegmentacionPage() {
  const segmentosTequesquitengo = [
    {
      nombre: 'El Escapista de Fin de Semana Consciente',
      prioridad: 'Alta',
      icon: Heart,
      demografia: 'Adultos 25-45 años, parejas sin hijos, ingresos medios-altos, Ciudad de México y alrededores',
      psicografia: 'Conscientes de salud y bienestar, aprecian naturaleza, valoran experiencias auténticas',
      necesidades: [
        'Ambiente sereno y relajante',
        'Conexión con entorno natural',
        'Actividades de bienestar (yoga, masajes, temazcal)',
        'Servicio atento y personalizado',
        'Instalaciones modernas y limpias'
      ],
      sensibilidades: [
        'Valor por dinero',
        'Ruido o interrupciones',
        'Inconsistencia en servicio',
        'Falta de autenticidad'
      ],
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      nombre: 'El Organizador de Fiestas Privadas',
      prioridad: 'Alta',
      icon: Calendar,
      demografia: 'Adultos 25-50 años, ingresos medios-altos, organizadores de eventos sociales',
      psicografia: 'Buscan exclusividad y privacidad para celebraciones especiales',
      necesidades: [
        'Espacio para 30-35 personas',
        'Paquete integral (estancia, alimentos, bebidas)',
        'Privacidad y exclusividad',
        'Servicio profesional de organización'
      ],
      sensibilidades: [
        'Restricciones de ruido o horario',
        'Falta de flexibilidad en paquetes',
        'Calidad de comida y bebidas'
      ],
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      nombre: 'El Trabajador Remoto en Vacaciones',
      prioridad: 'Alta',
      icon: Briefcase,
      demografia: 'Profesionales 30-55 años con familias, trabajo remoto flexible',
      psicografia: 'Buscan equilibrio entre trabajo y descanso en entornos inspiradores',
      necesidades: [
        'Internet fiable y alta velocidad',
        'Espacios de trabajo cómodos',
        'Ambiente tranquilo para concentración',
        'Entretenimiento familiar',
        'Flexibilidad para estancias prolongadas'
      ],
      sensibilidades: [
        'Conexión internet deficiente',
        'Falta de espacios trabajo',
        'Precios no ajustados a estancias largas'
      ],
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    }
  ];

  const segmentosAcapulco = [
    {
      nombre: 'El Viajero de Lujo Contemporáneo',
      prioridad: 'Alta',
      icon: Target,
      demografia: 'Adultos 35+ años, alto poder adquisitivo, viajeros frecuentes de lujo',
      psicografia: 'Sofisticados, exigentes, valoran diseño y servicio excepcional',
      necesidades: [
        'Diseño arquitectónico sofisticado',
        'Servicio anticipatorio e impecable',
        'Vistas impresionantes al Pacífico',
        'Experiencias curadas de alto valor',
        'Privacidad e intimidad'
      ],
      sensibilidades: [
        'Servicio genérico o masificado',
        'Falta de atención al detalle',
        'Instalaciones desactualizadas',
        'Percepciones de seguridad'
      ],
      color: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600'
    },
    {
      nombre: 'El Celebrador de Momentos Especiales',
      prioridad: 'Alta',
      icon: Heart,
      demografia: 'Parejas comprometidas, planificadores eventos, familias con alto poder adquisitivo',
      psicografia: 'Buscan crear memorias únicas e inolvidables para ocasiones especiales',
      necesidades: [
        'Espacios versátiles para eventos',
        'Servicio planificación dedicado',
        'Catering alta calidad personalizado',
        'Alojamiento lujo para invitados',
        'Privacidad y exclusividad'
      ],
      sensibilidades: [
        'Falta de personalización',
        'Limitaciones en servicios',
        'Problemas de coordinación'
      ],
      color: 'bg-pink-50 border-pink-200',
      iconColor: 'text-pink-600'
    },
    {
      nombre: 'El Aficionado al Golf y Recreación de Alta Gama',
      prioridad: 'Media',
      icon: MapPin,
      demografia: 'Adultos mediana/tercera edad, alto poder adquisitivo, deportistas élite',
      psicografia: 'Activos, sociales, valoran experiencias deportivas de calidad',
      necesidades: [
        'Proximidad a campos golf clase mundial',
        'Servicios conserjería eficientes',
        'Opciones relajación post-actividad',
        'Comida y bebida alta calidad'
      ],
      sensibilidades: [
        'Distancia a actividades',
        'Falta de servicios especializados',
        'Horarios inflexibles'
      ],
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    }
  ];

  const segmentosConsolidados = [
    {
      nombre: 'El Buscador de Autenticidad y Diseño',
      descripcion: 'Valora estética única, conexión cultural y diseño distintivo en ambas propiedades',
      icon: Target,
      color: 'bg-teal-50 border-teal-200',
      iconColor: 'text-teal-600'
    },
    {
      nombre: 'El Apreciador del Servicio Personalizado',
      descripcion: 'Busca atención al detalle que va más allá de lo estándar, diferenciador clave vs cadenas y Airbnb',
      icon: Heart,
      color: 'bg-rose-50 border-rose-200',
      iconColor: 'text-rose-600'
    },
    {
      nombre: 'El Viajero de Experiencias Curadas',
      descripcion: 'Busca experiencias cuidadosamente seleccionadas y personalizadas que enriquezcan su viaje',
      icon: Users,
      color: 'bg-amber-50 border-amber-200',
      iconColor: 'text-amber-600'
    }
  ];

  const PersonaCard = ({ persona, index }: any) => {
    const Icon = persona.icon;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`${persona.color} p-6 rounded-xl shadow-lg card-hover`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Icon className={`w-5 h-5 ${persona.iconColor}`} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{persona.nombre}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            persona.prioridad === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
          }`}>
            {persona.prioridad}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Demografía</h4>
            <p className="text-sm text-gray-700">{persona.demografia}</p>
          </div>

          {persona.psicografia && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Psicografía</h4>
              <p className="text-sm text-gray-700">{persona.psicografia}</p>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Necesidades Clave</h4>
            <ul className="space-y-1">
              {persona.necesidades.map((necesidad: string, idx: number) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{necesidad}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Sensibilidades</h4>
            <ul className="space-y-1">
              {persona.sensibilidades.map((sensibilidad: string, idx: number) => (
                <li key={idx} className="text-sm text-red-600 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{sensibilidad}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Users}
            title="Segmentación de Mercado"
            subtitle="Personas y Segmentos Prioritarios"
            description="Análisis detallado de segmentos objetivo y desarrollo de personas específicas para VLU Tequesquitengo y VLU Acapulco Diamante, basado en un enfoque multidimensional que integra variables ocasional-motivacionales, psicográficas y conductuales."
          />
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modelo de Segmentación
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Enfoque multidimensional integrando variables ocasional-motivacionales, psicográficas y conductuales 
              para identificar segmentos de alto valor y desarrollar estrategias de targeting precisas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VLU Tequesquitengo Segments */}
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
              Segmentos VLU Tequesquitengo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Personas prioritarias para el santuario exclusivo junto al lago, enfocadas en bienestar, 
              eventos privados y trabajo remoto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {segmentosTequesquitengo.map((persona, index) => (
              <PersonaCard key={index} persona={persona} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* VLU Acapulco Diamante Segments */}
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
              Segmentos VLU Acapulco Diamante
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Personas de lujo para el enclave íntimo mexicano contemporáneo, centradas en experiencias 
              premium y celebraciones especiales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {segmentosAcapulco.map((persona, index) => (
              <PersonaCard key={index} persona={persona} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Consolidated Segments */}
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
              Segmentos Consolidados VLU
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Segmentos transversales que aplican a ambas propiedades, representando valores 
              y comportamientos compartidos de la marca VLU.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {segmentosConsolidados.map((segmento, index) => {
              const Icon = segmento.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-vlu-medium/20 p-8 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-vlu-turquoise/20 rounded-full">
                      <Icon className="w-8 h-8 text-vlu-turquoise" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{segmento.nombre}</h3>
                  <p className="text-gray-300 leading-relaxed">{segmento.descripcion}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Implications */}
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
              Implicaciones Estratégicas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cómo la segmentación informa las decisiones de producto, marketing y operaciones.
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
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900">Desarrollo de Producto</h3>
              </div>
              <p className="text-sm text-gray-600">
                Diseñar experiencias y servicios específicos para cada persona, desde paquetes de bienestar 
                hasta espacios de trabajo remoto y eventos de lujo.
              </p>
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
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900">Estrategia de Marketing</h3>
              </div>
              <p className="text-sm text-gray-600">
                Personalizar mensajes, canales y campañas para resonar con las motivaciones y 
                sensibilidades específicas de cada segmento.
              </p>
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
                  <Heart className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900">Excelencia Operacional</h3>
              </div>
              <p className="text-sm text-gray-600">
                Entrenar al personal para reconocer y atender las necesidades específicas de cada 
                segmento, evitando sus sensibilidades identificadas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
