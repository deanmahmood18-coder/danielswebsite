import Image from 'next/image';
import MotionReveal from './MotionReveal';
import SectionHeading from './SectionHeading';
import { sponsorLogos } from '@/lib/content';

export default function SocialProof() {
  return (
    <section id="team" className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Team & Standards"
          title="Training environment and brand safety"
          subtitle="Structured preparation backed by professionals and a sponsor-safe working style."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <MotionReveal>
            <div className="card p-6 h-full">
              <h3 className="text-lg">Training Environment</h3>
              <p className="text-muted mt-3">
                Gym: NBHFC<br />
                Location: NG4 2SR, Nottingham<br />
                Training partners: TBA
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="card p-6 h-full">
              <h3 className="text-lg">Team</h3>
              <p className="text-muted mt-3">
                Head coach: Ubaid Khaliq<br />
                Assistant coach: James Zeus<br />
                Sports science: Clinton McPhilbin
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <div className="card p-6 h-full">
              <h3 className="text-lg">Professional Standards</h3>
              <ul className="text-muted mt-3 space-y-2">
                <li>Media days and sponsor deliverables on schedule.</li>
                <li>Brand guidelines respected across all appearances.</li>
                <li>Consistent communication with partner teams.</li>
              </ul>
            </div>
          </MotionReveal>
        </div>
        <MotionReveal>
          <div className="card p-4 mt-8">
            <div className="relative aspect-[16/7] overflow-hidden rounded-[var(--radius-md)]">
              <Image
                src="/images/IMG_1019.jpg"
                alt="Team training environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </MotionReveal>
        <div className="mt-12">
          <p className="text-gold uppercase tracking-[0.2em] text-xs">
            Sponsor wall
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
            {sponsorLogos.map((logo) => (
              <div
                key={logo}
                className="border border-white/10 rounded-[var(--radius-md)] py-6 text-center text-muted text-sm uppercase tracking-[0.18em]"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
