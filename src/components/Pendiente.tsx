import { useLang, type Key } from '../i18n'

/**
 * Nota de "esto todavía no funciona". Marca lo que falta en cada sección
 * mientras el esqueleto no está conectado a los datos de verdad.
 */
export default function Pendiente({ items }: { items: Key[] }) {
  const { t } = useLang()

  return (
    <div className="pending-note">
      <strong>{t('pendiente.titulo')}</strong>
      <ul>
        {items.map((key) => (
          <li key={key}>{t(key)}</li>
        ))}
      </ul>
    </div>
  )
}
