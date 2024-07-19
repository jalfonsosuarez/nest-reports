# Haciendo reportes PDF con NestJs y PDFmake

## Ejecutar en dev

- Clonar repositorio
- Instalar dependencias con `npm install`
- Levantar base de datos `docker up -d`
- Clonar `.env.template` como `.env` y completar variables de entorno.
- Generar el Prisma Client `npx prisma generate`
- Ejecutar proyecto `npm run start:dev`

## Cargar datos en la base de datos y actualizar Prisma Client

- Abrir cada query por separado
- Copiar todo su contenido
- Pegarlo en la ventana para ejecutar SQL de Postgres
- Pulsar F5 (ejecutar) para que cree las tablas y las llene con los datos
- Al terminar de cargar datos hacer `npx prima db pull` y `npx prisma generate`
