import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { classes, school } from '../../data/content'
import Reveal from '../animation/Reveal'

const field =
  'mt-2 min-h-12 w-full rounded-xl border border-line bg-bg px-4 text-base text-ink placeholder:text-muted'

export default function EnquireSection() {
  const [sentTo, setSentTo] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // No backend in this assessment build, so we only confirm to the user.
    setSentTo(data.get('parent'))
  }

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="bg-sun px-5 py-24 text-on-sun sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 id="enquire-title" className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Enquire now
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed">{school.founded}</p>
          <ul className="mt-8 grid gap-2 text-lg font-semibold">
            <li>
              <a href={school.helplineHref} className="underline underline-offset-4">
                Admission helpline {school.helpline}
              </a>
            </li>
            <li>
              <a href={`mailto:${school.email}`} className="underline underline-offset-4">
                {school.email}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal index={1} className="rounded-3xl bg-surface p-6 text-ink sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {sentTo ? (
              <motion.div
                key="done"
                role="status"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="grid min-h-72 place-content-center justify-items-center gap-3 text-center"
              >
                <CheckCircle2 size={48} className="text-pine" />
                <p className="font-display text-2xl font-bold">Thank you, {sentTo}.</p>
                <p className="text-muted">Our admissions team will call you back soon.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0 }} className="grid gap-5">
                <label className="block font-semibold">
                  Parent’s name
                  <input name="parent" required autoComplete="name" pattern=".*\S.*" title="Please enter your name" className={field} />
                </label>
                <label className="block font-semibold">
                  Mobile number
                  <input name="phone" type="tel" required inputMode="tel" autoComplete="tel" pattern="(\+91[\s\-]?)?[6-9][0-9]{9}" title="Enter a 10-digit Indian mobile number" className={field} />
                </label>
                <label className="block font-semibold">
                  Class applying for
                  <select name="class" required defaultValue="" className={field}>
                    <option value="" disabled>
                      Select class
                    </option>
                    {classes.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="flex items-start gap-3 text-sm text-muted">
                  <input type="checkbox" required className="mt-1 size-5 accent-[var(--pine)]" />I agree to receive information regarding my submitted application from Tulas International School.
                </label>
                <button type="submit" className="min-h-12 rounded-full bg-ink px-6 font-bold text-bg transition-opacity hover:opacity-90 dark:bg-sun dark:text-on-sun">
                  Send enquiry
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
