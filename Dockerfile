FROM node:22-bookworm-slim AS build
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable
COPY package.json yarn.lock ./
RUN corepack yarn install --frozen-lockfile
COPY . .
RUN corepack yarn build

FROM node:22-bookworm-slim AS development
WORKDIR /app
ENV NODE_ENV=development
RUN corepack enable
COPY package.json yarn.lock ./
RUN corepack yarn install --frozen-lockfile
EXPOSE 3001
CMD ["corepack", "yarn", "dev"]

FROM nginx:alpine AS production
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
