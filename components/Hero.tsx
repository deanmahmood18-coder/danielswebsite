import Image from 'next/image';
import Link from 'next/link';
import MotionReveal from './MotionReveal';
import { trustStrip } from '@/lib/content';

export default function Hero() {
  return (
    <section id="hero" className="pt-16 md:pt-24 pb-16">
      <div className="container-x grid-lines">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <MotionReveal>
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs">
                Sponsor-focused profile
              </p>
              <h1 className="text-4xl md:text-6xl mt-4 leading-tight">
                Amateur Champion. Turning Pro Soon.
              </h1>
              <p className="text-muted mt-4 text-lg leading-relaxed max-w-xl">
                Daniel Stoican Raj delivers disciplined, high-performance boxing with
                a clear pathway to the professional stage. He competes at 71kg for
                national and regional bouts and won the European championship at
                70kg. This is a premium partnership opportunity for brands that
                value resilience, craftsmanship, and British sporting culture.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="bg-gold text-background px-6 py-3 rounded-full font-semibold focus-ring"
                >
                  Sponsor Daniel
                </Link>
                <Link
                  href="/media-kit"
                  className="border border-gold/50 text-ink px-6 py-3 rounded-full font-semibold hover:border-gold focus-ring"
                >
                  View Media Kit
                </Link>
                <Link
                  href="/#contact"
                  className="text-muted px-6 py-3 rounded-full border border-white/10 hover:text-ink focus-ring"
                >
                  Book an Appearance
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-muted">
                {trustStrip.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.15}>
            <div className="card p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)]">
                <Image
                  src="/images/IMG_1011.jpg"
                  alt="Daniel Stoican Raj promotional portrait"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
