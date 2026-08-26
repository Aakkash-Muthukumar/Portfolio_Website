import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectArtwork, SiteFooter, SiteHeader } from '@/app/components';
import { getProject, projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: `${project.title} | Aakkash Muthukumar`, description: project.summary, images: [] },
    twitter: { title: `${project.title} | Aakkash Muthukumar`, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <main>
      <SiteHeader />
      <article className="case-study">
        <header className="case-hero">
          <div><p className="kicker">Case study · {project.year}</p><h1>{project.title}</h1><p>{project.summary}</p></div>
          <dl><div><dt>Discipline</dt><dd>{project.discipline}</dd></div><div><dt>Technology</dt><dd>{project.technologies.join(' · ')}</dd></div></dl>
        </header>
        <ProjectArtwork slug={project.slug} />
        <section className="case-overview"><p className="section-label">Overview</p><p>{project.overview}</p></section>
        <section className="metric-grid">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</section>
        <section className="case-section"><div><p className="section-label">The challenge</p><h2>What made the problem worth solving</h2></div><p>{project.challenge}</p></section>
        <section className="case-section approach-section"><div><p className="section-label">The approach</p><h2>Turning the problem into an engineering plan</h2></div><ol>{project.approach.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol></section>
        <section className="case-result"><p className="section-label">Result</p><p>{project.result}</p></section>
        <Link className="next-project" href={`/work/${nextProject.slug}`}><span>Next case study</span><strong>{nextProject.shortTitle}</strong><b>→</b></Link>
      </article>
      <SiteFooter />
    </main>
  );
}
