import { Link } from 'react-router-dom';
import Container from './Container.jsx';
import SectionHead from './SectionHead.jsx';
import PROJECTS from '../data/projects.js';

const MAX_FEATURED = 5;
const featured = PROJECTS.filter((p) => p.featured).slice(0, MAX_FEATURED);

export default function Work() {
  return (
    <section id="work" className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
      <Container>
        <SectionHead
          num="02"
          label="WORK"
          right={`${String(featured.length).padStart(2, '0')} OF ${PROJECTS.length} SHOWN`}
          title="Shipped last year."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              aria-label={`View ${p.name} case study`}
              className="bg-ink-800 border border-ink-700 rounded-sm overflow-hidden hover:border-imps-red transition-colors block cursor-pointer"
            >
              <div
                className="aspect-[4/3] flex items-center justify-center font-sans font-extrabold text-[36px] sm:text-[48px] tracking-[-0.03em]"
                style={{
                  background: p.card.bg,
                  color: p.card.fg,
                  borderBottom: p.card.border ? '1px solid #282C34' : 'none',
                }}
              >
                {p.name.toUpperCase()}
              </div>
              <div className="p-4 sm:p-[18px] flex justify-between items-baseline text-[12px] tracking-[0.1em] uppercase">
                <div className="text-white font-sans font-semibold tracking-normal normal-case text-[15px]">
                  {p.name}
                </div>
                <div className="text-ink-400">
                  {p.kind} &middot; {p.year}
                </div>
              </div>
            </Link>
          ))}

          {/* & more */}
          <Link
            to="/work"
            aria-label="View all projects"
            className="bg-ink-800 border border-ink-700 rounded-sm overflow-hidden hover:border-imps-red transition-colors block cursor-pointer"
          >
            <div
              className="aspect-[4/3] flex items-center justify-center font-sans font-extrabold text-[36px] sm:text-[48px] tracking-[-0.03em]"
              style={{ background: '#B83A3A', color: '#fff' }}
            >
              &#9733;
            </div>
            <div className="p-4 sm:p-[18px] flex justify-between items-baseline text-[12px] tracking-[0.1em] uppercase">
              <div className="text-white font-sans font-semibold tracking-normal normal-case text-[15px]">
                & more
              </div>
              <div className="text-ink-400">{PROJECTS.length} projects</div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
