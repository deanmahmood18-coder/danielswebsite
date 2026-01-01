import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { packages, sponsorInventory } from '@/lib/content';

export default function SponsorsPage() {
  return (
    <main className="pt-16 pb-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Sponsorship"
          title="Packages built for premium brand alignment"
          subtitle="Choose a partnership tier or request a bespoke package for Daniel's pro transition. All current placements are available."
        />
        <div className="grid gap-6">
          {packages.map((tier) => (
            <div key={tier.name} className="card p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl">{tier.name}</h3>
                  <p className="text-muted mt-2">{tier.summary}</p>
                </div>
                <Link
                  href="/media-kit"
                  className="bg-gold text-background px-4 py-2 rounded-full text-sm font-semibold focus-ring"
                >
                  Request sponsor pack
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
          ))}
        </div>
        <div className="divider my-12" />
        <SectionHeading
          eyebrow="Inventory"
          title="Sponsor placements"
          subtitle="Availability updated as packages are confirmed."
        />
        <div className="card p-6">
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
    </main>
  );
}
