import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { achievements, site } from '@/lib/content';

export default function MediaKitPage() {
  return (
    <main className="pt-16 pb-20">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs">Media Kit</p>
            <h1 className="text-4xl md:text-5xl mt-4">
              Sponsor-ready assets and brand guidance
            </h1>
            <p className="text-muted mt-4">
              Download the full sponsor pack for brand assets, usage guidelines,
              and campaign-ready visuals. All details are aligned to premium
              partnerships.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.mediaKitUrl}
                className="bg-gold text-background px-6 py-3 rounded-full font-semibold focus-ring"
              >
                Download Media Kit (PDF)
              </a>
              <Link
                href="/sponsors"
                className="border border-white/10 px-6 py-3 rounded-full font-semibold hover:border-gold focus-ring"
              >
                View Sponsorship Packages
              </Link>
            </div>
          </div>
          <div className="card p-4">
            <div className="relative aspect-[4/5] rounded-[var(--radius-md)] overflow-hidden">
              <Image
                src="/images/IMG_1011.jpg"
                alt="Media kit cover placeholder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="divider my-12" />

        <SectionHeading
          eyebrow="Bio"
          title="One-paragraph bio"
          subtitle="Copy-ready for press releases and sponsor decks."
        />
        <p className="text-muted max-w-3xl leading-relaxed">
          Daniel Stoican Raj is an amateur boxing champion with European and
          national accolades, now preparing for a professional transition. He
          competes at 71kg domestically and won the European championship at 70kg.
          He is the first athlete from the East Midlands since Carl Froch to win
          the national title, and he enters the Boxing World Cup in Brazil in
          April. His amateur record stands at 44-6 with no losses in the last two
          years. Regarded as the best prospect since Bendigo, his discipline,
          tactical precision, and brand-safe presentation make him a premium
          choice for sponsors seeking authentic performance storytelling.
        </p>

        <div className="divider my-12" />

        <SectionHeading
          eyebrow="Achievements"
          title="Selected titles"
          subtitle="Highlighting the most relevant sponsor-facing accolades."
        />
        <ul className="grid md:grid-cols-2 gap-4 text-muted">
          {achievements.map((achievement) => (
            <li key={achievement.title} className="card p-4">
              {achievement.title}
            </li>
          ))}
        </ul>
        <p className="text-muted mt-6">
          Amateur record: 44-6. Unbeaten in the last two years.
        </p>

        <div className="divider my-12" />

        <SectionHeading
          eyebrow="Assets"
          title="Brand-ready visuals"
          subtitle="Headshots, action shots, and logos (placeholders)."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {['Headshots', 'Action shots', 'Logos'].map((label) => (
            <div key={label} className="card p-4 text-center text-muted">
              {label} - TBA
            </div>
          ))}
        </div>

        <div className="divider my-12" />

        <SectionHeading
          eyebrow="Brand Guidelines"
          title="Colour, typography, and naming"
          subtitle="Keep messaging aligned with a premium sports aesthetic."
        />
        <div className="grid md:grid-cols-2 gap-6 text-muted">
          <div className="card p-6">
            <p className="text-ink">Colour palette</p>
            <p className="mt-2">Near-black base, gold accent, neutral ink.</p>
          </div>
          <div className="card p-6">
            <p className="text-ink">Typography</p>
            <p className="mt-2">Display: Cinzel. Body: Manrope.</p>
          </div>
          <div className="card p-6">
            <p className="text-ink">Name usage</p>
            <p className="mt-2">
              Use full name: Daniel Stoican Raj. Avoid nicknames unless approved.
            </p>
          </div>
          <div className="card p-6">
            <p className="text-ink">Reference style</p>
            <p className="mt-2">
              "Amateur champion turning pro soon." No dates or records added.
            </p>
          </div>
        </div>

        <div className="divider my-12" />

        <SectionHeading
          eyebrow="Contact"
          title="Sponsor enquiries"
          subtitle="Reach the team for packages and custom activations."
        />
        <div className="card p-6 text-muted">
          <p>Email: {site.email}</p>
          <p>Location: NG4 2SR, Nottingham</p>
          <p>Media delivery: 48 hours</p>
        </div>
      </div>
    </main>
  );
}
