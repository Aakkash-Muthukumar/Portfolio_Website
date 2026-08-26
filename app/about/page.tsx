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
      <PageIntro eyebrow="About" title="Curious about the whole stack, not just the convenient layer." copy="I’m a computer scientist from the Bay Area, moving to San Diego for graduate study. I like projects that force me to understand how the pieces connect, whether that means a model’s failure modes, an agent’s latency, or a CPU’s transition into long mode." />
      <section className="about-grid">
        <div className="about-portrait" aria-label="A graphic monogram for Aakkash Muthukumar"><span>AM</span><small>BAY AREA → SAN DIEGO</small></div>
        <div className="about-story">
          <p className="large-copy">I tend to learn by taking on work before I feel completely ready, then closing the gap through careful building and debugging.</p>
          <p>That approach helped me complete my bachelor’s degree in three years while balancing technical projects, hackathons, an internship, coursework, leadership, and work as a Learning Assistant.</p>
          <p>My current interests span machine learning systems, open-weight models, low-level software, developer tooling, and the practical questions that appear when AI moves from a demo into a real workflow.</p>
          <p>Outside of engineering, photography gives me a different way to explore the world: slower, more observational, and focused on details that are easy to miss.</p>
        </div>
      </section>
      <section className="principles">
        <p className="section-label">How I work</p>
        <div className="principle-grid">
          <article><span>01</span><h2>Start with evidence.</h2><p>Benchmarks, compiler output, traces, and user behavior beat assumptions.</p></article>
          <article><span>02</span><h2>Understand the layer below.</h2><p>Abstractions are useful, but the hard bugs often live underneath them.</p></article>
          <article><span>03</span><h2>Make it explainable.</h2><p>Good engineering is easier to review, teach, debug, and improve.</p></article>
        </div>
      </section>
      <section className="community-strip"><div><p className="kicker">Beyond coursework</p><h2>Community is part of the work.</h2></div><p>I’ve helped organize programming and computer-science events through CSU East Bay’s Recreational Math and Computer Science Club, participated in MESA U, completed Hack the Hood’s Build: Data Science program, and built with multidisciplinary hackathon teams.</p></section>
      <SiteFooter />
    </main>
  );
}
