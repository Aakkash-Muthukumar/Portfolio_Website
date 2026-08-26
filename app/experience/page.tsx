import type { Metadata } from 'next';
import { PageIntro, SiteFooter, SiteHeader } from '@/app/components';

export const metadata: Metadata = {
  title: 'Experience & Education',
  description: 'Professional experience and computer science education for Aakkash Muthukumar.',
};

export default function ExperiencePage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Experience & education" title="Building, teaching, and learning in public." copy="My experience sits at the intersection of engineering execution and communication: shipping automation, helping students debug software, and building a broad foundation across AI and computer systems." />
      <section className="resume-layout">
        <aside><p>Experience</p><span>Professional and academic roles</span></aside>
        <div className="resume-entries">
          <article>
            <div className="entry-heading"><div><h2>Automation Intern</h2><p>Bridge UX Design Studios · Bangalore, India</p></div><time>May–July 2025</time></div>
            <ul>
              <li>Designed and shipped an AI-powered lead-finding system using n8n orchestration and LLM-based classification.</li>
              <li>Parsed structured records from inbound messages and reduced manual processing time by more than 70%.</li>
              <li>Created and delivered an AI-in-UX/UI workshop for five design stakeholders, translating model capabilities into reusable workflows.</li>
            </ul>
            <div className="entry-tags"><span>n8n</span><span>LLM workflows</span><span>Automation</span><span>Teaching</span></div>
          </article>
          <article>
            <div className="entry-heading"><div><h2>Course Learning Assistant</h2><p>STEM Lab, California State University, East Bay</p></div><time>Jan. 2026–Present</time></div>
            <ul>
              <li>Support 25 computer science students with Python and C programming across assignments and labs.</li>
              <li>Debug runtime errors, development environments, GCC, Makefiles, IDEs, and toolchain issues.</li>
              <li>Coach students through compiler output, gdb workflows, and systematic isolation of segmentation faults.</li>
            </ul>
            <div className="entry-tags"><span>Python</span><span>C</span><span>gdb</span><span>Mentorship</span></div>
          </article>
        </div>
      </section>

      <section className="resume-layout education-layout">
        <aside><p>Education</p><span>Computer science, from foundations to graduate study</span></aside>
        <div className="resume-entries">
          <article>
            <div className="entry-heading"><div><h2>University of California, San Diego</h2><p>Master of Science in Computer Science</p></div><time>2026–2028</time></div>
            <p className="entry-copy">Beginning graduate study with interests across artificial intelligence, machine learning, security, and software systems.</p>
          </article>
          <article>
            <div className="entry-heading"><div><h2>California State University, East Bay</h2><p>B.S. Computer Science · Summa Cum Laude</p></div><time>2023–2026</time></div>
            <p className="entry-copy">Completed the degree in three years. Dean’s List every term. Coursework included operating systems, computer architecture, networks, algorithms, software engineering, artificial intelligence, statistics, and linear algebra.</p>
            <div className="achievement-row"><div><strong>3.915</strong><span>Résumé GPA</span></div><div><strong>3 years</strong><span>Time to degree</span></div><div><strong>All terms</strong><span>Dean’s List</span></div></div>
          </article>
        </div>
      </section>

      <section className="resume-layout leadership-layout">
        <aside><p>Leadership</p><span>Making technical spaces more welcoming</span></aside>
        <div className="resume-entries">
          <article>
            <div className="entry-heading"><div><h2>MESA Bootup Mentor</h2><p>California State University, East Bay</p></div><time>Aug.–Dec. 2025</time></div>
            <p className="entry-copy">Guided incoming students through academic transition, career planning, and technical skill-building in a stipend-recognized mentorship role.</p>
          </article>
          <article>
            <div className="entry-heading"><div><h2>Vice President</h2><p>Recreational Math & Computer Science Club</p></div><time>2024–2026</time></div>
            <p className="entry-copy">Co-led a 30-member student organization and organized peer events blending strategy gameplay with computer science concepts for beginners.</p>
          </article>
          <article>
            <div className="entry-heading"><div><h2>President</h2><p>BKM Youth Club · Community service</p></div><time>2020–2022</time></div>
            <p className="entry-copy">Led a student volunteer organization that raised funds through community events and prepared meals for local homeless shelters.</p>
          </article>
        </div>
      </section>
      <section className="resume-download"><div><p className="kicker">Full details</p><h2>Prefer the traditional version?</h2><p>Download the one-page résumé with complete technologies, coursework, and contact information.</p></div><a className="button button-dark" href="/Aakkash-Muthukumar-Resume.pdf" target="_blank" rel="noreferrer">Download résumé <span>↗</span></a></section>
      <SiteFooter />
    </main>
  );
}
