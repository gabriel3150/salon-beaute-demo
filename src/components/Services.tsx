import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { SERVICES } from '@/data';

export default function Services() {
  return (
    <section id="prestations" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Les essentiels</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-tight text-chocolate md:text-5xl">
            Des gestes précis.
            <br />
            Des résultats naturels.
          </h2>
        </Reveal>

        <div className="mt-16">
          {SERVICES.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.05} y={16}>
              <motion.a
                href="#tarifs"
                className="group flex items-baseline justify-between gap-6 border-b border-chocolate/10 py-6 transition-all duration-500 hover:pl-4"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-serif text-sm text-chocolate-soft transition-opacity duration-500 group-hover:opacity-100 md:opacity-50">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-light text-chocolate transition-colors duration-500 group-hover:text-chocolate-soft md:text-3xl">
                      {service.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm font-light text-chocolate-soft/80">
                      {service.description}
                    </p>
                  </div>
                </div>
                <span className="hidden whitespace-nowrap text-sm font-light text-chocolate-soft md:block">
                  {service.price}
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-xs uppercase tracking-widest text-chocolate-soft">
            Tarifs indicatifs · consultation offerte
          </p>
        </Reveal>
      </div>
    </section>
  );
}
