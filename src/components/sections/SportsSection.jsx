import { sports, sportsCopy } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function SportsSection() {
  return (
    <section id="sports" aria-labelledby="sports-title" className="bg-ink px-5 py-24 text-bg sm:px-8 dark:bg-surface dark:text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <Reveal>
          <SectionHeading id="sports-title" title={sportsCopy.title}>
            <span className="text-bg/75 dark:text-muted">{sportsCopy.body}</span>
          </SectionHeading>
        </Reveal>

        <ul className="flex flex-wrap content-start gap-3">
          {sports.map((sport, i) => (
            <Reveal as="li" key={sport} index={i % 6}>
              <span
                data-cursor
                className="inline-block cursor-default rounded-full border border-bg/30 px-5 py-2.5 font-display text-lg font-semibold transition-colors duration-200 hover:border-sun hover:bg-sun hover:text-on-sun dark:border-line sm:text-xl"
              >
                {sport}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
