import Pendiente from '../components/Pendiente'
import { useLang, type Key } from '../i18n'

// Datos de ejemplo, solo para ver la forma de la pantalla.
const EJEMPLO = [
  {
    nombre: 'Casa de Isona',
    estado: 'proy.estado.marcha' as Key,
    de: 'dos',
    tareas: [
      { texto: 'Pedir nota simple al registro', hecha: true },
      { texto: 'Presupuesto de tejado', hecha: false },
      { texto: 'Hablar con el banco', hecha: false },
    ],
  },
  {
    nombre: 'Obrador de miel',
    estado: 'proy.estado.idea' as Key,
    de: 'diego',
    tareas: [{ texto: 'Mirar requisitos sanitarios', hecha: false }],
  },
] as const

export default function Proyectos() {
  const { t } = useLang()

  return (
    <>
      {EJEMPLO.map((p, i) => {
        const hechas = p.tareas.filter((tarea) => tarea.hecha).length
        return (
          <div className="card" key={i}>
            <div className="row">
              <div>
                <h3>{p.nombre}</h3>
                <p className="muted">
                  {t(p.estado)} ·{' '}
                  {t('proy.tareas', { n: hechas, m: p.tareas.length })}
                </p>
              </div>
              <span className={`chip ${p.de}`}>{t(`quien.${p.de}`)}</span>
            </div>
          </div>
        )
      })}

      <Pendiente
        items={['proy.pend.1', 'proy.pend.2', 'proy.pend.3', 'proy.pend.4']}
      />
    </>
  )
}
