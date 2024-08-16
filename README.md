# Next.js + React + TypeScript + Tailwind CSS

## Getting Started

### version

- Node.js : v20.10.0 (최소 18 버전 이상)
- Next.js: v14.1.4
- React: v18.2.74
- ESLint: v8.57.0
- Prettier: v3.2.5
- Husky: v8.0.0
- lint-staged: v15.2.2

### folder tree

📦src
┣ 📂app
┃ ┣ 📂cart
┃ ┃ ┣ 📂payment
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂product
┃ ┃ ┗ 📂[product]
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┣ 📜layout.tsx
┃ ┗ 📜page.tsx
┣ 📂components
┣ 📂lib
┃ ┗ 📂types
┗ 📂styles
┗ 📜globals.css

### install

```bash
pnpm install
```

### run (dev mode)

```bash
pnpm run dev
```

### run (prod mode)

Run after build

```bash
pnpm run start
```

### build

```bash
pnpm run build
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.
