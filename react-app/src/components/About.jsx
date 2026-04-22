import Container from './Container.jsx';
import PROJECTS, { FOUNDING_YEAR } from '../data/projects.js';

const FACTS = [
  { value: '04', label: 'PEOPLE ON THE TEAM' },
  { value: String(PROJECTS.length), label: 'PROJECTS SHIPPED' },
  { value: 'Remote \u00b7 BR', label: 'WHERE WE WORK', small: true },
];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-24 border-t border-ink-700">
      <Container>
        <div className="flex items-baseline justify-between gap-4 flex-wrap mb-7 sm:mb-10 md:mb-14 text-[12px] tracking-[0.14em] uppercase text-ink-400">
          <div><span className="text-imps-red">// 04</span> &nbsp; ABOUT</div>
          <div>WHO&rsquo;S BEHIND THE BUILDS</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-14">
          <div className="text-[12px] tracking-[0.14em] uppercase text-ink-400 leading-[1.6]">
            A small, independent studio&nbsp;&mdash; founded&nbsp;{FOUNDING_YEAR}.
          </div>

          <div>
            <h2 className="font-sans font-bold text-white m-0 mb-6 sm:mb-8 tracking-[-0.03em]"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
              Four people, one room,{' '}
              <span className="italic text-imps-red">no middle layer</span>.
            </h2>

            <p className="font-sans text-[17px] sm:text-[19px] text-ink-300 leading-[1.55] max-w-[640px] m-0 mb-5">
              IMPS Studio is a tiny team of engineers and designers who build end-to-end. The person you talk to is the person writing the code.
            </p>

            <p className="font-sans text-[15px] text-ink-400 leading-[1.6] max-w-[640px] m-0 mb-4">
              We take on a handful of projects a year&nbsp;&mdash; games, apps, sites, tools&nbsp;&mdash; and say no to the rest. That&rsquo;s how the weeks stay honest and the work stays sharp. No account managers. No handoffs. No 40-slide kickoff decks.
            </p>

            <p className="font-sans text-[15px] text-ink-400 leading-[1.6] max-w-[640px] m-0">
              We&rsquo;ve shipped to Steam, the App Store, and the open web. We&rsquo;ve also shipped to nobody (the ones that didn&rsquo;t work). We&rsquo;ll tell you which bucket we think your idea is heading for.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-700 border border-ink-700 mt-10 sm:mt-14">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-ink-900 p-5 sm:p-6">
              <strong className={`text-white block mb-1 font-sans font-bold tracking-[-0.02em] ${f.small ? 'text-[14px] sm:text-[16px]' : 'text-[24px] sm:text-[28px]'}`}>{f.value}</strong>
              <div className="text-[10px] text-ink-500 tracking-[0.14em] uppercase">{f.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
