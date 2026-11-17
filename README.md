# Conversor de Divisas - DivisApp 25002537

Aplicación móvil híbrida desarrollada con Ionic + React + Capacitor.

## Función
Solicita una cantidad en quetzales y la convierte a dólares usando un tipo de cambio fijo de Q8.00 por cada dólar. La cantidad inicial es el carnet 25002537.

## Ejecutar en la computadora
1. Instalar Node.js LTS.
2. Abrir una terminal dentro de esta carpeta.
3. Ejecutar `npm install`.
4. Ejecutar `npm run dev`.
5. Abrir en el navegador la dirección local que muestre Vite.

## Generar APK para Android
Se necesita Android Studio y el SDK de Android instalados.
1. Ejecutar `npm install`.
2. Ejecutar `npm run build`.
3. Ejecutar `npx cap add android` (solo la primera vez).
4. Ejecutar `npx cap sync android`.
5. Ejecutar `npx cap open android`.
6. En Android Studio seleccionar Build > Build Bundle(s) / APK(s) > Build APK(s).
7. El APK normalmente queda en `android/app/build/outputs/apk/debug/app-debug.apk`.

## Publicar en GitHub
Crear un repositorio público llamado `conversor-divisas`, luego desde esta carpeta ejecutar:
`git init`
`git add .`
`git commit -m "Primera version de DivisApp"`
`git branch -M main`
`git remote add origin https://github.com/TU-USUARIO/conversor-divisas.git`
`git push -u origin main`

Reemplazar TU-USUARIO por el usuario real de GitHub. No entregar la URL de ejemplo como si fuera un repositorio publicado.
