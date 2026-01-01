import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import SocialProof from '@/components/SocialProof';
import Sponsorship from '@/components/Sponsorship';
import Story from '@/components/Story';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="divider" />
      <Achievements />
      <div className="divider" />
      <Story />
      <div className="divider" />
      <Highlights />
      <div className="divider" />
      <Sponsorship />
      <div className="divider" />
      <SocialProof />
      <div className="divider" />
      <Contact />
    </main>
  );
}
