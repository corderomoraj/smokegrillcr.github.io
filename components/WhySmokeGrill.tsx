'use client';
import { motion } from 'framer-motion';
import { Flame, Utensils, Award } from 'lucide-react';

export default function WhySmokeGrill() {
  const features = [
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Ahumados Premium",
      description: "Ahumados con madera seleccionada y técnicas artesanales."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Parrilla Profesional",
      description: "Equipos de alto nivel y procesos perfectamente calibrados."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Calidad Garantizada",
      description: "Ingredientes premium y atención obsesiva al detalle."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <motion.h3 
        className="text-3xl font-semibold mb-8 text-smokeWhite"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        ¿Por qué SmokeGrill?
      </motion.h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-flame transition-all group"
            variants={itemVariants}
            whileHover={{ y: -4, borderColor: '#FF6F00' }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-brandRed/20 to-flame/20 rounded-lg flex items-center justify-center text-flame mb-4 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h4 className="text-lg font-semibold text-smokeWhite mb-2">{feature.title}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
