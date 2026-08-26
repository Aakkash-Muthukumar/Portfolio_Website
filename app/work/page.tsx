import type { Metadata } from 'next';
import { PageIntro, ProjectCard, SiteFooter, SiteHeader } from '@/app/components';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'AI products, machine learning, accessibility, low-level systems, and developer-tool projects by Aakkash Muthukumar.',
};

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Selected work · 2024–2026" title="Different projects. One consistent instinct: understand the system." copy="From an offline ASL translator and award-winning education platform to malware triage, source-linked RAG, and a 64-bit operating system. Each case study explains the decisions—not just the stack." />
      <section className="work-list">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
      </section>
      <SiteFooter />
    </main>
  );
}
