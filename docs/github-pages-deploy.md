# Despliegue del sitio en GitHub Pages

Sigue esta guía para publicar el sitio de Elqui Joyas en GitHub Pages usando el workflow incluido en este repositorio.

## 1. Preparar el repositorio

1. Verifica que el código más reciente esté en la rama `main`.
2. Confirma que el archivo `.github/workflows/gh-pages.yml` se encuentra en el repositorio; es el workflow que automatiza el despliegue.
3. Revisa que el archivo `package.json` contenga los scripts `build` y `dev` provistos por Eleventy.

## 2. Configurar GitHub Pages

1. Ingresa al repositorio en GitHub.
2. Abre **Settings → Pages**.
3. En _Build and deployment_, selecciona **GitHub Actions** como fuente de publicación.
4. Guarda los cambios si GitHub lo solicita.

> Esta configuración solo debe realizarse una vez. A partir de aquí, cada push a `main` disparará el workflow automático.

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

1. Haz commit de tus cambios en la rama `main` y súbelos a GitHub:
   ```bash
   git add .
   git commit -m "Actualiza contenido"
   git push origin main
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
3. Haz clic en **Run workflow** y confirma la rama `main`.
4. El workflow volverá a construir y publicar la última versión disponible en `main`.

Con estos pasos el sitio se mantendrá desplegado de forma continua en GitHub Pages cada vez que se actualice la rama principal.

---

## 8. Solucionar el error “Los archivos binarios no son compatibles” al crear un PR

Para eliminar este mensaje de forma definitiva, las imágenes pesadas del sitio se almacenan ahora como cadenas Base64 (`assets/base64/*.base64`). El script `npm run assets` decodifica esas cadenas y genera los archivos reales en `public/assets/images/` justo antes de compilar o levantar el servidor local. Por lo tanto, GitHub solo ve archivos de texto en los PR creados desde el navegador y no vuelve a mostrar el error.

Cuando necesites reemplazar la fotografía principal, sigue estos pasos:

1. Convierte la nueva imagen a Base64:
   ```bash
   base64 ruta/a/la-imagen.png > assets/base64/anillo-amatista.base64
   ```
2. Ejecuta `npm run assets` para regenerar `public/assets/images/anillo-amatista.png` localmente.
3. Revisa el sitio en desarrollo o producción (`npm run dev:site` o `npm run build`).
4. Haz commit solamente del archivo `.base64` (el PNG generado está en `.gitignore`).

Este flujo mantiene los binarios fuera de los commits y permite crear PR desde el editor web sin errores.
