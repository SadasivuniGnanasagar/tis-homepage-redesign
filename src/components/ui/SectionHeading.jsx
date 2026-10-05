export default function SectionHeading({ title, children, id }) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>}
    </div>
  )
}
