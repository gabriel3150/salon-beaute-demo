import { ADDRESS, PHONE, PHONE_DISPLAY } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-chocolate px-6 pb-10 pt-16 text-cream/60 lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-cream/10 pt-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-serif text-xl text-cream">Maison Épure</span>
          <p className="text-xs uppercase tracking-widest">
            L'art du cheveu, simplement.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 text-xs font-light md:flex-row md:justify-between">
          <p>{ADDRESS}</p>
          <a href={`tel:${PHONE}`} className="transition-colors hover:text-cream">
            {PHONE_DISPLAY}
          </a>
          <p>© {new Date().getFullYear()} Maison Épure</p>
        </div>
      </div>
    </footer>
  );
}
