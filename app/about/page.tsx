import type { Metadata } from 'next';
import { PageIntro, SiteFooter, SiteHeader } from '@/app/components';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Aakkash Muthukumar, a software engineer working across machine learning and systems.',
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="About" title="I’m happiest when the black box becomes understandable." copy="I’m a computer scientist from the Bay Area, moving to San Diego for graduate study. My work moves between AI and systems, but the throughline is consistent: make the complicated thing observable, defensible, and useful to someone." />
      <section className="about-grid">
        <div className="about-portrait" aria-label="A graphic monogram for Aakkash Muthukumar"><span>AM</span><small>BAY AREA → SAN DIEGO</small></div>
        <div className="about-story">
          <p className="large-copy">I tend to learn by taking on work before I feel completely ready, then closing the gap by building, tracing, breaking, and rebuilding.</p>
          <p>That approach helped me complete my bachelor’s degree in three years while balancing technical projects, hackathons, an internship, coursework, leadership, and work as a Learning Assistant.</p>
          <p>My projects look broad on paper—medical imaging, local models, accessibility, security tooling, RAG, Linux, and an operating system—but they keep returning to the same ideas: evidence over magic, local execution where it matters, and interfaces that help people understand what the system is doing.</p>
          <p>Arch Linux and Hyprland are my daily environment, not résumé decoration. Maintaining that setup keeps me close to the details. Photography gives me a different way to practice the same attention: slower, more observational, and focused on what is easy to miss.</p>
        </div>
      </section>
      <section className="principles">
        <p className="section-label">How I work</p>
        <div className="principle-grid">
          <article><span>01</span><h2>Evidence over magic.</h2><p>Benchmarks, source links, attention maps, compiler output, and traces make decisions reviewable.</p></article>
          <article><span>02</span><h2>Local when it matters.</h2><p>Privacy, access, and responsiveness are why several of my AI projects run fully on-device.</p></article>
          <article><span>03</span><h2>Teach the reasoning.</h2><p>The goal is not only to fix the bug. It is to help someone recognize the next one themselves.</p></article>
        </div>
      </section>
      <section className="community-strip"><div><p className="kicker">Beyond coursework</p><h2>Community is part of the work.</h2></div><p>I mentored incoming students through MESA, co-led a 30-member recreational math and computer science club, and earlier spent two years leading a Tamil youth organization that raised funds and prepared meals for local homeless shelters. The settings changed; the instinct to make things more approachable did not.</p></section>
      <SiteFooter />
    </main>
  );
}
