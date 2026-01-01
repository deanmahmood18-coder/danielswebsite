import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-16">
      <div className="container-x flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted">
        <p>(c) {new Date().getFullYear()} Daniel Stoican Raj. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/media-kit" className="hover:text-ink">
            Media Kit
          </Link>
          <Link href="/sponsors" className="hover:text-ink">
            Sponsorship
          </Link>
          <Link href="/updates" className="hover:text-ink">
            Updates
          </Link>
        </div>
      </div>
    </footer>
  );
}
