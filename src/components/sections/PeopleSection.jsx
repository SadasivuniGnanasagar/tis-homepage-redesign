import { people } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

const initials = (name) =>
  name
    .replace(/^Dr /, '')
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

export default function PeopleSection() {
  return (
    <section id="people" aria-labelledby="people-title" className="overflow-hidden bg-surface px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="people-title" title="Influential personalities on campus">
            Champions, creators and leaders who have visited and inspired our students.
          </SectionHeading>
        </Reveal>
      </div>

      <ul
        tabIndex={0}
        aria-label="Influential personalities, scroll horizontally"
        className="mx-auto mt-12 flex max-w-6xl snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
      >
        {people.map((person, i) => (
          <Reveal as="li" key={person.name} index={i} className="w-72 shrink-0 snap-start rounded-3xl border border-line bg-bg p-6">
            <span className="grid size-14 place-items-center rounded-full bg-sun font-display text-xl font-bold text-on-sun">
              {initials(person.name)}
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">{person.name}</h3>
            <p className="mt-2 leading-relaxed text-muted">{person.note}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
