# Growth Hub — Landing Page (React + Vite + Tailwind)

Landing page institucional **simples, elegante e premium** para a marca **Growth Hub**, comunicando a Growth Hub como empresa por trás do projeto **Riviera**.

## Stack

- **React** + **Vite**
- **TailwindCSS v4** (via `@tailwindcss/vite`)

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## Build (produção)

```bash
npm run build
npm run preview
```

O build sai em `dist/` (pronto para deploy estático).

## Estrutura da página (seções)

A página é **single-page** e está organizada em componentes:

- `src/components/Navbar.jsx`
- `src/components/HeroSection.jsx`
- `src/components/AboutSection.jsx`
- `src/components/ServicesSection.jsx`
- `src/components/RivieraSection.jsx`
- `src/components/Footer.jsx`

O “assembler” está em `src/App.jsx`.

## Estilo (premium dark)

- Base e utilitários: `src/index.css`
  - tema escuro, `scroll-behavior: smooth`
  - utilitários do projeto (ex.: `gh-container`, `gh-section`, `gh-surface`)
- Ícone da aba (favicon): `public/favicon.svg` (letra **G**)

## Conteúdo

Os textos principais foram inseridos **exatamente** como fornecidos, e os CTAs fazem scroll/links conforme a navegação.

## Deploy rápido

Qualquer plataforma de deploy estático funciona (Vercel/Netlify/GitHub Pages), usando:

- **Build command**: `npm run build`
- **Output directory**: `dist`
