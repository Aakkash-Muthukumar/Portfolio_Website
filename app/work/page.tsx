import type { Metadata } from 'next';
import { PageIntro, ProjectCard, SiteFooter, SiteHeader } from '@/app/components';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'AI products, machine learning, accessibility, low-level systems, and developer-tool projects by Aakkash Muthukumar.',
};

export default function WorkPage() {
  const flagshipProjects = projects.slice(0, 4);
  const additionalProjects = projects.slice(4);
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Selected work · 2024–2026" title="Different projects. One consistent instinct: understand the system." copy="From an offline ASL translator and award-winning education platform to malware triage, source-linked RAG, and a 64-bit operating system. Each case study explains the decisions—not just the stack." />
      <section className="work-list work-tier">
        <div className="work-tier-heading"><p className="section-label">Flagship work</p><p>The four projects that best represent my systems depth, AI engineering judgment, machine-learning foundation, and product execution.</p></div>
        {flagshipProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
      </section>
      <section className="work-list work-tier more-work">
        <div className="work-tier-heading"><p className="section-label">More builds</p><p>Local AI, agent evaluation, accessibility, retrieval, developer tools, Linux, networking, and human-centered product work.</p></div>
        {additionalProjects.map((project, index) => <ProjectCard project={project} index={index + flagshipProjects.length} key={project.slug} />)}
      </section>
      <SiteFooter />
    </main>
  );
}
