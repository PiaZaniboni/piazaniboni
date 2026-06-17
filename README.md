# Portfolio de Pía Zaniboni

Portfolio personal minimalista con dark mode toggle, bilingüe (ES/EN) y totalmente configurable desde JSON.

## 🚀 Características

- ✨ Diseño minimalista y elegante
- 🌓 Dark mode toggle
- 🌐 Bilingüe (Español / English)
- 📱 Fully responsive
- ⚡ Construido con Next.js 14
- 🎨 Tailwind CSS
- 📝 Toda la información en `data.json` (fácil de actualizar)
- 🚀 Optimizado para Vercel

## 📂 Estructura del Proyecto

```
/
├── app/
│   ├── layout.js          # Layout raíz
│   ├── page.js            # Página principal
│   └── globals.css        # Estilos globales
├── data.json              # ⭐ TODOS TUS DATOS
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Instalación Local

1. **Clona el repo** (o descarga los archivos)

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta en desarrollo**
   ```bash
   npm run dev
   ```
   
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Cómo Actualizar tu Contenido

Todo está en **`data.json`**. Simplemente edita ese archivo:

- **Proyectos**: Agrega/elimina en `projects`
- **Skills**: Añade categorías y habilidades en `skills.categories`
- **Idiomas**: El contenido está en `es` e `en` - traduce lo que necesites
- **Links**: Los links sociales en `socialLinks`

Ejemplo de agregar un proyecto:
```json
{
  "name": "Mi Proyecto",
  "period": "2024 - 2025",
  "description": "Descripción...",
  "tech": ["React", "Node.js"],
  "role": "Full Stack"
}
```

## 🚀 Deploy en Vercel

### Opción 1: Automático (Recomendado)

1. Sube el código a GitHub
2. Ve a [vercel.com](https://vercel.com) y loguéate
3. Click en "New Project"
4. Selecciona tu repo
5. Vercel detecta automáticamente que es Next.js
6. Click en "Deploy"
7. ¡Listo! Tu sitio estará en `tudominio.vercel.app`

### Opción 2: Con tu dominio personalizado

Después del deploy, ve a Project Settings → Domains y añade tu dominio.

## 🎨 Personalización

### Cambiar colores
Los colores están en Tailwind. Si quieres customizar, edita `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // tus colores aquí
    }
  }
}
```

### Cambiar fuentes
En `app/globals.css` puedes importar Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600&display=swap');
```

Y luego usarlas en Tailwind.

## 📱 Responsive

La web se ve perfecta en:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔍 SEO

Está optimizada para SEO:
- Meta tags en `layout.js`
- Open Graph para redes sociales
- Estructura semántica HTML
- Performance optimizada

## 🐛 Troubleshooting

**"npm install no funciona"**
- Asegúrate de tener Node.js 18+ instalado
- Intenta: `npm install --legacy-peer-deps`

**"El dark mode no se mantiene**
- Está guardado en localStorage (debería funcionar)
- Limpia el caché del navegador

**"Los cambios en data.json no aparecen"**
- Reinicia el servidor dev: Ctrl+C y `npm run dev` de nuevo

## 💡 Tips

- Los archivos de configuración (next.config.js, tailwind.config.js) rara vez necesitan cambios
- Enfócate en editar `data.json` para actualizar contenido
- Ante cualquier duda con Next.js: [nextjs.org/docs](https://nextjs.org/docs)

## 📄 Licencia

Proyecto personal de María Pía Zaniboni

---

**¿Preguntas?** Contacta a piazaniboni.dev@gmail.com
