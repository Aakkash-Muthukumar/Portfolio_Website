import type { Metadata } from 'next';
import { PageIntro, SiteFooter, SiteHeader } from '@/app/components';
import { PersonalLens } from './PersonalLens';

export const metadata: Metadata = {
  title: 'Personal',
  description: 'Photography, mechanical watches, homelab infrastructure, and the quieter interests behind Aakkash Muthukumar’s engineering work.',
};

export default function PersonalPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Off the résumé" title="The same curiosity, at a different speed." copy="Photography, mechanical watches, and a constantly evolving homelab are not side notes to how I think. They are three ways I practice observation, systems thinking, and patience away from project deadlines." />
      <PersonalLens />

      <section className="personal-notes">
        <div className="personal-notes-heading"><p className="section-label">Field notes</p><h2>What these interests give back to the work.</h2></div>
        <div className="note-grid">
          <article><span>01 / Observe</span><h3>Look before changing.</h3><p>A camera teaches me to examine the whole frame. Debugging benefits from the same discipline: gather evidence before reaching for a fix.</p></article>
          <article><span>02 / Understand</span><h3>Respect the mechanism.</h3><p>A watch movement is a reminder that elegant behavior comes from precise relationships between small parts—not from any single impressive component.</p></article>
          <article><span>03 / Operate</span><h3>Live with the system.</h3><p>Running services at home makes reliability personal. Documentation, recovery, networking, and maintainability matter when I depend on the result.</p></article>
        </div>
      </section>

      <section className="personal-closing">
        <p className="kicker">The throughline</p>
        <p>Whether I am tracing a boot sequence, framing a photograph, reading about Spring Drive, or fixing a container at midnight, I am usually trying to understand how a complicated thing becomes dependable.</p>
        <a href="/journey">See how that shaped the work <span>→</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
