# Sabor & Fuego - Restaurante Moderno con IA

Este es un proyecto de restaurante moderno que utiliza React, Vite y la API de Gemini de Google para ofrecer una experiencia interactiva con un "Chef Virtual".

## 🚀 Requisitos para que funcione en GitHub / Producción

Para que el proyecto funcione correctamente después de subirlo a GitHub y desplegarlo, debes seguir estos pasos:

### 1. Obtener una API Key de Gemini
El proyecto utiliza la inteligencia artificial de Google. Necesitas una clave gratuita:
1. Ve a [Google AI Studio](https://aistudio.google.com/).
2. Crea una nueva API Key.

### 2. Configurar Variables de Entorno
El proyecto busca una variable llamada `GEMINI_API_KEY`.
- **Localmente:** Crea un archivo `.env` en la raíz del proyecto y añade:
  ```env
  GEMINI_API_KEY=tu_clave_aqui
  ```
- **En Producción (Vercel, Netlify, etc.):** Debes ir a la configuración de tu proyecto en la plataforma de despliegue y añadir `GEMINI_API_KEY` como una variable de entorno con tu clave.

### 3. Instalación y Ejecución
Si alguien clona tu repositorio, deberá ejecutar:
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🛠️ Tecnologías utilizadas
- **React 19** + **TypeScript**
- **Vite** (para un desarrollo ultra rápido)
- **Tailwind CSS** (para el diseño moderno)
- **Google Generative AI (@google/genai)** (para el Chef Virtual)
- **Lucide React** (para los iconos)

## 📁 Estructura del Proyecto
- `/src/components`: Componentes visuales (Navbar, Hero, Menu, etc.)
- `/src/services`: Lógica de integración con la IA de Gemini.
- `/src/constants.ts`: Datos del menú y configuración del sistema.
- `/src/types.ts`: Definiciones de tipos para TypeScript.

---
¡Disfruta de la experiencia de Sabor & Fuego! 🔥👨‍🍳
