# Riviera Movies Landing Page

Landing page institucional em React para apresentar a operacao Riviera Movies,
incluindo a experiencia principal de cinema e o programa Creator Partner.

## Stack

- React + Vite
- Tailwind CSS v4 via `@tailwindcss/vite`

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereco mostrado no terminal, normalmente `http://localhost:5173`.

## Build de producao

```bash
npm run build
npm run preview
```

O build estatico e gerado em `dist/`.

## Estrutura da pagina

A aplicacao e single-page e organizada em componentes:

- `src/components/Navbar.jsx`
- `src/components/HeroSection.jsx`
- `src/components/AboutSection.jsx`
- `src/components/ServicesSection.jsx`
- `src/components/RivieraSection.jsx`
- `src/components/CreatorPartnerSection.jsx`
- `src/components/Footer.jsx`

Os componentes compartilhados de interface ficam em `src/components/ui.jsx`.

## Direcao visual

A interface usa uma linguagem editorial escura, com tipografia serifada,
cards discretos, linhas finas e azul Riviera como cor de acento. A estrutura
prioriza legibilidade, responsividade e apresentacao clara do programa Creator
Partner.
