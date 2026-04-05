# Growth Hub — Landing Page (React + Vite + Tailwind)

Landing page institucional **simples, elegante e premium** para a marca **Growth Hub**, posicionando a Growth Hub como empresa por trás do projeto **Riviera**.

O código da aplicação fica na pasta **`growthhub/`**. Na **raiz do repositório** existe um `package.json` extra usado só para **Coolify / Nixpacks** detectarem Node e rodarem `postinstall` → `build` → servir o `dist`.

## Stack

- **React** + **Vite**
- **TailwindCSS v4** (via `@tailwindcss/vite`)

## Rodar localmente

```bash
cd growthhub
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## Build (produção)

```bash
cd growthhub
npm run build
npm run preview
```

O build sai em `growthhub/dist/` (deploy estático).

## Estrutura (seções)

Single-page, componentes em `growthhub/src/components/`:

- `Navbar.jsx`, `HeroSection.jsx`, `AboutSection.jsx`, `ServicesSection.jsx`, `RivieraSection.jsx`, `Footer.jsx`
- Montagem em `growthhub/src/App.jsx`

## Estilo

- `growthhub/src/index.css` (tema escuro, scrollbar, utilitários `gh-*`)
- Favicon: `growthhub/public/favicon.svg`

## Deploy

### Vercel / estático

Build a partir de **`growthhub/`**: comando `npm run build`, saída `dist`.

### Coolify (Nixpacks)

Use a **raiz do repositório** (onde está o `package.json` de deploy). Nixpacks passa a detectar **Node**; build e start usam os scripts da raiz. Porta interna sugerida: **3000** (ou defina `PORT`).

O `postinstall` usa `npm install --prefix growthhub --include=dev` para (1) tolerar pequenas diferenças no `package-lock.json` entre ambientes e (2) garantir **devDependencies** (Vite/Tailwind) mesmo quando o build roda com `NODE_ENV=production`.

### Coolify (Dockerfile)

Alternativa: build pack **Dockerfile** na raiz (multi-stage com `serve` na porta `3000`).
