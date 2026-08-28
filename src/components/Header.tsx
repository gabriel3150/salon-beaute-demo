import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PHONE } from '@/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/80 backdrop-blur-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#top"
            className="font-serif text-xl tracking-wide text-chocolate md:text-2xl"
          >
            Maison Épure
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-chocolate/80 transition-colors duration-300 hover:text-chocolate"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="hidden border border-chocolate/30 px-6 py-3 text-xs uppercase tracking-widest text-chocolate transition-all duration-500 hover:bg-chocolate hover:text-cream md:inline-block"
            >
              Prendre rendez-vous
            </a>
            <button
              onClick={() => setOpen(true)}
              className="text-chocolate lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-cream lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-serif text-xl text-chocolate">Maison Épure</span>
              <button onClick={() => setOpen(false)} aria-label="Fermer le menu">
                <X size={24} strokeWidth={1.5} className="text-chocolate" />
              </button>
            </div>
            <motion.ul
              className="flex flex-col items-center justify-center gap-8 pt-16"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl text-chocolate"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="pt-6"
              >
                <a
                  href={`tel:${PHONE}`}
                  onClick={() => setOpen(false)}
                  className="bg-chocolate px-8 py-4 text-xs uppercase tracking-widest text-cream"
                >
                  Prendre rendez-vous
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
