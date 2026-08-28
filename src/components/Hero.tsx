import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { IMAGES, PHONE } from '@/data';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="flex flex-col justify-center lg:col-span-6 lg:pr-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 text-xs uppercase tracking-widest text-chocolate-soft"
          >
            Maison de coiffure · Toulouse
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease }}
            className="font-serif text-5xl font-light leading-[1.05] text-chocolate md:text-6xl lg:text-7xl"
          >
            L'art du cheveu,
            <br />
            <span className="italic">simplement.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55, ease }}
            className="mt-8 max-w-md text-base font-light leading-relaxed text-chocolate-soft"
          >
            « Un espace confidentiel dédié à la beauté du geste, aux matières
            naturelles et aux coupes qui traversent les saisons. »
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.75, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center bg-chocolate px-8 py-4 text-xs uppercase tracking-widest text-cream transition-all duration-500 hover:bg-chocolate-soft"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#maison"
              className="inline-flex items-center justify-center border border-chocolate/30 px-8 py-4 text-xs uppercase tracking-widest text-chocolate transition-all duration-500 hover:border-chocolate hover:bg-chocolate/5"
            >
              Découvrir la maison
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 flex items-center gap-2 text-xs font-light text-chocolate-soft"
          >
            <Phone size={13} strokeWidth={1.5} />
            Rendez-vous uniquement par téléphone
          </motion.p>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <img
              src={IMAGES.hero}
              alt="Salon de coiffure Maison Épure"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="h-20 md:h-28" />
    </section>
  );
}
