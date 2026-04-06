# King Tech Foundation — Backend API

The REST API for King Tech Foundation, built with NestJS 11 and TypeScript.

## Live API

**Production (Railway):** _(run the deploy steps below)_

## Tech Stack

- **Framework:** NestJS 11
- **Language:** TypeScript (strict)
- **Validation:** class-validator + class-transformer
- **Docs:** Swagger UI at `/api`
- **Package Manager:** pnpm
- **Runtime:** Node.js 22 Alpine (Docker)

## Endpoints

| Method | Route      | Description                    |
| ------ | ---------- | ------------------------------ |
| `GET`  | `/health`  | Health check (used by Railway) |
| `POST` | `/contact` | Submit contact form            |

## Getting Started

```bash
pnpm install
pnpm start:dev
```

API: http://localhost:3001  
Swagger: http://localhost:3001/api

## Environment Variables

```bash
cp .env.example .env
```

| Variable       | Description                   |
| -------------- | ----------------------------- |
| `PORT`         | Server port (default: 3001)   |
| `NODE_ENV`     | `development` or `production` |
| `FRONTEND_URL` | Frontend URL for CORS         |

## Build

```bash
pnpm build
pnpm start:prod
```

## Deploy to Railway

```bash
# 1. Authenticate (opens browser)
railway login

# 2. From the backend directory
cd king-tech-foundation-backend
railway init --name king-tech-foundation-backend

# 3. Set environment variables
railway variables set PORT=3001
railway variables set NODE_ENV=production
railway variables set FRONTEND_URL=https://king-tech-foundation-frontend.vercel.app

# 4. Deploy
railway up

# 5. Get deployment URL
railway domain
```

After getting the Railway URL, add it to the frontend on Vercel:

```bash
cd ../king-tech-foundation-frontend
echo "https://your-project.railway.app" | vercel env add NEXT_PUBLIC_API_URL production
vercel --prod
```

## GitHub

https://github.com/Kingsley-A1/king-tech-foundation-backend
