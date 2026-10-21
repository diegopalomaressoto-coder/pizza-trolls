import type { ReactNode } from 'react'

/**
 * Dibujos propios, en SVG, para la sección de mandar amor.
 * Pizzas para Diego, trolls para An.
 */

const MASA = '#e8b670'
const CORTEZA = '#c98a45'
const QUESO = '#f4cf7a'
const TOMATE = '#d64534'
const ALBAHACA = '#4f8f5a'
const ACEITUNA = '#3c2a2a'

function Lienzo({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" className="ilustracion" aria-hidden="true">
      {children}
    </svg>
  )
}

/* ---------- Pizzas ---------- */

const PorcionSimple = (
  <Lienzo>
    <path d="M60 14 L100 96 Q60 108 20 96 Z" fill={MASA} />
    <path d="M20 96 Q60 108 100 96 L104 104 Q60 118 16 104 Z" fill={CORTEZA} />
    <path d="M60 26 L93 94 Q60 103 27 94 Z" fill={QUESO} />
    <circle cx="60" cy="52" r="7" fill={TOMATE} />
    <circle cx="44" cy="80" r="7" fill={TOMATE} />
    <circle cx="76" cy="80" r="7" fill={TOMATE} />
    <ellipse cx="60" cy="72" rx="6" ry="4" fill={ALBAHACA} transform="rotate(-20 60 72)" />
  </Lienzo>
)

const PorcionMordida = (
  <Lienzo>
    <path d="M60 14 L100 96 Q60 108 20 96 Z" fill={MASA} />
    <path d="M20 96 Q60 108 100 96 L104 104 Q60 118 16 104 Z" fill={CORTEZA} />
    <path d="M60 26 L93 94 Q60 103 27 94 Z" fill={QUESO} />
    {/* el mordisco */}
    <circle cx="74" cy="56" r="15" fill="var(--bg)" />
    <circle cx="86" cy="74" r="9" fill="var(--bg)" />
    <circle cx="46" cy="84" r="7" fill={TOMATE} />
    <circle cx="52" cy="58" r="6" fill={TOMATE} />
    <ellipse cx="66" cy="88" rx="6" ry="4" fill={ALBAHACA} transform="rotate(15 66 88)" />
  </Lienzo>
)

const PizzaEntera = (
  <Lienzo>
    <circle cx="60" cy="60" r="46" fill={CORTEZA} />
    <circle cx="60" cy="60" r="39" fill={QUESO} />
    <g stroke={MASA} strokeWidth="2.5" strokeLinecap="round">
      <path d="M60 21v78M21 60h78M32 32l56 56M88 32l-56 56" />
    </g>
    <circle cx="44" cy="42" r="6" fill={TOMATE} />
    <circle cx="78" cy="46" r="6" fill={TOMATE} />
    <circle cx="48" cy="78" r="6" fill={TOMATE} />
    <circle cx="76" cy="76" r="6" fill={TOMATE} />
    <circle cx="60" cy="60" r="4" fill={ACEITUNA} />
    <ellipse cx="62" cy="36" rx="6" ry="4" fill={ALBAHACA} transform="rotate(-25 62 36)" />
    <ellipse cx="38" cy="62" rx="6" ry="4" fill={ALBAHACA} transform="rotate(40 38 62)" />
  </Lienzo>
)

const PorcionCorazon = (
  <Lienzo>
    <path
      d="M60 104 C24 80 16 58 24 42 C32 26 54 28 60 44 C66 28 88 26 96 42 C104 58 96 80 60 104 Z"
      fill={CORTEZA}
    />
    <path
      d="M60 94 C31 74 25 57 31 45 C37 33 54 36 60 50 C66 36 83 33 89 45 C95 57 89 74 60 94 Z"
      fill={QUESO}
    />
    <circle cx="46" cy="56" r="6" fill={TOMATE} />
    <circle cx="74" cy="56" r="6" fill={TOMATE} />
    <circle cx="60" cy="74" r="6" fill={TOMATE} />
    <ellipse cx="60" cy="58" rx="6" ry="4" fill={ALBAHACA} />
  </Lienzo>
)

export const PIZZAS: ReactNode[] = [
  PorcionSimple,
  PorcionMordida,
  PizzaEntera,
  PorcionCorazon,
]

/* ---------- Trolls ---------- */

function Troll({
  pelo,
  piel = '#f0c9a8',
  forma = 'llama',
  gema,
}: {
  pelo: string
  piel?: string
  forma?: 'llama' | 'nube' | 'picos'
  gema?: string
}) {
  const melena =
    forma === 'llama'
      ? 'M60 8 C44 24 38 34 40 46 C30 38 26 30 26 30 C22 44 28 54 36 58 L84 58 C92 54 98 44 94 30 C94 30 90 38 80 46 C82 34 76 24 60 8 Z'
      : forma === 'nube'
        ? 'M36 58 C20 58 18 40 32 36 C30 20 48 12 58 22 C68 10 88 18 86 34 C100 38 98 58 84 58 Z'
        : 'M60 6 L68 28 L82 16 L82 36 L98 34 L86 50 L92 58 L28 58 L34 50 L22 34 L38 36 L38 16 L52 28 Z'

  return (
    <Lienzo>
      <path d={melena} fill={pelo} />
      <ellipse cx="60" cy="72" rx="26" ry="24" fill={piel} />
      <ellipse cx="60" cy="58" rx="26" ry="10" fill={pelo} opacity="0.35" />
      <circle cx="50" cy="70" r="3.4" fill="#2b1d16" />
      <circle cx="70" cy="70" r="3.4" fill="#2b1d16" />
      <ellipse cx="60" cy="78" rx="5" ry="4" fill="#e59c8a" />
      <path
        d="M50 86 Q60 94 70 86"
        fill="none"
        stroke="#2b1d16"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <ellipse cx="34" cy="74" rx="4" ry="6" fill={piel} />
      <ellipse cx="86" cy="74" rx="4" ry="6" fill={piel} />
      <path d="M44 96 L44 110 M76 96 L76 110" stroke={piel} strokeWidth="9" strokeLinecap="round" />
      {gema && <circle cx="60" cy="30" r="5" fill={gema} />}
    </Lienzo>
  )
}

export const TROLLS: ReactNode[] = [
  <Troll pelo="#8a5bd0" gema="#f2c14e" />,
  <Troll pelo="#e0609a" forma="nube" />,
  <Troll pelo="#3fa9b5" forma="picos" gema="#f06292" />,
  <Troll pelo="#f2994a" forma="llama" gema="#8a5bd0" />,
]

/** Una al azar, de la baraja que le toca a cada uno. */
export function alAzar(baraja: ReactNode[]): number {
  return Math.floor(Math.random() * baraja.length)
}
