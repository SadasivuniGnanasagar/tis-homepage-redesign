import { school } from '../../data/content'

const links = [
  { label: 'FAQ', href: 'https://tis.edu.in/faq/' },
  { label: 'Virtual tour', href: school.tourUrl },
  { label: 'Privacy policy', href: 'https://tis.edu.in/privacy-policy/' },
  { label: 'Terms & conditions', href: 'https://tis.edu.in/terms-conditions/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <address className="max-w-sm not-italic">
          <p className="font-display text-xl font-bold">{school.name}</p>
          <p className="mt-2 text-muted">{school.address}</p>
          <p className="mt-2 text-muted">Landline: {school.landlines.join(', ')}</p>
        </address>
        <ul className="grid gap-2 text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-sm text-muted">
        © {new Date().getFullYear()} {school.name}, Dehradun. All rights reserved. Unofficial redesign concept, not affiliated with the school.
      </p>
    </footer>
  )
}
