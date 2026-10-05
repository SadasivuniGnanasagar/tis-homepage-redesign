import { reviews } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function ParentsSection() {
  return (
    <section id="parents" aria-labelledby="parents-title" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="parents-title" title="From the parents">
            Real words from families on Google Reviews.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 gap-6 sm:columns-2 lg:columns-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} index={i % 3} className="mb-6 break-inside-avoid">
              <figure className="rounded-3xl border border-line bg-surface p-6">
                <blockquote className="leading-relaxed">“{review.text}”</blockquote>
                <figcaption className="mt-5">
                  <span className="block font-bold">{review.name}</span>
                  <span className="text-sm text-muted">{review.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
