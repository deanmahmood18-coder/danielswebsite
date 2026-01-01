import SectionHeading from '@/components/SectionHeading';
import { updates } from '@/lib/content';

export default function UpdatesPage() {
  return (
    <main className="pt-16 pb-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Updates"
          title="Latest training and sponsorship notes"
          subtitle="A concise feed for sponsors tracking progress and planning activations."
        />
        <div className="grid gap-6">
          {updates.map((update) => (
            <div key={update.title} className="card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl">{update.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-gold">
                  {update.status}
                </span>
              </div>
              <p className="text-muted mt-2">{update.summary}</p>
              <p className="text-muted text-sm mt-4">{update.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
