import { hero, stats } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function NumbersSection() {
  return (
    <section id="numbers" aria-labelledby="numbers-title" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="numbers-title" title={hero.subhead}>
            {hero.subbody}
          </SectionHeading>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} index={i} className="border-t-4 border-sun pt-5">
              <dd className="font-display text-6xl font-extrabold tracking-tight sm:text-7xl">{stat.value}</dd>
              <dt className="mt-2 text-muted">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
