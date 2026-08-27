'use client';

import { useState } from 'react';

const lenses = [
  {
    id: 'lens',
    label: 'Through a lens',
    title: 'Photography makes me slow down.',
    copy: 'Code rewards speed. Photography rewards waiting: for light, framing, and the small detail that gives a scene its structure. It is where I practice noticing before changing anything.',
    note: 'COURSEWORK · COMPOSITION · LIGHT',
  },
  {
    id: 'movement',
    label: 'Inside a movement',
    title: 'Mechanical watches make complexity tangible.',
    copy: 'I follow Seiko closely, especially Spring Drive—the quiet engineering compromise between a mechanical movement and electronic regulation. The appeal is not status; it is seeing hundreds of decisions coexist in something small enough to wear.',
    note: 'SEIKO · SPRING DRIVE · MECHANISMS',
  },
  {
    id: 'rack',
    label: 'Behind the rack',
    title: 'My homelab is a place to operate, not just build.',
    copy: 'A Windows server, Docker services, Jellyfin, Tailscale, remote access, and virtualization turn systems ideas into everyday responsibility. If a service stops working, I am both the engineer and the user waiting for it.',
    note: 'DOCKER · JELLYFIN · TAILSCALE · VMS',
  },
] as const;

export function PersonalLens() {
  const [active, setActive] = useState(0);
  const current = lenses[active];
  return (
    <section className={`personal-lens lens-${current.id}`} aria-labelledby="personal-lens-title">
      <div className="lens-tabs" role="tablist" aria-label="Explore Aakkash's interests">
        {lenses.map((lens, index) => <button aria-selected={active === index} key={lens.id} onClick={() => setActive(index)} role="tab">{lens.label}</button>)}
      </div>
      <div className="lens-stage" role="tabpanel">
        <div className="lens-visual" aria-hidden="true"><div className="lens-object"><i /><i /><i /></div><span>{String(active + 1).padStart(2, '0')} / 03</span></div>
        <div className="lens-copy"><p className="section-label">One instinct, three outlets</p><h2 id="personal-lens-title">{current.title}</h2><p>{current.copy}</p><small>{current.note}</small></div>
      </div>
    </section>
  );
}
