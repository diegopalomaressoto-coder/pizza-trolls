import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import SelectorIdioma from './components/SelectorIdioma'
import { useLang } from './i18n'
import { SECTIONS } from './sections'

export default function App() {
  const { pathname } = useLocation()
  const { t } = useLang()
  const current = SECTIONS.find((s) => s.path === pathname)

  return (
    <div className="app">
      <header className="topbar">
        <h1>{current ? t(current.labelKey) : 'Trols'}</h1>
        <span className="sub">{t('app.subtitle')}</span>
        <SelectorIdioma />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/calendario" replace />} />
          {SECTIONS.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          <Route path="*" element={<Navigate to="/calendario" replace />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}
