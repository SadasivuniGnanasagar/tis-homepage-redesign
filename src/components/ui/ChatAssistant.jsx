import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'
import { suggestions } from '../../data/assistant'
import { useAssistant } from '../../hooks/useAssistant'

function Bubble({ message }) {
  const isUser = message.role === 'user'

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.95rem] leading-relaxed ${
          isUser ? 'rounded-br-md bg-ink text-bg' : 'rounded-bl-md border border-line bg-bg'
        }`}
      >
        <p>{message.text}</p>
        {message.link && (
          <a
            href={message.link.href}
            className="mt-2 inline-flex min-h-9 items-center rounded-full bg-sun px-4 text-sm font-bold text-on-sun"
          >
            {message.link.label}
          </a>
        )}
      </div>
    </motion.li>
  )
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const { messages, thinking, send } = useAssistant()
  const endRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, thinking, open])

  const handleSubmit = (event) => {
    event.preventDefault()
    send(draft)
    setDraft('')
  }

  return (
    <div className="fixed bottom-4 right-4 z-[55] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.section
            role="dialog"
            aria-label="TIS assistant"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="absolute bottom-16 right-0 flex h-[min(32rem,70svh)] w-[calc(100vw-2rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-ink/20"
          >
            <header className="flex items-center justify-between bg-ink px-5 py-4 text-bg dark:bg-bg dark:text-ink">
              <div>
                <p className="font-display text-lg font-bold">TIS assistant</p>
                <p className="text-xs opacity-75">Answers based on tis.edu.in</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="grid size-9 place-items-center rounded-full hover:bg-bg/15">
                <X size={18} />
              </button>
            </header>

            <ul aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message) => (
                <Bubble key={message.id} message={message} />
              ))}
              {thinking && (
                <li className="text-sm text-muted" aria-label="Assistant is typing">
                  Typing…
                </li>
              )}
              <li ref={endRef} aria-hidden="true" />
            </ul>

            <div className="flex gap-2 overflow-x-auto px-4 pb-2">
              {suggestions.map((text) => (
                <button
                  key={text}
                  type="button"
                  onClick={() => send(text)}
                  className="shrink-0 rounded-full border border-line px-3 py-1.5 text-sm font-medium transition-colors hover:border-sun hover:bg-sun hover:text-on-sun"
                >
                  {text}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-line p-3">
              <label className="sr-only" htmlFor="assistant-input">
                Your question
              </label>
              <input
                id="assistant-input"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask a question"
                autoComplete="off"
                className="min-h-11 flex-1 rounded-full border border-line bg-bg px-4 text-base placeholder:text-muted"
              />
              <button type="submit" aria-label="Send" className="grid size-11 shrink-0 place-items-center rounded-full bg-sun text-on-sun">
                <Send size={18} />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close assistant' : 'Open assistant'}
        className="grid size-14 place-items-center rounded-full bg-sun text-on-sun shadow-lg shadow-ink/25 transition-transform hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
