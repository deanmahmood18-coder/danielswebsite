import Image from 'next/image';
import MotionReveal from './MotionReveal';
import SectionHeading from './SectionHeading';

export default function Story() {
  return (
    <section id="story" className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Story"
          title="A disciplined athlete built for premium partnerships"
          subtitle="Daniel brings a dual-national pedigree, relentless preparation, and a focused path toward a pro debut."
        />
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <MotionReveal>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                Daniel Stoican Raj has built his reputation through high-level
                amateur competition, earning major titles across Europe and the
                UK. He is the first athlete from the East Midlands since Carl Froch
                to win the national title. His approach is clean, tactical, and
                disciplined, supported by a team that prioritises performance,
                professionalism, and brand safety for partners.
              </p>
              <p className="text-muted leading-relaxed">
                Daniel grew up in an underprivileged background, moving from
                Romania to Sneinton with limited access to food or clothing. Boxing
                became the success story, and he is now viewed as the hottest
                prospect in the country. He is regarded as the best prospect since
                Bendigo, and his record stands at 44-6 with no losses in the last
                two years. Sponsors can expect reliable communication, consistent
                media integration, and a clear narrative as Daniel prepares for the
                next stage of his career.
              </p>
              <div className="card p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-gold">
                  Quote
                </p>
                <p className="text-lg mt-3">
                  "If Daniel doesn't become a world champion something's gone wrong
                  with his management."
                </p>
                <p className="text-muted mt-3 text-sm">
                  - Dale McPhilbin (Carl Froch's former coach and ex GB Olympic
                  coach)
                </p>
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="space-y-6">
              <div className="card p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
                  <Image
                    src="/images/IMG_1012.jpg"
                    alt="Training portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="card p-6">
                <p className="text-gold uppercase tracking-[0.2em] text-xs">
                  What's next
                </p>
                <div className="mt-6 space-y-6">
                  {[
                    {
                      title: 'Training camp focus',
                      detail: 'Strength, speed, and ring craft refinement.'
                    },
                    {
                      title: 'Next bout',
                      detail: 'Boxing World Cup in Brazil at 70kg (April).'
                    },
                    {
                      title: 'Pro transition',
                      detail: 'Team and sponsorship alignment for 2026.'
                    }
                  ].map((item, index) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="text-gold font-semibold">0{index + 1}</span>
                      <div>
                        <p className="text-lg">{item.title}</p>
                        <p className="text-muted mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
