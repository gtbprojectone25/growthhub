# Static SPA (Vite) — use when Coolify build pack is set to Dockerfile
FROM node:22-alpine AS build
WORKDIR /app/growthhub
COPY growthhub/package.json growthhub/package-lock.json ./
RUN npm ci
COPY growthhub/ ./
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
RUN npm install -g serve@14
COPY --from=build /app/growthhub/dist ./dist
EXPOSE 3000
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT:-3000}"]
