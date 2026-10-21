import type { ComponentType, ReactNode } from 'react'
import type { Key } from './i18n'
import Calendario from './pages/Calendario'
import Proyectos from './pages/Proyectos'
import Propuestas from './pages/Propuestas'
import Economia from './pages/Economia'

export type Section = {
  path: string
  labelKey: Key
  icon: ReactNode
  Page: ComponentType
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const SECTIONS: Section[] = [
  {
    path: '/calendario',
    labelKey: 'nav.calendario',
    Page: Calendario,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2.5" {...stroke} />
        <path d="M3 10h18M8 3v4M16 3v4" {...stroke} />
      </svg>
    ),
  },
  {
    path: '/proyectos',
    labelKey: 'nav.proyectos',
    Page: Proyectos,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h4l2 2h10v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" {...stroke} />
        <path d="M9 14.5l2 2 4-4" {...stroke} />
      </svg>
    ),
  },
  {
    path: '/propuestas',
    labelKey: 'nav.propuestas',
    Page: Propuestas,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a6 6 0 0 1 3.6 10.8c-.6.5-.9 1-1 1.7l-.1.5H9.5l-.1-.5c-.1-.7-.4-1.2-1-1.7A6 6 0 0 1 12 3Z" {...stroke} />
        <path d="M10 19h4M10.5 21.5h3" {...stroke} />
      </svg>
    ),
  },
  {
    path: '/economia',
    labelKey: 'nav.economia',
    Page: Economia,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2.5" y="6" width="19" height="13" rx="2.5" {...stroke} />
        <path d="M2.5 11h19" {...stroke} />
        <circle cx="17" cy="15" r="1.4" {...stroke} />
      </svg>
    ),
  },
]
