'use client';

import { useState } from 'react';
import MotionReveal from './MotionReveal';
import SectionHeading from './SectionHeading';
import { site } from '@/lib/content';

const interests = [
  'Kit placement',
  'Socials',
  'Appearances',
  'Title sponsor'
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      company: String(formData.get('company') ?? ''),
      budget: String(formData.get('budget') ?? ''),
      message: String(formData.get('message') ?? ''),
      website: String(formData.get('website') ?? ''),
      interests: formData.getAll('interests').map((item) => String(item))
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json();
        setStatus('error');
        setMessage(data?.message ?? 'Something went wrong.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage('Unable to send right now. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Start a premium sponsorship conversation"
          subtitle="Share your goals and we will respond with a tailored sponsor pack and activation plan."
        />
        <MotionReveal>
          <div className="card p-6 md:p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <label className="text-sm">
                  Name
                  <input
                    className="mt-2 w-full rounded-[var(--radius-md)] bg-surface border border-white/10 p-3 focus-ring"
                    name="name"
                    required
                  />
                </label>
                <label className="text-sm">
                  Email
                  <input
                    type="email"
                    className="mt-2 w-full rounded-[var(--radius-md)] bg-surface border border-white/10 p-3 focus-ring"
                    name="email"
                    required
                  />
                </label>
              </div>
              <label className="text-sm">
                Company
                <input
                  className="mt-2 w-full rounded-[var(--radius-md)] bg-surface border border-white/10 p-3 focus-ring"
                  name="company"
                />
              </label>
              <label className="text-sm">
                Budget range
                <select
                  className="mt-2 w-full rounded-[var(--radius-md)] bg-surface border border-white/10 p-3 focus-ring"
                  name="budget"
                  required
                >
                  <option value="">Select one</option>
                  <option value="Under GBP 5k">Under GBP 5k</option>
                  <option value="GBP 5k - GBP 15k">GBP 5k - GBP 15k</option>
                  <option value="GBP 15k - GBP 30k">GBP 15k - GBP 30k</option>
                  <option value="GBP 30k+">GBP 30k+</option>
                  <option value="TBA">TBA</option>
                </select>
              </label>
              <fieldset>
                <legend className="text-sm">Interests</legend>
                <div className="mt-2 grid sm:grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        className="accent-[var(--color-gold)]"
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="text-sm">
                Message
                <textarea
                  className="mt-2 w-full rounded-[var(--radius-md)] bg-surface border border-white/10 p-3 min-h-[140px] focus-ring"
                  name="message"
                  required
                />
              </label>
              <div className="hidden">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <button
                type="submit"
                className="bg-gold text-background px-6 py-3 rounded-full font-semibold focus-ring"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send enquiry'}
              </button>
              {status === 'success' ? (
                <p className="text-gold text-sm">
                  Thanks. Your request is in. We will be in touch shortly.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="text-red-300 text-sm">{message}</p>
              ) : null}
            </form>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-xs">
                  Direct contact
                </p>
                <p className="text-2xl mt-3">{site.email}</p>
                <p className="text-muted mt-2">{site.phone}</p>
                <p className="text-muted mt-2">
                  Response window: 48 hours. Sponsor packs shared on request.
                </p>
              </div>
              <a
                href={`mailto:${site.email}`}
                className="border border-gold/60 text-ink px-5 py-3 rounded-full text-center font-semibold hover:border-gold focus-ring"
              >
                Email Daniel's team
              </a>
              <a
                href={`tel:${site.phone}`}
                className="mt-3 border border-white/10 text-ink px-5 py-3 rounded-full text-center font-semibold hover:border-gold focus-ring"
              >
                Call the team
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
