import React from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl mt-3">{title}</h2>
      {subtitle ? (
        <p className="text-muted mt-3 max-w-2xl leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
