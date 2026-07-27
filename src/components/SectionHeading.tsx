import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : undefined}>
      <p className="eyebrow">{eyebrow}</p>
      <div className={`gold-line ${align === 'center' ? 'mx-auto' : ''}`} />
      <h2 className="serif m-0 text-[clamp(2.8rem,8vw,5.8rem)] font-normal leading-[0.95] tracking-[-0.04em] text-[#f5f0e8]">
        {title}
      </h2>
    </Reveal>
  )
}
