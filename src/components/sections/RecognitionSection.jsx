import { rankings } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function RecognitionSection() {
  return (
    <section id="recognition" aria-labelledby="recognition-title" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="recognition-title" title="Ranked among the best co-educational boarding schools" />
        </Reveal>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {rankings.map((item, i) => (
            <Reveal as="li" key={item.what} index={i} className="grid items-baseline gap-2 py-6 sm:grid-cols-[8rem_14rem_1fr] sm:gap-6">
              <span className="font-display text-5xl font-extrabold text-pine">{item.rank}</span>
              <span className="text-lg font-semibold">{item.where}</span>
              <span className="text-muted">{item.what}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
