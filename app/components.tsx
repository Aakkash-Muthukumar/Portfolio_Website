import Link from 'next/link';
import type { Project } from '@/lib/projects';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">Aakkash Muthukumar</Link>
      <nav aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/about">About</Link>
      </nav>
      <a className="header-cta" href="/Aakkash-Muthukumar-Resume.pdf">Résumé <span>↗</span></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-label">Contact</p>
        <h2>Have a role, research question, or hard problem worth discussing?</h2>
        <a className="footer-email" href="mailto:Aakkash7153@gmail.com">Aakkash7153@gmail.com <span>↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Aakkash Muthukumar</span>
        <div><a href="https://linkedin.com/in/aakkashmuthukumar">LinkedIn ↗</a><a href="https://github.com/Aakkash-Muthukumar">GitHub ↗</a></div>
        <Link href="/">Home ↑</Link>
      </div>
    </footer>
  );
}

export function ProjectArtwork({ slug }: { slug: string }) {
  if (slug === 'radiography-classification') {
    return <div className="artwork artwork-radiography"><div className="scan-frame"><div className="scan-lung left" /><div className="scan-lung right" /><div className="heat heat-one" /><div className="heat heat-two" /><span>GRAD-CAM / MODEL ATTENTION</span></div></div>;
  }
  if (slug === 'open-weight-llm-benchmarking') {
    return <div className="artwork artwork-benchmark"><div className="benchmark-chart"><span className="axis x" /><span className="axis y" /><i className="bar b1" /><i className="bar b2" /><i className="bar b3" /><i className="bar b4" /><b>QUALITY</b><em>LATENCY</em></div></div>;
  }
  if (slug === 'custom-64-bit-operating-system') {
    return <div className="artwork artwork-os"><div className="terminal"><div className="terminal-head"><i /><i /><i /></div><code><span>boot:</span> entering long mode<br /><span>gdt:</span> loaded<br /><span>paging:</span> initialized<br /><span>kernel:</span> ready<br /><b>akkash-os&gt; _</b></code></div></div>;
  }
  return <div className="artwork artwork-scaffold"><div className="rubric"><p>WRITING PLAN</p><span><i /> Interpret the prompt</span><span><i /> Build an argument</span><span><i /> Support with evidence</span><span className="active"><i /> Revise for clarity</span><b>68% complete</b></div></div>;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link className="work-card" href={`/work/${project.slug}`}>
      <ProjectArtwork slug={project.slug} />
      <div className="work-card-copy">
        <div className="work-card-meta"><span>0{index + 1}</span><span>{project.year}</span></div>
        <p className="project-type">{project.discipline}</p>
        <h2>{project.shortTitle}</h2>
        <p>{project.summary}</p>
        <ul>{project.technologies.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <span className="case-link">View case study <b>↗</b></span>
      </div>
    </Link>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-intro">
      <p className="kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}
