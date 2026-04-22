import { useState, useEffect } from 'react';
import Container from './components/Container.jsx';
import MinimalFooter from './components/MinimalFooter.jsx';
import PROJECTS from './data/projects.js';
import { BASE_URL } from './data/constants.js';
import useDocumentTitle from './hooks/useDocumentTitle.js';

export default function NotFound() {
  const base = BASE_URL;
  const [pathname, setPathname] = useState('/the/page/you/wanted');

  useDocumentTitle('404');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-ink-900 text-white flex flex-col">
      <div className="sticky top-0 z-50 bg-ink-900 border-b border-ink-700">
        <Container className="flex items-center justify-between gap-4 flex-wrap py-3 text-[12px] tracking-[0.14em] uppercase">
          <a className="flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-imps-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded-sm" href="/">
            <img src={`${base}imps-primary-light.svg`} alt="IMPS" className="h-8 sm:h-10 block" />
          </a>
          <nav className="hidden sm:flex gap-7 text-ink-300">
            <a className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" href="/#services">services</a>
            <a className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" href="/#work">work</a>
            <a className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" href="/#process">process</a>
            <a className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" href="/#about">about</a>
          </nav>
          <div className="text-[#C48A2B] text-[10px] sm:text-[12px] whitespace-nowrap">
            <span className="status-dot inline-block w-2 h-2 rounded-full bg-[#C48A2B] mr-2 ring-4 ring-[#C48A2B]/20 align-middle"></span>
            404 &mdash; NOT FOUND
          </div>
        </Container>
      </div>

      <main className="flex-1 flex items-center py-14 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-center">
            <div>
              <div className="text-[11px] text-imps-red tracking-[0.18em] mb-6">
                &#9656; ERR &middot; PAGE_NOT_FOUND
              </div>

              <h1 className="font-sans font-extrabold leading-[0.88] tracking-[-0.045em] m-0 mb-6 big-404">
                <span className="sr-only">Page not found</span>
                <span aria-hidden="true">
                  <span className="text-imps-red">4</span>
                  <span className="text-white">0</span>
                  <span className="text-imps-red">4</span>
                </span>
              </h1>

              <h2 className="font-sans font-bold text-white m-0 mb-5 tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>
                This page is <span className="italic text-imps-red">somewhere</span> &mdash; just not here.
              </h2>

              <p className="font-sans text-[16px] leading-[1.55] text-ink-300 max-w-[520px] m-0 mb-8">
                You followed a link that doesn&rsquo;t exist, or we broke one when we weren&rsquo;t looking. Either way: the imp is asleep on the job, and we owe you a better URL.
              </p>

              <div className="bg-ink-800 border border-ink-700 rounded-md p-5 sm:p-6 font-mono text-[13px] leading-[2] mb-8 max-w-[580px]">
                <div>
                  <span className="text-imps-red">$</span>{' '}
                  <span className="text-white">{`imps find --url "${pathname}"`}</span>
                </div>
                <div className="text-[#C48A2B] ml-4">
                  &rarr; no matches. 0 results in {PROJECTS.length} projects.
                </div>
                <div className="mt-2">
                  <span className="text-imps-red">$</span>{' '}
                  <span className="text-white">imps suggest</span>
                </div>
                <div className="text-[#C48A2B] ml-4">
                  &rarr; try the homepage, or{' '}
                  <a href="/#work" className="text-imps-red underline underline-offset-2 decoration-1 hover:text-white">browse our work</a>.
                </div>
                <div className="mt-2">
                  <span className="text-imps-red">$</span>{' '}
                  <span className="blink-cursor inline-block w-2 h-3.5 bg-imps-red align-middle" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a href="/"
                   className="inline-flex items-center justify-center px-6 py-3 bg-imps-red text-white font-mono text-[12px] tracking-[0.1em] uppercase rounded hover:bg-imps-deep transition-colors">
                  &larr; back to home
                </a>
                <a href="mailto:hello@imps.studio"
                   className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-ink-300 font-mono text-[12px] tracking-[0.1em] uppercase rounded border border-ink-700 hover:border-imps-red transition-colors">
                  tell us what broke
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-[320px] lg:max-w-none aspect-square border border-ink-700 rounded-lg overflow-hidden"
                   style={{ background: 'radial-gradient(ellipse at center, rgba(184,58,58,0.08), transparent 60%), #181B21' }}>
                <span className="absolute top-3 left-3 w-3.5 h-3.5 border-t border-l border-ink-500" />
                <span className="absolute top-3 right-3 w-3.5 h-3.5 border-t border-r border-ink-500" />
                <span className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b border-l border-ink-500" />
                <span className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b border-r border-ink-500" />

                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <img src={`${base}imp-sleeping.svg`}
                       alt="A sleeping imp mascot"
                       className="w-[60%] h-auto breathe" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-[18px] pb-[18px] flex justify-between font-mono text-[10px] tracking-[0.18em] uppercase">
                  <span className="text-ink-500">MASCOT &middot; SLEEPING</span>
                  <span className="text-imps-red">z z z</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <MinimalFooter label="ERROR 404" />
    </div>
  );
}
