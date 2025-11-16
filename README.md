# Elqui Joyas

Sitio estático generado con [Eleventy](https://www.11ty.dev/) y [Tailwind CSS](https://tailwindcss.com/) para la joyería artesanal Elqui Joyas.

- **Dominio de producción:** https://www.elquijoyas.cl
- **Previsualización local:** http://localhost:8080

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Generación de assets

Las fotografías pesadas (como el anillo destacado) se guardan en formato Base64 dentro de `assets/base64/` para evitar el error de GitHub **“Los archivos binarios no son compatibles”** al crear PR desde el editor web. Ejecuta:

```bash
npm run assets
```

Ese comando decodifica los archivos Base64 y los deja en `public/assets/images/`. Los scripts `npm run build` y `npm run dev:site` ya lo ejecutan automáticamente; úsalo de forma manual solo si necesitas regenerar las imágenes antes de otro comando.

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

El despliegue se dispara en cada push a la rama principal (`main` o `work`, según tu repositorio) y también puede ejecutarse manualmente desde la pestaña **Actions**. Si utilizas un dominio personalizado (por ejemplo `www.elquijoyas.cl`), configúralo en los ajustes de Pages del repositorio y añade el archivo `CNAME` correspondiente en la carpeta `public/`.
