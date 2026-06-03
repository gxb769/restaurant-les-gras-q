'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function normalizePathname(p: string) {
  return p.length > 1 ? p.replace(/\/$/, '') : p
}

// Intercepte les <a href="#section"> et les redirige vers Lenis
function LenisAnchorHandler() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') ?? ''

      if (href.startsWith('#')) {
        const el = document.getElementById(href.slice(1))
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el, { offset: -80, duration: 1.2 })
        }
        return
      }

      try {
        const url = new URL(href, window.location.href)
        const samePathname =
          normalizePathname(url.pathname) === normalizePathname(window.location.pathname)
        if (samePathname && url.hash) {
          const el = document.getElementById(url.hash.slice(1))
          if (el) {
            e.preventDefault()
            lenis.scrollTo(el, { offset: -80, duration: 1.2 })
          }
        }
      } catch {
        // URL invalide, ignorer
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [lenis])

  return null
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      <LenisAnchorHandler />
      {children}
    </ReactLenis>
  )
}
