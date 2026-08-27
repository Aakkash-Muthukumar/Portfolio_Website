import type { Metadata } from 'next';
import { PageIntro, SiteFooter, SiteHeader } from '@/app/components';

export const metadata: Metadata = {
  title: 'Journey',
  description: 'The projects, academic transition, and personal infrastructure that shaped how Aakkash Muthukumar approaches engineering.',
};

export default function JourneyPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Dive deeper"
        title="The projects changed. The questions became sharper."
        copy="A closer look at how hackathons, teaching, internships, graduate study, and a growing homelab shaped the way I build: practical first, evidence-led, and curious about every layer of the system."
      />

      <section className="journey-section">
        <div className="journey-heading"><p className="section-label">01 / Project evolution</p><h2>From useful demos to systems with a point of view.</h2></div>
        <div className="journey-track">
          <article><span>Learn locally</span><h3>Codivus</h3><p>An offline AI programming-education platform combining local language models, FastAPI, React, Ollama, and retrieval-augmented generation.</p></article>
          <article><span>Evaluate agents</span><h3>BenchMind</h3><p>An agent benchmarking platform built at Cal Hacks, extending my interest from using models to measuring how intelligent systems behave.</p></article>
          <article><span>Build for access</span><h3>STEM Forge</h3><p>An accessibility-focused learning project recognized with Best AI Integration at MESA U Hacks.</p></article>
          <article><span>Design around people</span><h3>CuraPoint + Scaffold</h3><p>Healthcare access and structured writing tools that pushed the work beyond model capability toward workflow, clarity, and human agency.</p></article>
        </div>
      </section>

      <section className="journey-section journey-transition">
        <div className="journey-heading"><p className="section-label">02 / Academic transition</p><h2>Three undergraduate years built breadth. Graduate school is where I go deeper.</h2></div>
        <div className="transition-grid">
          <article><small>CSU East Bay · 2023–2026</small><strong>B.S. Computer Science</strong><p>Summa Cum Laude, Dean’s List every term, Learning Assistant for CS 101, MESA mentor, club leader, and a foundation spanning AI, security, operating systems, Linux, theory, biology, and photography.</p></article>
          <div aria-hidden="true">→</div>
          <article><small>UC San Diego · 2026–2028</small><strong>M.S. Computer Science</strong><p>Beginning graduate study with a focus on AI and machine learning while carrying forward the systems, security, and teaching perspective built during undergrad.</p></article>
        </div>
      </section>

      <section className="journey-section infrastructure-section">
        <div className="journey-heading"><p className="section-label">03 / Personal infrastructure</p><h2>The lab is where curiosity becomes muscle memory.</h2></div>
        <div className="infrastructure-grid">
          <div className="infra-console"><p>HOME_SERVER</p><span>Windows host</span><span>Docker services</span><span>Jellyfin media</span><span>Tailscale network</span><span>Remote desktop</span><span>Virtualization</span><b>STATUS · ALWAYS EVOLVING</b></div>
          <div className="infra-copy"><p>I maintain a Windows-based home server and keep expanding the surrounding homelab through containers, private networking, remote access, media services, and virtualization.</p><p>Alongside my Arch Linux daily driver, it gives me a place to learn by operating real systems—not only reading about them. The same patient attention shows up away from the keyboard in photography and my fascination with mechanical watches, especially Spring Drive and Seiko engineering.</p></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
