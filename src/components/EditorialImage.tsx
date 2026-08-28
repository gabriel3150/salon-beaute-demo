import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data';

export default function EditorialImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={ref} className="relative h-[70vh] w-full overflow-hidden md:h-[85vh]">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src={IMAGES.editorial}
          alt="Cheveux au soleil, lumière naturelle"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-chocolate/20" />
      <div className="relative flex h-full items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 text-center font-serif text-4xl font-light italic text-cream md:text-6xl lg:text-7xl"
        >
          Sublimer sans transformer.
        </motion.h2>
      </div>
    </section>
  );
}
