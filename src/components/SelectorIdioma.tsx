import { LANGS, useLang } from '../i18n'

export default function SelectorIdioma() {
  const { lang, setLang } = useLang()

  return (
    <div className="lang" role="group" aria-label="Idioma / Taal">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className={l === lang ? 'active' : undefined}
          aria-pressed={l === lang}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
