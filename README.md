# Proyecto Demo — Curso Git

Aplicación web sencilla para practicar Git durante el curso.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS v3](https://v3.tailwindcss.com/)
- [DaisyUI v4](https://daisyui.com/), tema `night`

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Crear el archivo de variables de entorno
cp .env.example .env

# 3. Arrancar el servidor de desarrollo
npm run dev
```

La app estará disponible en <http://localhost:5173>.

## Variables de entorno

| Variable                | Valores          | Descripción                                   |
| ----------------------- | ---------------- | --------------------------------------------- |
| `VITE_FEATURE_OPCION_3` | `true` / `false` | Activa o desactiva la Opción 3 en la interfaz |

> **Nota:** tras cambiar `.env` debes reiniciar el servidor (`Ctrl+C` y `npm run dev`).
