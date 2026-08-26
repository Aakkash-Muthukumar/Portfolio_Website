import type { Metadata } from 'next';
import { PageIntro, ProjectCard, SiteFooter, SiteHeader } from '@/app/components';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Machine learning, AI systems, low-level systems, and developer-tool projects by Aakkash Muthukumar.',
};

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Selected work · 2024–2026" title="Engineering work, explained beyond the headline." copy="Machine learning, local AI evaluation, low-level systems, and product prototypes. Each case study focuses on the problem, the technical decisions, and what the build taught me." />
      <section className="work-list">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
      </section>
      <SiteFooter />
    </main>
  );
}
