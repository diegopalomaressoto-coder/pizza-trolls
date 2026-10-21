# Trols

App de An y Diego: calendario, proyectos, propuestas y cuentas compartidas.

Es una PWA: una web propia que se instala en la pantalla de inicio del móvil,
funciona sin cobertura y se actualiza sola.

## Qué hay hecho

- Esqueleto de las cuatro secciones con navegación inferior
- Service worker e instalación en Android (manifest + iconos)
- Despliegue automático a GitHub Pages en cada push a `main`

Los datos de las pantallas son todavía **de ejemplo**: cada sección lleva al
final una nota con lo que falta por conectar.

## Qué falta

1. Supabase: proyecto, tablas y login
2. Cuentas (gastos y pagos) — la primera sección con datos de verdad
3. Proyectos y propuestas
4. Google Calendar (calendario compartido «An y Diego»)
5. Notificaciones

## Subirlo a GitHub por primera vez

```bash
cd trols
git init -b main
git add -A
git commit -m "Primera versión de Trols"
gh repo create trols --private --source=. --push
```

Si no usas `gh`, crea el repo vacío en github.com y luego:

```bash
git remote add origin https://github.com/TU-USUARIO/trols.git
git push -u origin main
```

Después, en GitHub: **Settings → Pages → Source: GitHub Actions**. Al terminar
el workflow, la app queda en `https://TU-USUARIO.github.io/trols/`.

> Si el repo no se llama `trols`, cambia la constante `BASE` en
> `vite.config.ts` para que coincida con el nombre.

## Instalarla en el móvil

Abre esa dirección en Chrome en Android y elige **Añadir a pantalla de
inicio**. El icono queda como el de cualquier app.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # compila a dist/
npm run preview  # prueba el build, con service worker
```

## Estructura

```
src/
  sections.tsx        secciones, rutas e iconos de la barra inferior
  App.tsx             cabecera, rutas y navegación
  pages/              una pantalla por sección
  components/         piezas compartidas
  index.css           colores y estilos (modo claro y oscuro)
vite.config.ts        base de la URL y configuración de la PWA
```
