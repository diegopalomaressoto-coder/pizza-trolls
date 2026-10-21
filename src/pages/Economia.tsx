import Pendiente from '../components/Pendiente'
import { LOCALE, useLang } from '../i18n'

// Datos de ejemplo, solo para ver la forma de la pantalla.
const GASTOS = [
  { fecha: '2026-10-20', concepto: 'Compra Esclat', importe: 64.3, pago: 'diego' },
  { fecha: '2026-10-18', concepto: 'Gasoil furgoneta', importe: 52.0, pago: 'an' },
  { fecha: '2026-10-15', concepto: 'Material tejado', importe: 118.9, pago: 'diego' },
] as const

export default function Economia() {
  const { lang, t } = useLang()
  const locale = LOCALE[lang]

  const eur = (n: number) =>
    n.toLocaleString(locale, { style: 'currency', currency: 'EUR' })

  const fecha = (iso: string) =>
    new Date(iso).toLocaleDateString(locale, { day: 'numeric', month: 'short' })

  // Con reparto mitad y mitad: cada gasto deja al que no pagó debiendo la mitad.
  const saldo = GASTOS.reduce(
    (acc, g) => acc + (g.pago === 'diego' ? g.importe / 2 : -g.importe / 2),
    0,
  )

  return (
    <>
      <div className="balance">
        <span className="label">
          {saldo >= 0 ? t('eco.tedebe') : t('eco.ledebes')}
        </span>
        <span className="amount">{eur(Math.abs(saldo))}</span>
      </div>

      <p className="section-label">{t('eco.ultimos')}</p>

      {GASTOS.map((g, i) => (
        <div className="card" key={i}>
          <div className="row">
            <div>
              <h3>{g.concepto}</h3>
              <p className="muted">
                {fecha(g.fecha)} ·{' '}
                {t('eco.pago', { quien: t(`quien.${g.pago}`) })} ·{' '}
                {t('eco.mitad')}
              </p>
            </div>
            <strong>{eur(g.importe)}</strong>
          </div>
        </div>
      ))}

      <Pendiente
        items={[
          'eco.pend.1',
          'eco.pend.2',
          'eco.pend.3',
          'eco.pend.4',
          'eco.pend.5',
        ]}
      />
    </>
  )
}
