import { useState } from 'react'
import Pendiente from '../components/Pendiente'
import { useLang, type Key } from '../i18n'
import { PIZZAS, TROLLS, alAzar } from '../ilustraciones'
import { NOMBRE, OTRO, useQuien, type Persona } from '../quien'

const MOTIVOS: Key[] = [
  'amor.motivo.quiero',
  'amor.motivo.echo',
  'amor.motivo.gracias',
  'amor.motivo.ven',
]

/** A cada uno le llega lo que le gusta. */
const BARAJA: Record<Persona, typeof PIZZAS> = { diego: PIZZAS, an: TROLLS }

export default function Amor() {
  const { t } = useLang()
  const { quien, setQuien } = useQuien()
  const [motivo, setMotivo] = useState<Key>(MOTIVOS[0])
  const [foto, setFoto] = useState(() => alAzar(PIZZAS))
  const [enviado, setEnviado] = useState(false)
  const [permiso, setPermiso] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'denied',
  )

  if (!quien) {
    return (
      <>
        <p className="section-label">{t('amor.quien')}</p>
        <p className="muted">{t('amor.quien.nota')}</p>
        <div className="quien-soy">
          {(['diego', 'an'] as Persona[]).map((p) => (
            <button key={p} type="button" onClick={() => setQuien(p)}>
              <span className="figura">{BARAJA[p][0]}</span>
              {t('amor.soy', { nombre: NOMBRE[p] })}
            </button>
          ))}
        </div>
      </>
    )
  }

  const destino = OTRO[quien]
  const baraja = BARAJA[destino]

  const otraFoto = () => {
    let i = alAzar(baraja)
    if (baraja.length > 1) while (i === foto) i = alAzar(baraja)
    setFoto(i)
    setEnviado(false)
  }

  const pedirPermiso = async () => {
    try {
      setPermiso(await Notification.requestPermission())
    } catch {
      setPermiso('denied')
    }
  }

  const enviar = async () => {
    setEnviado(true)
    if (permiso !== 'granted') return
    try {
      // Prueba local: la notificación sale en este mismo móvil.
      // Cuando Supabase esté montado, saldrá en el del otro.
      const reg = await navigator.serviceWorker.ready
      await reg.showNotification(`${NOMBRE[quien]} 💌`, {
        body: t(motivo),
        icon: 'icon-192.png',
        badge: 'icon-192.png',
        tag: 'amor',
      })
    } catch {
      // Sin service worker (por ejemplo en escritorio) no pasa nada.
    }
  }

  return (
    <>
      <p className="section-label">
        {t('amor.para', { nombre: NOMBRE[destino] })}
      </p>

      <div className="motivos">
        {MOTIVOS.map((m) => (
          <button
            key={m}
            type="button"
            className={m === motivo ? 'elegido' : undefined}
            onClick={() => {
              setMotivo(m)
              setEnviado(false)
            }}
          >
            {t(m)}
          </button>
        ))}
      </div>

      <div className="envio">
        <div className="figura">{baraja[foto]}</div>
        <p className="mensaje">{t(motivo)}</p>
        <p className="muted">{NOMBRE[quien]} → {NOMBRE[destino]}</p>

        <button type="button" className="enlace-sutil" onClick={otraFoto}>
          {t('amor.otra')}
        </button>
      </div>

      {permiso === 'default' && (
        <button type="button" className="enviar" onClick={pedirPermiso}>
          {t('amor.permiso')}
        </button>
      )}

      <button
        type="button"
        className="enviar"
        onClick={enviar}
        disabled={enviado}
      >
        {enviado ? t('amor.enviado') : t('amor.enviar')}
      </button>

      <p className="muted" style={{ marginTop: 10, textAlign: 'center' }}>
        {permiso === 'denied' ? t('amor.permiso.no') : t('amor.demo')}
      </p>

      <button
        type="button"
        className="enlace-sutil"
        onClick={() => setQuien(null)}
      >
        {t('amor.cambiar')}
      </button>

      <div style={{ marginTop: 20 }}>
        <Pendiente items={['amor.pend.1', 'amor.pend.2', 'amor.pend.3']} />
      </div>
    </>
  )
}
