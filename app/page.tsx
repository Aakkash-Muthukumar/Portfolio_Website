import Link from 'next/link';
import { ProjectCard, SiteFooter, SiteHeader } from '@/app/components';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="hero-main">
          <p className="kicker">Software engineer · ML & systems</p>
          <h1>Building intelligent software from the model down to the machine.</h1>
          <p className="hero-summary">I’m Aakkash, an incoming M.S. Computer Science student at UC San Diego. I work across machine learning, systems programming, and developer tools.</p>
          <div className="hero-links"><Link className="button button-dark" href="/work">View selected work <span>→</span></Link><a className="button button-quiet" href="mailto:Aakkash7153@gmail.com">Get in touch</a></div>
        </div>
        <aside className="profile-card" aria-label="Profile summary">
          <div className="profile-status"><span /> Available for 2027 opportunities</div>
          <dl><div><dt>Now</dt><dd>Incoming M.S. CS<br />UC San Diego</dd></div><div><dt>Previously</dt><dd>B.S. Computer Science<br />Summa Cum Laude</dd></div><div><dt>Based in</dt><dd>Bay Area, California</dd></div></dl>
          <div className="profile-foot">AI / ML <i>·</i> Systems <i>·</i> Software</div>
        </aside>
      </section>

      <section className="home-proof" aria-label="Career highlights">
        <div><strong>≈17K</strong><span>Images in ML training corpus</span></div>
        <div><strong>&gt;70%</strong><span>Manual processing time reduced</span></div>
        <div><strong>3 years</strong><span>B.S. Computer Science completed</span></div>
        <div><strong>25</strong><span>CS students supported</span></div>
      </section>

      <section className="home-work">
        <div className="section-intro"><p className="section-label">01 / Selected work</p><h2>Projects with technical depth.</h2><Link href="/work">See all projects <span>→</span></Link></div>
        <div className="home-work-grid">{projects.slice(0, 3).map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
      </section>

      <section className="home-experience">
        <div className="home-experience-heading"><p className="section-label">02 / Experience</p><h2>Engineering and teaching reinforce each other.</h2><p>I’ve built automation for a design studio, taught AI workflows to non-technical colleagues, and helped computer science students debug code from Python fundamentals to segmentation faults.</p><Link href="/experience">Full experience & education <span>→</span></Link></div>
        <div className="home-role-list">
          <article><time>2026–Present</time><div><h3>Course Learning Assistant</h3><p>STEM Lab · CSU East Bay</p></div><span>Python · C · gdb</span></article>
          <article><time>2025</time><div><h3>Automation Intern</h3><p>Bridge UX Design Studios</p></div><span>n8n · LLM workflows</span></article>
          <article><time>Fall 2026</time><div><h3>M.S. Computer Science</h3><p>University of California, San Diego</p></div><span>Incoming student</span></article>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-mark" aria-hidden="true"><span>AM</span><small>Bay Area, CA</small></div>
        <div><p className="section-label">03 / A little more personal</p><h2>I like understanding how the pieces connect.</h2><p>Whether I’m inspecting a model’s attention map, benchmarking local inference, or stepping a processor into long mode, I’m most engaged when a project reveals the system beneath the interface.</p><p>Outside code, photography keeps me observant and curious about the world around me.</p><Link href="/about">More about me <span>→</span></Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}
