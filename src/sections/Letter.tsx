import { letterParagraphs } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Letter() {
  return (
    <section className="section-space overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_10%,rgba(74,11,18,.09)_50%,transparent_90%)]" />
      <div className="page-shell relative">
        <Reveal className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="eyebrow">Писмо ми напиши....</p>
            <div className="gold-line mx-auto" />
          </div>
          <article className="relative border border-[#c9a75d]/12 bg-[linear-gradient(145deg,rgba(30,23,20,.76),rgba(9,8,8,.92))] px-6 py-12 shadow-[0_45px_120px_rgba(0,0,0,.55)] sm:px-14 sm:py-16 md:px-20">
            <span className="absolute left-4 top-4 h-10 w-10 border-l border-t border-[#c9a75d]/30" />
            <span className="absolute bottom-4 right-4 h-10 w-10 border-b border-r border-[#c9a75d]/30" />
            <p className="font-['Petit_Formal_Script'] text-2xl text-[#e0c98e] sm:text-3xl">Скъпа Мони,</p>
            <div className="mt-10 space-y-5">
              {letterParagraphs.map((paragraph, index) => (
                <p
                  key={`${paragraph}-${index}`}
                  className={`serif m-0 text-[1.22rem] leading-[1.72] sm:text-[1.38rem] ${
                    index >= 12 ? 'italic text-[#e6d6bb]' : 'text-[#c5beb4]'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-12">
              <p className="font-['Petit_Formal_Script'] m-0 text-2xl leading-relaxed text-[#e0c98e] sm:text-3xl">
                Ванко Габанко <span className="text-[#8c1c28]">♥</span>
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
