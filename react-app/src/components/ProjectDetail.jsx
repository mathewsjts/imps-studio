import { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from './Container.jsx';
import Nav from './Nav.jsx';
import MinimalFooter from './MinimalFooter.jsx';
import { getProject, getAdjacent } from '../data/projects.js';
import NotFound from '../NotFound.jsx';

const SHOT_STYLES = {
  1: { background: 'radial-gradient(circle at 30% 30%,#B83A3A,#3D1212)', color: '#fff' },
  2: { background: '#181B21', color: '#B83A3A' },
  3: { background: '#FAF0F0', color: '#0C0E12' },
  4: { background: 'linear-gradient(180deg,#0C0E12,#282C34)', color: '#B83A3A' },
};

function renderTitle(template, accent) {
  return template.split('{br}').map((segment, i) => {
    const parts = segment.split('{accent}');
    return (
      <Fragment key={i}>
        {i > 0 && <br />}
        {parts.length > 1 ? (
          <>{parts[0]}<em className="italic text-imps-red">{accent}</em>{parts[1]}</>
        ) : segment}
      </Fragment>
    );
  });
}

function renderValue(value, accentPart) {
  if (!accentPart) return value;
  const idx = value.indexOf(accentPart);
  if (idx === -1) return value;
  return (
    <>
      {value.slice(0, idx)}
      <span className="text-imps-red">{accentPart}</span>
      {value.slice(idx + accentPart.length)}
    </>
  );
}

function SectHead({ num, label, right }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-7 sm:mb-12 text-[12px] tracking-[0.14em] uppercase text-ink-400 gap-2 sm:gap-4">
      <h2 className="font-mono font-medium text-[12px] tracking-[0.14em] uppercase text-ink-400 m-0">
        <span aria-hidden="true" className="text-imps-red">// {num}</span>
        &nbsp;&nbsp;{label}
      </h2>
      <div>{right}</div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug);

  useEffect(() => {
    if (p) document.title = `${p.name} \u2014 IMPS Studio`;
  }, [slug, p]);

  if (!p) return <NotFound />;

  const { prev: prevProject, next: nextProject } = getAdjacent(slug);

  return (
    <div className="min-h-screen bg-ink-900 text-white font-mono">
      {/* 1 — Nav */}
      <Nav />

      {/* 2 — Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-ink-700">
        <Container>
          <ol className="flex items-center gap-2.5 py-[18px] list-none m-0 p-0 text-[11px] tracking-[0.14em] uppercase text-ink-400">
            <li><a href="/" className="hover:text-imps-red transition-colors">IMPS</a></li>
            <li aria-hidden="true" className="text-ink-500">/</li>
            <li><Link to="/work" className="hover:text-imps-red transition-colors">Work</Link></li>
            <li aria-hidden="true" className="text-ink-500">/</li>
            <li className="text-white" aria-current="page">{p.name}</li>
          </ol>
        </Container>
      </nav>

      {/* 3 — Hero */}
      <section className="pt-12 pb-8 sm:pt-[72px] sm:pb-14">
        <Container>
          <div className="text-[11px] text-imps-red tracking-[0.18em] mb-8">
            &#9656; CASE STUDY &middot; {p.year} &middot; {p.kind.toUpperCase()}
          </div>

          <h1
            className="font-sans font-extrabold leading-[0.88] tracking-[-0.045em] m-0 mb-6 text-white"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}
          >
            {renderTitle(p.heroTitle, p.titleAccent)}
          </h1>

          <p
            className="font-sans font-medium leading-[1.25] text-ink-300 max-w-[820px] m-0"
            style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
            dangerouslySetInnerHTML={{ __html: p.tagline }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-10 sm:mt-16 pt-7 border-t border-ink-700 text-[11px] text-ink-400 tracking-[0.12em] uppercase">
            {p.meta.map((m) => (
              <div key={m.label}>
                <strong className="text-white block mb-1.5 font-semibold tracking-normal normal-case text-[15px] font-sans">
                  {m.value}
                </strong>
                {m.label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4 — Key Art */}
      <section className="pt-3 pb-14 sm:pt-6 sm:pb-24">
        <Container>
          <div
            className="aspect-[4/3] sm:aspect-[16/9] border border-ink-700 rounded-md flex items-end justify-start p-6 sm:p-9 md:p-14 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${p.keyArt.colors[0]} 0%, ${p.keyArt.colors[1]} 55%, ${p.keyArt.colors[2]} 100%)` }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.35), transparent 50%), radial-gradient(ellipse at 20% 90%, rgba(0,0,0,0.4), transparent 55%)' }}
            />
            <div className="absolute top-5 right-6 sm:top-7 sm:right-8 text-[10px] tracking-[0.18em] text-white/75 z-10">
              KEY ART &middot; PLACEHOLDER
            </div>
            <div
              className="font-sans font-extrabold tracking-[-0.05em] leading-[0.85] text-white relative z-10"
              style={{ fontSize: 'clamp(5rem, 14vw, 12rem)', mixBlendMode: 'screen', opacity: 0.92 }}
            >
              {p.keyArt.title}
            </div>
          </div>
        </Container>
      </section>

      {/* 5 — Overview */}
      <section className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
        <Container>
          <SectHead num="01" label="OVERVIEW" right={p.sectionMeta.overview} />
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-16">
            <div className="text-[12px] tracking-[0.14em] uppercase text-ink-400">
              <span className="text-imps-red">//</span> {p.overview.eye}
            </div>
            <div>
              <p className="font-sans text-[22px] font-medium leading-[1.4] text-white m-0 mb-7 max-w-[680px]">
                {p.overview.lede}
              </p>
              {p.overview.body.map((text, i) => (
                <p
                  key={i}
                  className="font-sans text-[17px] leading-[1.6] text-ink-300 m-0 mb-5 max-w-[680px]"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6 — Screens */}
      <section className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
        <Container>
          <SectHead num="02" label="SCREENS" right={p.sectionMeta.screens} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.screens.map((s) => {
              const dark = s.variant === 3;
              return (
                <div
                  key={s.corner}
                  className="aspect-[4/3] border border-ink-700 rounded-md flex items-center justify-center relative overflow-hidden font-sans font-extrabold text-[36px] sm:text-[48px] tracking-[-0.03em]"
                  style={SHOT_STYLES[s.variant]}
                >
                  <span
                    className="absolute top-3 right-3.5 font-mono font-normal text-[10px] tracking-[0.14em]"
                    style={{ color: dark ? 'rgba(12,14,18,0.4)' : 'rgba(255,255,255,0.5)' }}
                  >
                    {s.corner}
                  </span>
                  {s.label}
                  <span
                    className="absolute bottom-3.5 left-4 font-mono font-normal text-[10px] tracking-[0.14em] uppercase"
                    style={{ color: dark ? 'rgba(12,14,18,0.6)' : 'rgba(255,255,255,0.7)' }}
                  >
                    screenshot &middot; placeholder
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 7 — Approach (Challenge + Solution) */}
      <section className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
        <Container>
          <SectHead num="03" label="APPROACH" right={p.sectionMeta.approach} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            {[
              { tag: 'CHALLENGE', ...p.challenge },
              { tag: 'SOLUTION', ...p.solution },
            ].map((card) => (
              <div key={card.tag} className="bg-ink-800 border border-ink-700 rounded-lg p-6 sm:p-8">
                <div className="text-[10px] tracking-[0.18em] uppercase text-imps-red">{card.tag}</div>
                <h3 className="font-sans text-[22px] font-bold tracking-[-0.01em] text-white my-4">
                  {card.heading}
                </h3>
                <p className="font-sans text-[15px] leading-[1.6] text-ink-300 m-0 mb-3.5">
                  {card.body}
                </p>
                <ul className="font-sans text-[15px] leading-[1.65] text-ink-300 m-0 pl-[18px]">
                  {card.points.map((pt) => (
                    <li key={pt} className="mb-2 marker:text-imps-red">{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8 — Timeline */}
      <section className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
        <Container>
          <SectHead num="04" label="TIMELINE" right={p.sectionMeta.timeline} />
          <div className="bg-ink-800 border border-ink-700 rounded-md p-5 sm:p-7 md:p-8 text-[13px] sm:text-[14px] leading-[2]">
            {p.timeline.map((t) => (
              <div key={t.step}>
                <span className="text-imps-red mr-2.5">$</span>
                <span className="text-white font-semibold">{t.step}</span>{' '}
                {t.status === 'done'
                  ? <span className="text-[#3F8F5F]">&#10003; done</span>
                  : <span className="text-[#C48A2B]">&#9679; in progress</span>}
                <span className="text-ink-400 block text-[12px] sm:text-[13px] leading-[1.5] mt-0.5 mb-3.5 ml-7">
                  {t.desc}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9 — Results */}
      <section className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
        <Container>
          <SectHead num="05" label="RESULTS" right={p.sectionMeta.results} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700 border border-ink-700 rounded-md overflow-hidden">
            {p.results.map((r, i) => (
              <div key={i} className="bg-ink-900 p-6 sm:p-7 md:p-9">
                <strong className="font-sans text-[36px] sm:text-[44px] font-bold tracking-[-0.03em] text-white block leading-none mb-3">
                  {renderValue(r.value, r.accentPart)}
                </strong>
                <span className="text-[11px] tracking-[0.14em] uppercase text-ink-400 block leading-[1.5]">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10 — Pull Quote */}
      {p.quote && (
        <section className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
          <Container>
            <figure>
              <blockquote
                className="font-sans font-semibold leading-[1.2] tracking-[-0.02em] text-white m-0 max-w-[920px]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                {p.quote.text}{' '}
                <em className="italic text-imps-red font-semibold">{p.quote.accent}</em>
              </blockquote>
              <figcaption className="mt-7 text-[11px] tracking-[0.18em] uppercase text-ink-500">
                {p.quote.attribution}
              </figcaption>
            </figure>
          </Container>
        </section>
      )}

      {/* 11 — Next / Prev */}
      {(prevProject || nextProject) && (
        <section className="border-t border-ink-700 bg-ink-900">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center py-10 sm:py-14 gap-4 sm:gap-10">
              {prevProject ? (
                <Link
                  to={`/work/${prevProject.slug}`}
                  className="group rounded-sm"
                  aria-label={`Previous project: ${prevProject.name}`}
                >
                  <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-400">Previously</span>
                  <strong className="block font-sans text-[22px] sm:text-[28px] font-bold tracking-[-0.02em] text-white mt-1.5 normal-case group-hover:text-ink-300 transition-colors">
                    {prevProject.name}
                  </strong>
                </Link>
              ) : <div />}
              <div className="text-imps-red text-4xl font-sans hidden sm:block" aria-hidden="true">
                &rarr;
              </div>
              {nextProject ? (
                <Link
                  to={`/work/${nextProject.slug}`}
                  className="group sm:text-right rounded-sm"
                  aria-label={`Next project: ${nextProject.name}`}
                >
                  <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-400">Next project</span>
                  <strong className="block font-sans text-[22px] sm:text-[28px] font-bold tracking-[-0.02em] text-imps-red mt-1.5 normal-case group-hover:text-white transition-colors">
                    {nextProject.name}
                  </strong>
                </Link>
              ) : <div />}
            </div>
          </Container>
        </section>
      )}

      <MinimalFooter label="CASE STUDY" />
    </div>
  );
}
