FROM node:22-bookworm-slim AS build
WORKDIR /app
RUN corepack enable
COPY package.json yarn.lock ./
RUN corepack yarn install --frozen-lockfile
COPY . .
RUN corepack yarn build

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
