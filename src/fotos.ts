/**
 * Fotos que se mandan con el botón de amor: pizzas para Diego, trolls para An.
 *
 * De momento son fotos libres de Pixabay (licencia Pixabay Content License:
 * uso libre, sin atribución obligatoria). Cuando esté Supabase, An y Diego
 * subirán las suyas y estas pasarán a ser solo el relleno.
 */

const base = import.meta.env.BASE_URL

export const PIZZAS: string[] = [1, 2, 3, 4].map(
  (n) => `${base}fotos/pizza-${n}.jpg`,
)

// Solo hay dos fotos libres de muñecos troll; las estatuas no valían.
export const TROLLS: string[] = [1, 2].map(
  (n) => `${base}fotos/troll-${n}.jpg`,
)

/** Una al azar de la baraja que toque. */
export function alAzar(baraja: string[]): number {
  return Math.floor(Math.random() * baraja.length)
}
