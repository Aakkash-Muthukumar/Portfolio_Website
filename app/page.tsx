const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Aakkash Muthukumar, home">
          AM<span className="wordmark-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="availability"><i /> Open to ambitious work</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Aakkash Muthukumar · AI systems engineer</p>
          <h1>
            I build intelligence<br />
            that works <em>anywhere.</em>
          </h1>
          <p className="hero-intro">
            I design AI agents, offline-first tools, and software systems that make
            advanced technology useful beyond perfect networks and perfect conditions.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">Explore selected work <Arrow /></a>
            <a className="text-link" href="#about">A little about me</a>
          </div>
        </div>

        <div className="hero-object" aria-label="A visual map connecting Aakkash's interests in AI, systems, and access">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="signal signal-a"><span>01</span> LOCAL AI</div>
          <div className="signal signal-b"><span>02</span> AGENTS</div>
          <div className="signal signal-c"><span>03</span> SYSTEMS</div>
          <div className="core">
            <span>BUILDING FOR</span>
            <strong>the real<br />world</strong>
          </div>
          <p className="object-caption">ONLINE OPTIONAL · CURIOSITY REQUIRED</p>
        </div>
      </section>

      <section className="work-preview" id="work">
        <header className="section-heading">
          <p className="eyebrow">Selected work · 2025—2026</p>
          <h2>Ideas made tangible.</h2>
        </header>
        <article className="project-lead">
          <div className="project-index">01</div>
          <div className="project-copy">
            <p className="project-kicker">Offline AI · Education</p>
            <h3>Codivus</h3>
            <p>An offline-first AI learning environment that brings personalized programming education to classrooms with limited connectivity.</p>
            <ul aria-label="Technologies used">
              <li>React</li><li>FastAPI</li><li>Ollama</li><li>RAG</li>
            </ul>
          </div>
          <div className="project-mark" aria-hidden="true">
            <span>C</span><i>LOCAL / 01</i>
          </div>
        </article>

        <div className="project-grid">
          <article className="project-card project-card-orange">
            <div className="card-top"><span>02</span><span>AGENT EVALUATION</span></div>
            <div className="agent-graph" aria-hidden="true">
              <i className="node n1" /><i className="node n2" /><i className="node n3" /><i className="node n4" />
              <span className="trace t1" /><span className="trace t2" /><span className="trace t3" />
            </div>
            <div className="card-copy">
              <h3>BenchMind</h3>
              <p>Observability for AI agents: trace execution, measure correctness, inspect tool use, and compare behavior across runs.</p>
              <div className="tag-row"><span>LangGraph</span><span>LangChain</span><span>Python</span></div>
            </div>
          </article>

          <article className="project-card project-card-paper">
            <div className="card-top"><span>03</span><span>AWARD WINNER</span></div>
            <div className="forge-mark" aria-hidden="true"><span>S</span><span>F</span><i>★</i></div>
            <div className="card-copy">
              <p className="award-line">Best AI Integration · MESA U Hacks 2.0</p>
              <h3>STEM Forge</h3>
              <p>A local-first learning tool that keeps high-quality STEM guidance available when the internet is not.</p>
              <div className="tag-row"><span>Local AI</span><span>Education</span><span>Team build</span></div>
            </div>
          </article>
        </div>

        <div className="project-table" aria-label="Additional projects">
          <article>
            <span className="table-index">04</span>
            <div><h3>Project Cove</h3><p>Private, self-hosted media browsing and streaming</p></div>
            <span className="table-meta">NEXT.JS · FASTAPI · SQLITE</span>
          </article>
          <article>
            <span className="table-index">05</span>
            <div><h3>CuraPoint</h3><p>Accessible healthcare guidance powered by local AI</p></div>
            <span className="table-meta">FLUTTER · LOCAL INFERENCE</span>
          </article>
          <article>
            <span className="table-index">06</span>
            <div><h3>From boot to kernel</h3><p>A small x86 operating system built below the abstractions</p></div>
            <span className="table-meta">C · ASSEMBLY · QEMU</span>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-sticky">
          <p className="eyebrow">The through line</p>
          <h2>Useful beats<br /><em>impressive.</em></h2>
          <div className="mini-coordinate">
            <span>CSU EAST BAY</span><i>→</i><span>UC SAN DIEGO</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">I’m Aakkash, a computer scientist interested in what happens when AI leaves the demo and meets the real world.</p>
          <p>I finished my B.S. in Computer Science at CSU East Bay in about three years, graduating Summa Cum Laude. In Fall 2026, I’m beginning an M.S. in Computer Science at UC San Diego.</p>
          <p>My projects keep circling the same question: how can sophisticated technology become more accessible, dependable, and genuinely useful? Sometimes the answer is an offline tutor. Sometimes it is an agent evaluation system. Sometimes it means dropping down into Linux, C, or the boot process to understand the whole machine.</p>
          <blockquote>“Build for the conditions people actually have, not the conditions the demo assumes.”</blockquote>
          <div className="interest-list">
            <div><span>01</span><strong>Agents that can be trusted</strong></div>
            <div><span>02</span><strong>AI without the cloud dependency</strong></div>
            <div><span>03</span><strong>Systems understood end to end</strong></div>
            <div><span>04</span><strong>Technology as a door, not a gate</strong></div>
          </div>
        </div>
      </section>

      <section className="experience">
        <header className="experience-title">
          <p className="eyebrow">Experience & education</p>
          <h2>Learning by<br />building.</h2>
        </header>
        <div className="timeline">
          <article>
            <div className="time"><span>FALL 2026</span><i /></div>
            <div><h3>University of California, San Diego</h3><p>M.S. Computer Science</p><small>Graduate study across artificial intelligence, machine learning, and software systems.</small></div>
          </article>
          <article>
            <div className="time"><span>2026</span><i /></div>
            <div><h3>Bridge UX Design Studios</h3><p>Automation Intern</p><small>Built AI and n8n workflows for lead discovery, extraction, classification, and communication.</small></div>
          </article>
          <article>
            <div className="time"><span>2025—26</span><i /></div>
            <div><h3>CSU East Bay · STEM LAB</h3><p>Learning Assistant, CS 101</p><small>Helped students turn programming roadblocks into working mental models through labs and one-on-one debugging.</small></div>
          </article>
          <article>
            <div className="time"><span>MAY 2026</span><i /></div>
            <div><h3>California State University, East Bay</h3><p>B.S. Computer Science · Summa Cum Laude</p><small>Completed the degree in roughly three years, spanning AI, security, operating systems, and theory.</small></div>
          </article>
        </div>
      </section>

      <section className="capabilities">
        <p className="eyebrow">Tools are temporary. Fundamentals travel.</p>
        <div className="capability-marquee" aria-label="Technical capabilities">
          <span>AI Agents</span><i>·</i><span>Local Inference</span><i>·</i><span>RAG</span><i>·</i><span>Systems</span><i>·</i>
        </div>
        <div className="capability-columns">
          <div><h3>Languages</h3><p>Python, C, C++, Java, TypeScript, JavaScript, Bash, Assembly</p></div>
          <div><h3>AI systems</h3><p>LangGraph, LangChain, Ollama, Gemma, Milvus, vector search, computer vision</p></div>
          <div><h3>Engineering</h3><p>React, FastAPI, Flutter, Docker, Git, Linux, QEMU, MySQL, SQLite, n8n</p></div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-kicker"><span>Have an ambitious problem?</span><span>LET’S MAKE IT REAL · 2026</span></div>
        <h2>Let’s build something<br /><em>useful.</em></h2>
        <a className="email-link" href="mailto:amuthukumar@ucsd.edu">amuthukumar@ucsd.edu <Arrow /></a>
        <div className="footer-bottom">
          <span>Aakkash Muthukumar</span>
          <span>AI · SYSTEMS · ACCESS</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
