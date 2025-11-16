# Despliegue del sitio en GitHub Pages

Sigue esta guía para publicar el sitio de Elqui Joyas en GitHub Pages usando el workflow incluido en este repositorio.

## 1. Preparar el repositorio

1. Verifica que el código más reciente esté en la rama principal (`main` o `work`, según la configuración del repositorio).
2. Confirma que el archivo `.github/workflows/gh-pages.yml` se encuentra en el repositorio; es el workflow que automatiza el despliegue.
3. Revisa que el archivo `package.json` contenga los scripts `build` y `dev` provistos por Eleventy.

## 2. Configurar GitHub Pages

1. Ingresa al repositorio en GitHub.
2. Abre **Settings → Pages**.
3. En _Build and deployment_, selecciona **GitHub Actions** como fuente de publicación.
4. Guarda los cambios si GitHub lo solicita.

> Esta configuración solo debe realizarse una vez. A partir de aquí, cada push a la rama principal (`main` o `work`) disparará el workflow automático.

## 3. Añadir dominio personalizado (opcional)

1. En la misma sección **Settings → Pages**, ingresa el dominio `www.elquijoyas.cl` en el campo **Custom domain**.
2. Crea o actualiza el archivo `public/CNAME` en el repositorio con el texto `www.elquijoyas.cl` (un solo renglón).
3. Configura en tu proveedor DNS un registro tipo `CNAME` que apunte `www.elquijoyas.cl` a `elquijoyas.github.io`.
4. Espera la propagación de DNS (puede demorar hasta 24 horas).

## 4. Ejecutar el build localmente (opcional, recomendado)

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Genera el build de producción para validar que no haya errores:
   ```bash
   npm run build
   ```
3. Revisa la carpeta `_site/`; debería contener la versión lista para producción.

## 5. Desencadenar el despliegue automático

1. Haz commit de tus cambios en la rama principal (`main` o `work`) y súbelos a GitHub:
   ```bash
   git add .
   git commit -m "Actualiza contenido"
   git push origin <rama-principal>
   ```
2. GitHub ejecutará el workflow **Deploy Eleventy site** automáticamente. Puedes ver el progreso en la pestaña **Actions** del repositorio.
3. Al finalizar, el job `deploy` publicará el contenido de `_site/` en GitHub Pages.

## 6. Verificar el despliegue

1. Visita la URL que aparece en la tarjeta del workflow (sección **Actions** → ejecución → paso `Deploy to GitHub Pages`).
2. Si configuraste dominio personalizado, espera a que la URL `https://www.elquijoyas.cl` apunte al nuevo sitio.
3. Ejecuta una auditoría rápida (por ejemplo, con Lighthouse) para confirmar performance y accesibilidad.

## 7. Relanzar manualmente (si es necesario)

1. Ingresa a **Actions**.
2. Selecciona el workflow **Deploy Eleventy site**.
3. Haz clic en **Run workflow** y confirma la rama `main` o `work` (la que estés utilizando como fuente de despliegue).
4. El workflow volverá a construir y publicar la última versión disponible en esa rama.

Con estos pasos el sitio se mantendrá desplegado de forma continua en GitHub Pages cada vez que se actualice la rama principal.

---

## 8. Solucionar el error “Los archivos binarios no son compatibles” al crear un PR

Para eliminar este mensaje de forma definitiva, la ilustración destacada se genera como un SVG de texto mediante el script `npm run assets`, que escribe `public/assets/images/anillo-amatista.svg` antes de compilar o levantar el servidor local. Así, los PR no incluyen binarios pesados y GitHub no vuelve a mostrar el error.

Si quieres ajustar la ilustración (por ejemplo colores, degradados o proporciones), edita `scripts/generate-assets.cjs` y ejecuta:

```bash
npm run assets
```

Luego revisa el sitio en desarrollo o producción (`npm run dev:site` o `npm run build`) y sube los cambios del script y del SVG generado.
