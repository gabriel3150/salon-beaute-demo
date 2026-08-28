import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { SERVICES } from '@/data';

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-beige py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Tarifs</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-chocolate md:text-5xl">
            Une transparence
            <br />
            de bon aloi.
          </h2>
        </Reveal>

        <div className="mt-16">
          {SERVICES.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.05} y={16}>
              <div className="flex items-baseline justify-between border-b border-chocolate/15 py-5">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-chocolate-soft/60">
                    {service.number}
                  </span>
                  <h3 className="font-serif text-xl font-light text-chocolate md:text-2xl">
                    {service.name}
                  </h3>
                </div>
                <span className="font-serif text-lg font-light text-chocolate md:text-xl">
                  {service.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-sm font-light text-chocolate-soft">
            Une consultation préalable est offerte afin d'adapter chaque
            prestation à votre chevelure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
