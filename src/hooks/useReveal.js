import { useLayoutEffect, useRef } from 'react'

// Fades an element in once, the first time it scrolls into view.
// Does nothing for people who prefer reduced motion, or in browsers
// without IntersectionObserver, so content is never hidden by mistake.
export default function useReveal() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined

    el.classList.add('reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
