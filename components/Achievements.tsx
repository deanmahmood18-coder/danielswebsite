'use client';

import Image from 'next/image';
import MotionReveal from './MotionReveal';
import SectionHeading from './SectionHeading';
import { achievements } from '@/lib/content';

export default function Achievements() {
  const leftColumn = achievements.slice(0, 3);
  const rightColumn = achievements.slice(3);

  return (
    <section id="achievements" className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Achievements"
          title="European-level accolades with national dominance"
          subtitle="Sponsor-aligned accomplishments that translate into trusted performance and credibility across the sport."
        />
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          <div className="grid gap-6">
            {leftColumn.map((achievement) => (
              <MotionReveal key={achievement.title}>
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold text-sm">
                      *
                    </span>
                    <h3 className="text-lg">{achievement.title}</h3>
                  </div>
                  <p className="text-muted mt-4 leading-relaxed">
                    {achievement.highlight}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
          <MotionReveal>
            <div className="card p-4 h-full">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-md)]">
                <Image
                  src="/images/IMG_1018.jpg"
                  alt="Daniel Stoican Raj in training"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-muted text-sm mt-4">
                Training visual for sponsor decks and press.
              </p>
            </div>
          </MotionReveal>
          <div className="grid gap-6">
            {rightColumn.map((achievement) => (
              <MotionReveal key={achievement.title}>
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold text-sm">
                      *
                    </span>
                    <h3 className="text-lg">{achievement.title}</h3>
                  </div>
                  <p className="text-muted mt-4 leading-relaxed">
                    {achievement.highlight}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
        <div className="mt-12 card p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-gold uppercase tracking-[0.2em] text-xs">
                Press-ready summary
              </p>
              <p className="text-lg mt-2">
                Daniel Stoican Raj is an amateur champion with European and national
                titles, including seven regional championships and a British national
                title. He is the first athlete from the East Midlands since Carl Froch
                to win the national title. His record stands at 44-6 with no losses
                in the last two years. Sponsors gain a disciplined, media-ready athlete
                committed to premium partnerships and brand-safe appearances.
              </p>
            </div>
            <button
              type="button"
              className="border border-white/10 px-4 py-2 rounded-full text-sm text-muted hover:text-ink focus-ring"
              onClick={() => {
                navigator.clipboard.writeText(
                  'Daniel Stoican Raj is an amateur champion with European and national titles, including seven regional championships and a British national title. He is the first athlete from the East Midlands since Carl Froch to win the national title. His record stands at 44-6 with no losses in the last two years. Sponsors gain a disciplined, media-ready athlete committed to premium partnerships and brand-safe appearances.'
                );
              }}
            >
              Copy snippet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
