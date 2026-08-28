import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { VALUES } from '@/data';

export default function Values() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Notre philosophie</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-tight text-chocolate md:text-5xl">
            Trois intentions,
            <br />
            un seul soin.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
          {VALUES.map((value, index) => (
            <Reveal key={value.number} delay={index * 0.15}>
              <div>
                <span className="font-serif text-sm text-chocolate-soft">
                  {value.number}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-light uppercase tracking-wide text-chocolate md:text-3xl">
                  {value.title}
                </h3>
                <div className="mt-6 h-px w-12 bg-sable" />
                <p className="mt-6 text-base font-light leading-relaxed text-chocolate-soft">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
