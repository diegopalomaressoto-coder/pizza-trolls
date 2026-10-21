import Pendiente from '../components/Pendiente'
import { useLang, type Key } from '../i18n'

// Datos de ejemplo, solo para ver la forma de la pantalla.
const PENDIENTES = [
  { texto: 'Subir al Carreu el domingo por la mañana', de: 'diego' },
  { texto: 'Invitar a los vecinos a cenar antes de Navidad', de: 'an' },
] as const

const RESPONDIDAS = [
  {
    texto: 'Cambiar la furgoneta este invierno',
    de: 'an',
    respuesta: 'prop.resp.hablar' as Key,
    comentario: 'Mejor después de ver lo de la casa',
  },
] as const

export default function Propuestas() {
  const { t } = useLang()

  return (
    <>
      <p className="section-label">{t('prop.esperando')}</p>

      {PENDIENTES.map((p, i) => (
        <div className="card" key={i}>
          <div className="row">
            <h3 style={{ fontWeight: 500 }}>{p.texto}</h3>
            <span className={`chip ${p.de}`}>{t(`quien.${p.de}`)}</span>
          </div>
        </div>
      ))}

      <p className="section-label">{t('prop.respondidas')}</p>

      {RESPONDIDAS.map((p, i) => (
        <div className="card" key={i}>
          <div className="row">
            <h3 style={{ fontWeight: 500 }}>{p.texto}</h3>
            <span className="chip">{t(p.respuesta)}</span>
          </div>
          <p className="muted">{p.comentario}</p>
        </div>
      ))}

      <Pendiente items={['prop.pend.1', 'prop.pend.2', 'prop.pend.3']} />
    </>
  )
}
