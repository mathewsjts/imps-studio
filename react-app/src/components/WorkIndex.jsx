import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import Container from './Container.jsx';
import MinimalFooter from './MinimalFooter.jsx';
import PROJECTS, { FOUNDING_YEAR, getCategory, liveCount, disciplineCount } from '../data/projects.js';

const CATEGORIES = ['All', 'Games', 'Apps', 'Web', 'Tools'];

export default function WorkIndex() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortDir, setSortDir] = useState('newest');

  useEffect(() => {
    document.title = 'Work \u2014 IMPS Studio';
  }, []);

  // Assign chronological numbers (oldest = #01)
  const numbered = useMemo(() => {
    const chronological = [...PROJECTS].sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return PROJECTS.indexOf(a) - PROJECTS.indexOf(b);
    });
    return chronological.map((p, i) => ({ ...p, number: i + 1 }));
  }, []);

  // Sort
  const sorted = useMemo(() => {
    const list = [...numbered];
    list.sort((a, b) =>
      sortDir === 'newest' ? b.number - a.number : a.number - b.number
    );
    return list;
  }, [numbered, sortDir]);

  // Filter
  const filtered = useMemo(() => {
    if (activeFilter === 'All') return sorted;
    return sorted.filter((p) => getCategory(p.kind) === activeFilter);
  }, [sorted, activeFilter]);

  // Group by year
  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year).push(p);
    });
    return [...map.entries()];
  }, [filtered]);

  // Category counts
  const counts = useMemo(() => {
    const c = { All: PROJECTS.length };
    CATEGORIES.slice(1).forEach((cat) => {
      c[cat] = PROJECTS.filter((p) => getCategory(p.kind) === cat).length;
    });
    return c;
  }, []);

  const allYears = PROJECTS.map((p) => p.year);
  const firstYear = Math.min(...allYears);
  const lastYear = Math.max(...allYears);

  return (
    <div className="min-h-screen bg-ink-900 text-white">
      <Nav />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-ink-700">
        <Container>
          <ol className="flex items-center gap-2.5 py-[18px] list-none m-0 p-0 text-[11px] tracking-[0.14em] uppercase font-mono">
            <li>
              <a href="/" className="text-ink-400 hover:text-imps-red transition-colors">
                IMPS
              </a>
            </li>
            <li aria-hidden="true" className="text-ink-500">
              /
            </li>
            <li className="text-white" aria-current="page">
              Work
            </li>
          </ol>
        </Container>
      </nav>

      {/* Hero */}
      <section className="pt-12 pb-8 sm:pt-[72px] sm:pb-14">
        <Container>
          <div className="text-[10px] sm:text-[11px] text-imps-red tracking-[0.18em] font-mono mb-6 sm:mb-10">
            &#9656; ARCHIVE &middot; {PROJECTS.length} ENTRIES &middot; {firstYear}&ndash;{lastYear}
          </div>

          <h1
            className="font-sans font-extrabold leading-[0.92] tracking-tightest m-0 mb-6 text-white"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            Everything
            <br />
            we've <em className="italic text-imps-red">shipped</em>.
          </h1>

          <p className="font-sans text-[15px] sm:text-[17px] text-ink-300 max-w-[580px] m-0">
            Games, apps, tools, and the web &mdash; six years of building software for people who care about craft.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14 pt-6 border-t border-ink-700 text-[10px] sm:text-[11px] text-ink-400 tracking-[0.12em] uppercase">
            <div>
              <strong className="text-white block mb-1 font-semibold text-[15px] font-sans tracking-normal normal-case">
                {PROJECTS.length}
              </strong>
              PROJECTS
            </div>
            <div>
              <strong className="text-white block mb-1 font-semibold text-[15px] font-sans tracking-normal normal-case">
                {liveCount}
              </strong>
              CURRENTLY LIVE
            </div>
            <div>
              <strong className="text-white block mb-1 font-semibold text-[15px] font-sans tracking-normal normal-case">
                {disciplineCount}
              </strong>
              DISCIPLINES
            </div>
            <div>
              <strong className="text-white block mb-1 font-semibold text-[15px] font-sans tracking-normal normal-case">
                {FOUNDING_YEAR}
              </strong>
              FOUNDED
            </div>
          </div>
        </Container>
      </section>

      {/* Filter bar */}
      <div className="bg-ink-800 border-y border-ink-700">
        <Container className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-[10px] tracking-[0.14em] uppercase text-ink-500 font-mono mr-1">
              // filter by
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] uppercase rounded-[999px] border transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-imps-red border-imps-red text-white'
                    : 'bg-transparent border-ink-700 text-ink-300 hover:border-imps-red'
                }`}
              >
                {cat}{' '}
                <span
                  className={`tabular-nums ${activeFilter === cat ? 'text-white/70' : 'text-ink-500'}`}
                >
                  {counts[cat]}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.1em] uppercase text-ink-400 whitespace-nowrap">
            <span aria-live="polite">
              Showing{' '}
              <span className="text-white">{filtered.length}</span> /{' '}
              {PROJECTS.length}
            </span>
            <select
              value={sortDir}
              onChange={(e) => setSortDir(e.target.value)}
              className="bg-transparent text-imps-red border-0 font-mono text-[11px] tracking-[0.1em] uppercase cursor-pointer outline-none"
              aria-label="Sort order"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </Container>
      </div>

      {/* Index rows */}
      <section className="py-10 sm:py-14 md:py-20">
        <Container>
          {/* Column headers — desktop only */}
          <div
            className="hidden sm:grid gap-x-4 text-[10px] font-mono tracking-[0.14em] uppercase text-ink-500 mb-6 pb-3 border-b border-ink-700 sm:grid-cols-[64px_1fr_120px_140px_28px] lg:grid-cols-[64px_1fr_120px_140px_200px_28px]"
          >
            <div>#</div>
            <div>Project</div>
            <div>Kind</div>
            <div>Year</div>
            <div className="hidden lg:block">Stack</div>
            <div />
          </div>

          {groups.map(([year, projects], gi) => (
            <div key={year} className={gi === 0 ? 'mb-4' : 'mt-10 mb-4'}>
              {/* Year heading */}
              <div className="flex items-center gap-4 mb-3">
                <h3 className="font-sans font-extrabold text-white m-0 text-[24px] sm:text-[44px] leading-none whitespace-nowrap">
                  {year}
                </h3>
                <span className="text-[12px] font-mono text-ink-500 tabular-nums whitespace-nowrap">
                  {projects.length}
                </span>
                <div className="flex-1 h-px bg-ink-700" />
              </div>

              {/* Rows */}
              {projects.map((p) => {
                const isArchived = p.year === FOUNDING_YEAR;
                return (
                  <Link
                    key={p.slug}
                    to={`/work/${p.slug}`}
                    className="group block no-underline rounded-sm"
                    aria-label={`${p.name} \u2014 ${p.kind}, ${p.year}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {/* Desktop + tablet row */}
                    <div
                      className="hidden sm:grid gap-x-4 items-center py-3.5 px-2 -mx-2 rounded-sm group-hover:bg-ink-800 transition-colors sm:grid-cols-[64px_1fr_120px_140px_28px] lg:grid-cols-[64px_1fr_120px_140px_200px_28px]"
                    >
                      <div
                        className={`font-mono text-[12px] tabular-nums ${isArchived ? 'text-ink-600' : 'text-ink-500'}`}
                      >
                        {String(p.number).padStart(2, '0')}
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`font-sans text-[22px] font-bold tracking-[-0.01em] truncate ${isArchived ? 'text-ink-400' : 'text-white'}`}
                        >
                          {p.name}
                        </div>
                        <div
                          className={`font-sans text-[14px] truncate ${isArchived ? 'text-ink-600' : 'text-ink-400'}`}
                        >
                          {p.indexTagline}
                        </div>
                      </div>
                      <div
                        className={`font-mono text-[11px] tracking-[0.1em] uppercase flex items-center gap-1.5 ${isArchived ? 'text-ink-600' : 'text-ink-300'}`}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-imps-red inline-block flex-shrink-0"
                          aria-hidden="true"
                        />
                        {p.kind}
                      </div>
                      <div
                        className={`font-mono text-[13px] tabular-nums ${isArchived ? 'text-ink-600' : 'text-ink-300'}`}
                      >
                        {p.year}
                      </div>
                      <div
                        className={`font-mono text-[11px] tracking-[0.1em] uppercase hidden lg:block truncate ${isArchived ? 'text-ink-600' : 'text-ink-400'}`}
                      >
                        {p.stack}
                      </div>
                      <div className="font-sans text-[20px] text-ink-400 group-hover:text-imps-red transition-all group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
                        &rarr;
                      </div>
                    </div>

                    {/* Mobile row */}
                    <div className="sm:hidden flex items-center justify-between py-3.5 px-2 -mx-2 rounded-sm group-hover:bg-ink-800 transition-colors">
                      <div className="min-w-0">
                        <div
                          className={`font-sans text-[18px] font-bold tracking-[-0.01em] truncate ${isArchived ? 'text-ink-400' : 'text-white'}`}
                        >
                          {p.name}
                        </div>
                        <div
                          className={`font-sans text-[13px] truncate ${isArchived ? 'text-ink-600' : 'text-ink-400'}`}
                        >
                          {p.indexTagline}
                        </div>
                        <div
                          className={`font-mono text-[10px] tracking-[0.1em] uppercase mt-1 ${isArchived ? 'text-ink-600' : 'text-ink-500'}`}
                        >
                          {p.kind} &middot; {p.year}
                        </div>
                      </div>
                      <div className="font-sans text-[20px] text-ink-400 group-hover:text-imps-red transition-all group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 flex-shrink-0 ml-4">
                        &rarr;
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-[120px] border-t border-ink-700 bg-imps-red text-white">
        <Container>
          <h2
            className="font-sans font-extrabold tracking-tightest leading-[0.95] m-0 mb-8 sm:mb-10 max-w-[1100px]"
            style={{ fontSize: 'clamp(2rem, 7vw, 6rem)' }}
          >
            Got something that
            <br />
            belongs on this list?
          </h2>
          <p className="font-sans text-[15px] sm:text-[17px] text-white/85 max-w-[580px] mb-7 sm:mb-10">
            We take on a handful of projects a year. Drop us a line &mdash; we'll tell you honestly whether we're the right team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:hello@imps.studio"
              className="inline-block px-7 py-4 font-mono text-[13px] tracking-[0.1em] uppercase border-0 rounded-sm bg-ink-900 text-white hover:bg-white hover:text-imps-red transition-colors text-center no-underline"
            >
              start a project &#8594;
            </a>
            <a
              href="/#process"
              className="inline-block px-7 py-4 font-mono text-[13px] tracking-[0.1em] uppercase rounded-sm bg-transparent text-white border border-white/30 hover:border-white transition-colors text-center no-underline"
            >
              our process
            </a>
          </div>
        </Container>
      </section>

      <MinimalFooter label="WORK" />
    </div>
  );
}
