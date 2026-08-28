import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { IMAGES } from '@/data';

export default function Intro() {
  return (
    <section id="maison" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:pr-16">
            <Reveal>
              <SectionLabel>La Maison</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-chocolate md:text-5xl">
                Une beauté pensée
                <br />
                dans le détail.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-chocolate-soft">
                « Chez Maison Épure, chaque rendez-vous commence par une écoute
                attentive. Nous privilégions la précision, la simplicité et une
                approche personnalisée pour révéler la beauté naturelle de
                chaque chevelure. »
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={IMAGES.intro}
                    alt="Coiffure au salon Maison Épure"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-6 -left-6 hidden font-serif text-7xl font-light text-sable/60 md:block">
                  É.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
