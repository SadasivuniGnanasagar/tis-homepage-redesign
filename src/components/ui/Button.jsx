const styles = {
  primary: 'bg-sun text-on-sun hover:brightness-95',
  outline: 'border-2 border-ink/30 text-ink hover:border-ink',
}

export default function Button({ href, variant = 'primary', children, className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-[filter,border-color] duration-200 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
