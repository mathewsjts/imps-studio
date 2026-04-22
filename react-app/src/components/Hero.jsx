import Container from './Container.jsx';
import PROJECTS from '../data/projects.js';
import { CURRENT_YEAR } from '../data/constants.js';
const shippedThisYear = PROJECTS.filter((p) => p.year === CURRENT_YEAR).length;

export default function Hero() {
  return (
    <section className="py-10 sm:py-14 md:py-20">
      <Container>
        <div className="text-[10px] sm:text-[11px] text-imps-red tracking-[0.14em] mb-6 sm:mb-10">
          &#9656; IMPS.STUDIO · v{CURRENT_YEAR}.1 · an independent studio
        </div>
        <h1 className="font-sans font-extrabold text-white m-0 leading-[0.92] tracking-tightest break-words"
            style={{ fontSize: 'clamp(2rem, 9vw, 8rem)' }}>
          We build<br />
          <span className="text-imps-red">software</span>,<br />
          games, and<br />
          <span className="strike">whatever</span> <span className="text-imps-red">*</span> <br />
          else you need.
        </h1>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14 md:mt-[72px] pt-6 border-t border-ink-700 text-[10px] sm:text-[11px] text-ink-400 tracking-[0.12em] uppercase">
          <div><strong className="text-white block mb-1 font-semibold">{String(shippedThisYear).padStart(2, '0')}</strong>SHIPPED THIS YEAR</div>
          <div><strong className="text-white block mb-1 font-semibold">Steam · iOS · Web</strong>PLATFORMS</div>
          <div><strong className="text-white block mb-1 font-semibold">4 weeks</strong>TYPICAL SPRINT</div>
          <div><strong className="text-white block mb-1 font-semibold">Fixed bid</strong>PRICING MODEL</div>
        </div>
      </Container>
    </section>
  );
}
