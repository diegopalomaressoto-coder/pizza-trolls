import Pendiente from '../components/Pendiente'
import { LOCALE, useLang } from '../i18n'

// Datos de ejemplo, solo para ver la forma de la pantalla.
const EJEMPLO = [
  { fecha: '2026-10-23T10:00', diaEntero: false, titulo: 'Visita casa Isona', de: 'dos' },
  { fecha: '2026-10-25', diaEntero: true, titulo: 'Feria de Tremp', de: 'an' },
  { fecha: '2026-10-27T17:30', diaEntero: false, titulo: 'Revisar colmenas', de: 'diego' },
] as const

export default function Calendario() {
  const { lang, t } = useLang()
  const locale = LOCALE[lang]

  const dia = (iso: string) =>
    new Date(iso).toLocaleDateString(locale, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    })

  const hora = (iso: string) =>
    new Date(iso).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    })

  return (
    <>
      <p className="section-label">{t('cal.proximos')}</p>

      {EJEMPLO.map((ev, i) => (
        <div className="card" key={i}>
          <div className="row">
            <div>
              <h3>{ev.titulo}</h3>
              <p className="muted">
                {dia(ev.fecha)} ·{' '}
                {ev.diaEntero ? t('cal.todoeldia') : hora(ev.fecha)}
              </p>
            </div>
            <span className={`chip ${ev.de}`}>{t(`quien.${ev.de}`)}</span>
          </div>
        </div>
      ))}

      <Pendiente
        items={['cal.pend.1', 'cal.pend.2', 'cal.pend.3', 'cal.pend.4']}
      />
    </>
  )
}
