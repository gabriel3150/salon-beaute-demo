import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { ADDRESS, PHONE, PHONE_DISPLAY } from '@/data';

export default function Contact() {
  return (
    <section id="contact" className="bg-chocolate py-24 text-cream md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionLabel className="text-sable">Contact</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl">
                Prenons rendez-vous
                <br />
                au téléphone.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base font-light leading-relaxed text-cream/70">
                Tous nos rendez-vous se prennent par téléphone, pour vous
                garantir un accueil personnel et un créneau véritablement
                adapté à votre demande.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <motion.a
                href={`tel:${PHONE}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 inline-flex items-center gap-3 bg-cream px-8 py-4 text-xs uppercase tracking-widest text-chocolate transition-colors duration-500 hover:bg-sable"
              >
                <Phone size={15} strokeWidth={1.5} />
                {PHONE_DISPLAY}
              </motion.a>
            </Reveal>
          </div>

          <div className="lg:pl-16">
            <Reveal delay={0.2}>
              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <MapPin size={20} strokeWidth={1.5} className="mt-1 text-sable" />
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-sable">
                      Adresse
                    </h3>
                    <p className="mt-2 font-serif text-xl font-light">
                      {ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} strokeWidth={1.5} className="mt-1 text-sable" />
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-sable">
                      Téléphone
                    </h3>
                    <p className="mt-2 font-serif text-xl font-light">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} strokeWidth={1.5} className="mt-1 text-sable" />
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-sable">
                      Horaires
                    </h3>
                    <div className="mt-2 space-y-1 font-serif text-lg font-light">
                      <p>Mar — Ven · 10h — 19h</p>
                      <p>Samedi · 9h — 17h</p>
                      <p className="text-cream/50">Dim — Lun · Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
