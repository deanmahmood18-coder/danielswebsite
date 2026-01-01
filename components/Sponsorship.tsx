import Image from 'next/image';
import Link from 'next/link';
import MotionReveal from './MotionReveal';
import SectionHeading from './SectionHeading';
import { packages, sponsorInventory } from '@/lib/content';

const valueProps = [
  'Premium storytelling for British and European audiences.',
  'Disciplined athlete with clear pro transition narrative.',
  'Controlled brand-safe content and appearance conduct.',
  'Flexible activation across kit, socials, and media.',
  'Professional media kit and asset delivery standards.'
];

export default function Sponsorship() {
  return (
    <section id="sponsorship" className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Sponsorship"
          title="A structured partner journey"
          subtitle="A sponsor funnel built to help brands align with Daniel's performance story and media momentum."
        />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <MotionReveal>
            <div className="card p-6">
              <h3 className="text-xl">Why sponsor Daniel?</h3>
              <ul className="mt-4 space-y-3 text-muted">
                {valueProps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold">*</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted mt-6 text-sm">
                Custom packages available for strategic partners and multi-market
                activations.
              </p>
            </div>
            <div className="card p-4 mt-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
                <Image
                  src="/images/IMG_1014.jpg"
                  alt="Training session detail"
                  fill
                  className="object-contain bg-black/20"
                />
              </div>
            </div>
          </MotionReveal>
          <div className="grid gap-6">
            {packages.map((tier, index) => (
              <MotionReveal key={tier.name} delay={index * 0.08}>
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl">{tier.name}</h3>
                    <p className="text-muted mt-2">{tier.summary}</p>
                    <p className="text-gold text-sm mt-2">{tier.price}</p>
                  </div>
                    <Link
                      href="/media-kit"
                      className="bg-gold text-background px-4 py-2 rounded-full text-sm font-semibold focus-ring"
                    >
                      {tier.cta}
                    </Link>
                  </div>
                  <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2 text-muted">
                      {tier.deliverables.map((item) => (
                        <li key={item}>* {item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {tier.inventory.map((chip) => (
                        <span
                          key={chip}
                          className="px-3 py-1 rounded-full border border-white/10 text-xs text-muted"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
        <div className="mt-12 card p-6">
          <h3 className="text-xl">Sponsor inventory</h3>
          <div className="overflow-x-auto mt-4">
            <table className="table-shell">
              <thead>
                <tr>
                  <th>Placement</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                {sponsorInventory.map((item) => (
                  <tr key={item.placement}>
                    <td>{item.placement}</td>
                    <td>{item.availability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
