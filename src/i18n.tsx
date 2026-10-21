import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'es' | 'nl'
export const LANGS: Lang[] = ['es', 'nl']

/**
 * Todos los textos de la app, en un solo sitio.
 * Para añadir una frase: una línea nueva con las dos versiones.
 */
const DICT = {
  'app.subtitle': { es: 'An y Diego', nl: 'An en Diego' },

  'nav.calendario': { es: 'Calendario', nl: 'Agenda' },
  'nav.proyectos': { es: 'Proyectos', nl: 'Projecten' },
  'nav.propuestas': { es: 'Propuestas', nl: 'Voorstellen' },
  'nav.economia': { es: 'Cuentas', nl: 'Rekeningen' },

  'quien.diego': { es: 'Diego', nl: 'Diego' },
  'quien.an': { es: 'An', nl: 'An' },
  'quien.dos': { es: 'Los dos', nl: 'Allebei' },

  'pendiente.titulo': { es: 'Pendiente de conectar', nl: 'Nog aan te sluiten' },

  'cal.proximos': { es: 'Próximos días', nl: 'Komende dagen' },
  'cal.todoeldia': { es: 'Todo el día', nl: 'Hele dag' },
  'cal.pend.1': {
    es: 'Login con Google y permiso de calendario',
    nl: 'Inloggen met Google en toegang tot de agenda',
  },
  'cal.pend.2': {
    es: 'Leer y escribir en el calendario compartido «An y Diego»',
    nl: 'Lezen en schrijven in de gedeelde agenda «An en Diego»',
  },
  'cal.pend.3': {
    es: 'Vista de mes además de esta lista',
    nl: 'Maandweergave naast deze lijst',
  },
  'cal.pend.4': {
    es: 'Caché para verlo sin cobertura',
    nl: 'Cache om het zonder bereik te bekijken',
  },

  'proy.tareas': { es: '{n} de {m} tareas', nl: '{n} van {m} taken' },
  'proy.estado.idea': { es: 'Idea', nl: 'Idee' },
  'proy.estado.marcha': { es: 'En marcha', nl: 'Bezig' },
  'proy.estado.parado': { es: 'Parado', nl: 'Gepauzeerd' },
  'proy.estado.hecho': { es: 'Hecho', nl: 'Klaar' },
  'proy.pend.1': {
    es: 'Tablas de proyectos y tareas en Supabase',
    nl: 'Tabellen voor projecten en taken in Supabase',
  },
  'proy.pend.2': {
    es: 'Crear y editar proyectos desde el móvil',
    nl: 'Projecten aanmaken en bewerken op de gsm',
  },
  'proy.pend.3': {
    es: 'Marcar tareas con un toque',
    nl: 'Taken afvinken met één tik',
  },
  'proy.pend.4': {
    es: 'Filtrar por estado y por responsable',
    nl: 'Filteren op status en op wie het doet',
  },

  'prop.esperando': { es: 'Esperando respuesta', nl: 'Wacht op antwoord' },
  'prop.respondidas': { es: 'Ya respondidas', nl: 'Beantwoord' },
  'prop.resp.si': { es: 'Sí', nl: 'Ja' },
  'prop.resp.no': { es: 'No', nl: 'Nee' },
  'prop.resp.hablar': {
    es: 'Hablémoslo',
    nl: 'Laten we erover praten',
  },
  'prop.pend.1': {
    es: 'Tabla de propuestas en Supabase',
    nl: 'Tabel voor voorstellen in Supabase',
  },
  'prop.pend.2': {
    es: 'Responder sí / no / hablémoslo sin salir de la lista',
    nl: 'Antwoorden zonder de lijst te verlaten',
  },
  'prop.pend.3': {
    es: 'Convertir una propuesta aceptada en evento o proyecto',
    nl: 'Een aanvaard voorstel omzetten in een afspraak of project',
  },

  'eco.tedebe': { es: 'An te debe', nl: 'An is je schuldig' },
  'eco.ledebes': { es: 'Le debes a An', nl: 'Jij bent An schuldig' },
  'eco.ultimos': { es: 'Últimos gastos', nl: 'Recente uitgaven' },
  'eco.pago': { es: 'pagó {quien}', nl: 'betaald door {quien}' },
  'eco.mitad': { es: 'mitad y mitad', nl: 'elk de helft' },
  'eco.pend.1': {
    es: 'Tablas de gastos y pagos en Supabase',
    nl: 'Tabellen voor uitgaven en betalingen in Supabase',
  },
  'eco.pend.2': {
    es: 'Añadir gasto con reparto (mitad, porcentaje o importe fijo)',
    nl: 'Uitgave toevoegen met verdeling (helft, percentage of vast bedrag)',
  },
  'eco.pend.3': {
    es: 'Botón de saldar que crea el pago y deja el saldo a cero',
    nl: 'Knop om af te rekenen: maakt de betaling en zet het saldo op nul',
  },
  'eco.pend.4': { es: 'Foto del ticket', nl: 'Foto van het ticket' },
  'eco.pend.5': {
    es: 'Cola de gastos creados sin cobertura',
    nl: 'Wachtrij voor uitgaven die zonder bereik zijn ingevoerd',
  },
  'nav.amor': { es: 'Amor', nl: 'Liefde' },
  'amor.quien': { es: '¿Quién eres?', nl: 'Wie ben jij?' },
  'amor.quien.nota': {
    es: 'Solo hasta que la app tenga login.',
    nl: 'Alleen tot de app een login heeft.',
  },
  'amor.soy': { es: 'Soy {nombre}', nl: 'Ik ben {nombre}' },
  'amor.cambiar': { es: 'No soy yo, cambiar', nl: 'Ik ben het niet, wijzigen' },
  'amor.para': {
    es: 'Esto le llegará a {nombre}',
    nl: 'Dit krijgt {nombre}',
  },
  'amor.motivo.quiero': { es: 'Love u', nl: 'Love u' },
  'amor.motivo.echo': { es: 'Te echo de menos', nl: 'Ik mis je' },
  'amor.motivo.gracias': { es: 'Gracias', nl: 'Dankjewel' },
  'amor.motivo.ven': { es: 'Estoy caliente', nl: 'Ik ben geil' },
  'amor.otra': { es: 'Otra foto', nl: 'Andere foto' },
  'amor.enviar': { es: 'Enviar', nl: 'Versturen' },
  'amor.enviado': { es: '¡Enviado!', nl: 'Verstuurd!' },
  'amor.permiso': { es: 'Activar notificaciones', nl: 'Meldingen aanzetten' },
  'amor.permiso.no': {
    es: 'Has bloqueado las notificaciones en este móvil.',
    nl: 'Je hebt meldingen geblokkeerd op deze gsm.',
  },
  'amor.demo': {
    es: 'Prueba: por ahora la notificación sale en este móvil, no en el del otro.',
    nl: 'Test: voorlopig verschijnt de melding op deze gsm, niet op die van de ander.',
  },
  'amor.pend.1': {
    es: 'Que llegue de verdad al móvil del otro',
    nl: 'Dat het echt op de gsm van de ander aankomt',
  },
  'amor.pend.2': {
    es: 'Subir vuestras propias fotos de pizzas y trolls',
    nl: 'Jullie eigen foto’s van pizza’s en trollen uploaden',
  },
  'amor.pend.3': {
    es: 'Álbum con todo lo recibido',
    nl: 'Album met alles wat je hebt gekregen',
  },
} satisfies Record<string, Record<Lang, string>>

export type Key = keyof typeof DICT

const STORAGE_KEY = 'pizzatrolls.lang'

function idiomaInicial(): Lang {
  try {
    const guardado = localStorage.getItem(STORAGE_KEY)
    if (guardado === 'es' || guardado === 'nl') return guardado
  } catch {
    // Navegación privada o almacenamiento bloqueado: seguimos con el idioma del móvil.
  }
  return navigator.language?.toLowerCase().startsWith('nl') ? 'nl' : 'es'
}

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: Key, vars?: Record<string, string | number>) => string
}

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(idiomaInicial)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // Si no se puede guardar, el cambio vale solo para esta sesión.
    }
  }, [])

  const t = useCallback(
    (key: Key, vars?: Record<string, string | number>) => {
      let texto: string = DICT[key][lang]
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          texto = texto.replaceAll(`{${k}}`, String(v))
        }
      }
      return texto
    },
    [lang],
  )

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang fuera de LangProvider')
  return ctx
}

/** Locale para fechas e importes, según el idioma activo. */
export const LOCALE: Record<Lang, string> = { es: 'es-ES', nl: 'nl-BE' }
