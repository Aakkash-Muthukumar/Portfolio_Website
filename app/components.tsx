/* eslint-disable @next/next/no-html-link-for-pages -- Vinext's client Link shim fails at runtime; hard navigation is intentional. */
import type { Project } from '@/lib/projects';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/">Aakkash Muthukumar</a>
      <nav aria-label="Primary navigation">
        <a href="/work">Work</a>
        <a href="/experience">Experience</a>
        <a href="/about">About</a>
      </nav>
      <a className="header-cta" href="/Aakkash-Muthukumar-Resume.pdf" target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
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
        <div><a href="https://linkedin.com/in/aakkashmuthukumar" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Aakkash-Muthukumar" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        <a href="/">Home ↑</a>
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
  if (slug === 'scaffold-writing-assistant') {
    return <div className="artwork artwork-scaffold"><div className="rubric"><p>WRITING PLAN</p><span><i /> Interpret the prompt</span><span><i /> Build an argument</span><span><i /> Support with evidence</span><span className="active"><i /> Revise for clarity</span><b>68% complete</b></div></div>;
  }
  if (slug === 'ai-malware-triage') {
    return <div className="artwork artwork-security"><div className="security-stack"><p>STATIC ANALYSIS</p><span><b>01</b> File type + PE headers <i>verified</i></span><span><b>02</b> YARA indicators <i>verified</i></span><span><b>03</b> Model interpretation <i>inferred</i></span><strong>NO EXECUTION · FAIL CLOSED</strong></div></div>;
  }
  if (slug === 'stem-forge') {
    return <div className="artwork artwork-learning"><div className="learning-card"><p>STEM FORGE</p><h3>What do you want to learn?</h3><div><span>Adaptive quiz</span><span>Coding lab</span><span>Custom course</span></div><b>LOCAL MODEL · READY</b></div></div>;
  }
  if (slug === 'real-time-asl-translator') {
    return <div className="artwork artwork-signal"><div className="signal-card"><span>CAMERA INPUT</span><div className="signal-wave"><i /><i /><i /><i /><i /></div><strong>GESTURE → TEXT → SPEECH</strong><small>OFFLINE · PRIVATE</small></div></div>;
  }
  if (slug === 'youtube-rag-chatbot') {
    return <div className="artwork artwork-rag"><div className="rag-flow"><span>TRANSCRIPT</span><b>→</b><span>MILVUS</span><b>→</b><span>ANSWER</span><small>Source 12:42 ↗</small></div></div>;
  }
  if (slug === 'custom-linux-environment') {
    return <div className="artwork artwork-os"><div className="terminal"><div className="terminal-head"><i /><i /><i /></div><code><span>systemctl:</span> active<br /><span>journal:</span> clean<br /><span>hyprland:</span> ready<br /><span>permissions:</span> verified<br /><b>aakkash@arch ~ $ _</b></code></div></div>;
  }
  return <div className="artwork artwork-roles"><div className="role-map"><p>ENROLLMENT NETWORK</p><div><span>STUDENT</span><span>INSTRUCTOR</span><span>ADMIN</span></div><strong>TCP/IP · ROLE-BASED ACCESS</strong></div></div>;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a className="work-card" href={`/work/${project.slug}`}>
      <ProjectArtwork slug={project.slug} />
      <div className="work-card-copy">
        <div className="work-card-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.year}</span></div>
        <p className="project-type">{project.discipline}</p>
        <h2>{project.shortTitle}</h2>
        <p>{project.summary}</p>
        <ul>{project.technologies.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <span className="case-link">View case study <b>↗</b></span>
      </div>
    </a>
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
