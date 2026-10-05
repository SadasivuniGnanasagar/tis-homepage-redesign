import { useCallback, useEffect, useRef, useState } from 'react'
import { answerQuestion, greeting } from '../data/assistant'

let nextId = 1
const makeMessage = (role, content) => ({ id: nextId++, role, ...content })

export function useAssistant() {
  const [messages, setMessages] = useState(() => [makeMessage('bot', { text: greeting })])
  const [thinking, setThinking] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const send = useCallback((question) => {
    const trimmed = question.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, makeMessage('user', { text: trimmed })])
    setThinking(true)

    // A short pause makes the reply feel conversational rather than instant.
    timer.current = setTimeout(() => {
      setMessages((prev) => [...prev, makeMessage('bot', answerQuestion(trimmed))])
      setThinking(false)
    }, 600)
  }, [])

  return { messages, thinking, send }
}
