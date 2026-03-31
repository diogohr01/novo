# Josias · SOPE — Landing fullstack

Monorepo com **React (Vite)** no cliente e **Node.js + Express + SQLite** na API de depoimentos.

## Requisitos

- Node.js 18+ (recomendado LTS)

## Instalação

Na raiz do projeto:

```bash
npm install
```

Isso instala dependências dos workspaces `client` e `server`.

## Desenvolvimento

Subir API e frontend juntos:

```bash
npm run dev
```

- **Frontend:** http://localhost:5173  
- **API:** http://localhost:3000  
- **Health check:** http://localhost:3000/health  

### Comandos separados

```bash
npm run dev:server
npm run dev:client
```

## Variáveis de ambiente (produção)

No **client**, se a API não estiver no mesmo host:

```env
VITE_API_URL=https://seu-dominio.com/api
```

O padrão em desenvolvimento é `http://localhost:3000/api` (veja [`client/src/services/api.js`](client/src/services/api.js)).

No **server**, opcional:

```env
PORT=3000
```

## API — Depoimentos (SQLite)

- `GET /api/testimonials` — lista depoimentos  
- `POST /api/testimonials` — corpo JSON `{ "name": string, "message": string }`  

O banco é criado em [`server/database/database.sqlite`](server/database/database.sqlite) na primeira execução.

## Build de produção (frontend)

```bash
npm run build --workspace=client
```

Arquivos estáticos em `client/dist`. Sirva com o servidor de sua preferência e configure `VITE_API_URL` no build.

## Checklist produção

- Definir `VITE_API_URL` apontando para a API pública.  
- Habilitar HTTPS no domínio da API e ajustar **CORS** em [`server/server.js`](server/server.js) para a origem do site.  
- Fazer backup periódico de `server/database/database.sqlite`.  

## Estrutura principal

- `client/src/sections/` — seções da landing (inline styles).  
- `client/src/components/` — componentes reutilizáveis (ScrollReveal, PlexusBackground, formulário, FAB).  
- `client/src/hooks/` — `useScrollReveal`, `useParallaxMouse`, `useReducedMotion`, etc.  
- `server/` — Express, rotas, modelo SQLite.  

## Acessibilidade

Animações respeitam `prefers-reduced-motion` (parallax e plexus desativados ou simplificados).
