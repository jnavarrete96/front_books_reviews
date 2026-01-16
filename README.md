# Frontend Web — Vue 3

Este proyecto corresponde al **frontend web** de la prueba técnica. Consume la API REST desarrollada en **Symfony 8** para listar libros y su rating promedio.

---

## 🧰 Tecnologías utilizadas

* **Vue 3** (Composition API)
* **Vite**
* **Axios** para consumo de API
* **Tailwind CSS** para estilos (UI simple)

---

## 📦 Requisitos previos

* Node.js >= 18
* npm o yarn
* Backend Symfony ejecutándose

Por defecto, el backend debe estar disponible en:

```
http://localhost:8000
```

---

## ⚙️ Instalación

1. Entrar a la carpeta del frontend:

```bash
cd front_books_reviews
```

2. Instalar dependencias:

```bash
npm install
```

---

## 🔧 Configuración de entorno

Crear el archivo **`.env`** en la raíz del proyecto:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

> Esta variable se usa para consumir el backend desde el servicio de libros.

---

## ▶️ Ejecutar el proyecto

```bash
npm run dev
```

Luego abrir en el navegador:

```
http://localhost:5173
```

---

## 📡 Funcionalidad implementada

### GET /api/books

* Consume el endpoint del backend
* Muestra:

  * Título
  * Autor
  * Año de publicación
  * Rating promedio
* Botón para **refrescar** la lista
* Manejo básico de errores

---

## 📝 Notas técnicas

* El diseño es intencionalmente simple; el foco está en el **consumo correcto de la API**.
* Tailwind se usa solo para mejorar legibilidad visual, no se evalúa diseño avanzado.
* El frontend consume exactamente el mismo endpoint que el frontend mobile.

---

## 📹 Video de demostración


---

✅ **Este frontend cumple con los requerimientos mínimos solicitados para Vue 3 en la prueba técnica.**
