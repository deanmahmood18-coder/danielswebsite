'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'story', label: 'Story' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'sponsorship', label: 'Sponsorship' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' }
];

export default function SiteNav() {
  const [activeId, setActiveId] = useState('hero');
  const [open, setOpen] = useState(false);

  const observerOptions = useMemo(
    () => ({ root: null, rootMargin: '-35% 0px -55% 0px', threshold: 0 }),
    []
  );

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [observerOptions]);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/80 border-b border-white/5">
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="text-lg tracking-[0.3em] uppercase">
          DSR
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`/#${section.id}`}
              className={`transition text-muted hover:text-ink focus-ring ${
                activeId === section.id ? 'text-gold' : ''
              }`}
            >
              {section.label}
            </a>
          ))}
          <Link
            href="/#contact"
            className="bg-gold text-background px-4 py-2 rounded-full text-sm font-semibold focus-ring"
          >
            Sponsor Daniel
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden text-sm uppercase tracking-widest focus-ring"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="md:hidden bg-surface/95 border-t border-white/5 mobile-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-x py-6 flex flex-col gap-4 text-sm">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`/#${section.id}`}
                  className={`transition text-muted hover:text-ink focus-ring ${
                    activeId === section.id ? 'text-gold' : ''
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {section.label}
                </a>
              ))}
              <Link
                href="/#contact"
                className="bg-gold text-background px-4 py-2 rounded-full text-sm font-semibold text-center focus-ring"
                onClick={() => setOpen(false)}
              >
                Sponsor Daniel
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
