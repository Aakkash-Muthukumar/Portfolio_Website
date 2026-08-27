/* eslint-disable @next/next/no-html-link-for-pages -- Vinext's client Link shim fails at runtime; hard navigation is intentional. */
import { ProjectCard, SiteFooter, SiteHeader } from '@/app/components';
import { getProject } from '@/lib/projects';

const featuredProjects = [
  getProject('custom-64-bit-operating-system')!,
  getProject('ai-malware-triage')!,
  getProject('stem-forge')!,
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="hero-main">
          <p className="kicker">Portfolio · Software engineer · AI & systems</p>
          <h1>I build intelligent software that shows its work.</h1>
          <p className="hero-summary">I’m Aakkash, an M.S. Computer Science student at UC San Diego. I build AI products, low-level systems, and learning tools with observable behavior, defensible decisions, and a clear purpose.</p>
          <div className="hero-links"><a className="button button-dark" href="/work">View selected work <span>→</span></a><a className="button button-quiet" href="mailto:Aakkash7153@gmail.com">Get in touch</a></div>
        </div>
        <aside className="profile-card" aria-label="Profile summary">
          <div className="profile-status"><span /> Available for 2027 opportunities</div>
          <dl><div><dt>Now</dt><dd>M.S. Computer Science<br />UC San Diego</dd></div><div><dt>Previously</dt><dd>B.S. Computer Science<br />Summa Cum Laude</dd></div><div><dt>Built around</dt><dd>AI · Systems<br />Security · Teaching</dd></div></dl>
          <div className="profile-foot">AI products <i>·</i> Systems <i>·</i> Teaching</div>
        </aside>
      </section>

      <section className="home-proof" aria-label="Career highlights">
        <div><strong>≈17K</strong><span>Images in an interpretable ML pipeline</span></div>
        <div><strong>&gt;70%</strong><span>Manual work removed through automation</span></div>
        <div><strong>Best AI</strong><span>Integration award at MESA U Hacks</span></div>
        <div><strong>3 years</strong><span>B.S. completed Summa Cum Laude</span></div>
      </section>

      <section className="home-work">
        <div className="section-intro"><p className="section-label">01 / Selected work</p><h2>Projects with technical depth.</h2><a href="/work">See all projects <span>→</span></a></div>
        <div className="home-work-grid">{featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
      </section>

      <section className="home-experience">
        <div className="home-experience-heading"><p className="section-label">02 / Experience</p><h2>Engineering and teaching reinforce each other.</h2><p>I’ve built automation for a design studio, taught AI workflows to non-technical colleagues, and helped computer science students debug code from Python fundamentals to segmentation faults.</p><a href="/experience">Full experience & education <span>→</span></a></div>
        <div className="home-role-list">
          <article><time>2026–Present</time><div><h3>Course Learning Assistant</h3><p>STEM Lab · CSU East Bay</p></div><span>Python · C · gdb</span></article>
          <article><time>2025</time><div><h3>Automation Intern</h3><p>Bridge UX Design Studios</p></div><span>n8n · LLM workflows</span></article>
          <article><time>2026–Present</time><div><h3>M.S. Computer Science</h3><p>University of California, San Diego</p></div><span>Graduate student</span></article>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-mark" aria-hidden="true"><span>AM</span><small>Bay Area, CA</small></div>
        <div><p className="section-label">03 / A little more personal</p><h2>My favorite question is usually: what’s happening underneath?</h2><p>That question has taken me from Grad-CAM attention maps to local language models, a hand-written bootloader, and the Linux and Windows systems I run every day.</p><p>I bring the same instinct to teaching: help someone reason through the failure, not memorize the fix. Photography and mechanical watches give that curiosity a slower, more physical outlet away from the terminal.</p><a href="/personal">Step away from the résumé <span>→</span></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
