import { useCallback, useEffect, useState } from 'react'

/**
 * Quién está usando el móvil. Provisional: cuando la app tenga login con
 * Google, esto se sustituye por el usuario de verdad.
 */
export type Persona = 'diego' | 'an'

export const OTRO: Record<Persona, Persona> = { diego: 'an', an: 'diego' }
export const NOMBRE: Record<Persona, string> = { diego: 'Diego', an: 'An' }

const STORAGE_KEY = 'pizzatrolls.quien'

function leer(): Persona | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'diego' || v === 'an' ? v : null
  } catch {
    return null
  }
}

export function useQuien() {
  const [quien, setQuienState] = useState<Persona | null>(leer)

  const setQuien = useCallback((p: Persona | null) => {
    setQuienState(p)
    try {
      if (p) localStorage.setItem(STORAGE_KEY, p)
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Sin almacenamiento, vale solo para esta sesión.
    }
  }, [])

  useEffect(() => {
    // Si otra pestaña lo cambia, nos enteramos.
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setQuienState(leer())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return { quien, setQuien }
}
