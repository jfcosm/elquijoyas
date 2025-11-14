# El Quijoyas

Sitio estático generado con [Eleventy](https://www.11ty.dev/) y [Tailwind CSS](https://tailwindcss.com/) para la joyería artesanal El Quijoyas.

- **Dominio de producción:** https://elquijoyas.com
- **Previsualización local:** http://localhost:8080

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Desarrollo local

En dos terminales separadas (o usando un gestor de procesos):

```bash
npm run dev:css     # recompila Tailwind al guardar
npm run dev:site    # arranca Eleventy con recarga en caliente
```

El sitio estará disponible en `http://localhost:8080` con recarga automática.

## Construcción para producción

```bash
npm run build
```

El resultado optimizado queda en la carpeta `_site/`.

## Auditorías Lighthouse

1. Ejecuta `npm run build` y sirve la carpeta `_site` (por ejemplo `python3 -m http.server 8080 --directory _site`).
2. Lanza Lighthouse (con Chrome instalado) apuntando a la URL local:

   ```bash
   npx lighthouse http://localhost:8080 --quiet --chrome-flags="--headless"
   ```

3. Revisa los informes de Performance, Accessibility y SEO para identificar nuevas oportunidades de mejora.

## Despliegue en GitHub Pages

Este repositorio incluye un workflow oficial (`.github/workflows/gh-pages.yml`) que:

1. Instala dependencias y ejecuta `npm run build`.
2. Publica el contenido de `_site/` en GitHub Pages.

El despliegue se dispara en cada push a la rama `main` y también puede ejecutarse manualmente desde la pestaña **Actions**. Si utilizas un dominio personalizado (por ejemplo `elquijoyas.com`), configúralo en los ajustes de Pages del repositorio y añade el archivo `CNAME` correspondiente en la carpeta `public/`.
