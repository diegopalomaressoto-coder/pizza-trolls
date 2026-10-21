import { NavLink } from 'react-router-dom'
import { useLang } from '../i18n'
import { SECTIONS } from '../sections'

export default function BottomNav() {
  const { t } = useLang()

  return (
    <nav className="nav" aria-label="Pizza & Trolls">
      {SECTIONS.map(({ path, labelKey, icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {icon}
          <span>{t(labelKey)}</span>
        </NavLink>
      ))}
    </nav>
  )
}
