'use client';

import Image from 'next/image';
import { useState } from 'react';
import MotionReveal from './MotionReveal';
import SectionHeading from './SectionHeading';
import Lightbox from './Lightbox';
import { gallery } from '@/lib/content';

export default function Highlights() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="highlights" className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Highlights"
          title="Media-ready visuals for sponsor activation"
          subtitle="Curated footage and photography slots ready for premium brand storytelling."
        />
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <MotionReveal>
            <div className="card p-4">
              <div className="relative aspect-video overflow-hidden rounded-[var(--radius-md)] border border-white/10">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/video/instagram-reel.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <p className="text-muted text-sm mt-4">
                Highlight reel: Instagram (local video file). Full media pack available
                for partners.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="columns-2 md:columns-3 gap-4">
              {gallery.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className="relative mb-4 w-full overflow-hidden rounded-[var(--radius-md)] border border-white/10 focus-ring break-inside-avoid"
                  onClick={() => setActiveImage(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className={`w-full h-full ${
                      item.fit === 'contain' ? 'object-contain bg-black/20' : 'object-cover'
                    }`}
                  />
                  <span className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition" />
                </button>
              ))}
            </div>
          </MotionReveal>
        </div>
        <Lightbox
          src={activeImage?.src ?? null}
          alt={activeImage?.alt ?? 'Gallery image'}
          onClose={() => setActiveImage(null)}
        />
      </div>
    </section>
  );
}
