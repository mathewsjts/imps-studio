import Container from './Container.jsx';

export default function Footer() {
  const base = import.meta.env.BASE_URL;
  return (
    <footer className="bg-ink-900 pt-12 pb-6 border-t border-ink-700">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-7 sm:gap-10 pb-8 sm:pb-10">
          <div>
            <img src={`${base}imps-primary-light.svg`} alt="IMPS" className="h-12 sm:h-14 mb-3" />
            <div className="font-sans text-[14px] text-ink-400 leading-[1.5] max-w-[340px] mt-3">
              Software, games, and everything in between. Made with mischief.
            </div>
          </div>
          <FootCol title="Studio" items={['Work', 'Services', 'Process']} />
          <FootCol title="Elsewhere" items={['GitHub \u2197', 'Bluesky \u2197', 'itch.io \u2197']} />
          <FootCol title="Contact" items={['Start a project', 'Press kit']} />
        </div>
        <div className="border-t border-ink-700 pt-5 flex flex-col sm:flex-row justify-between gap-2 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-ink-500">
          <div>&copy; 2026 · IMPS SOFTWARE · imps.software</div>
          <div>V2026.1 · BUILT WITH BREAKFAST</div>
        </div>
      </Container>

      {/* Horned-I mascot easter egg */}
      <a className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 opacity-70 hover:opacity-100 transition-opacity z-10 cursor-pointer" title="hi.">
        <img src={`${base}imps-mark-light.svg`} alt="IMPS" className="w-10 h-auto sm:w-12 block" />
      </a>
    </footer>
  );
}

function FootCol({ title, items }) {
  return (
    <div>
      <h5 className="text-ink-500 text-[10px] tracking-[0.14em] uppercase m-0 mb-4 font-medium">{title}</h5>
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5 font-sans text-[14px] text-ink-300">
        {items.map((i) => (<li key={i}><a className="hover:text-imps-red cursor-pointer">{i}</a></li>))}
      </ul>
    </div>
  );
}
