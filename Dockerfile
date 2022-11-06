FROM node:lts-alpine as deps
WORKDIR /app
COPY package-lock.json ./
COPY package.json ./
RUN npm install
RUN npm install react-scripts@5.0.0

FROM node:lts-alpine as builder
WORKDIR /app
COPY --from=deps /app ./
COPY public ./public
COPY src ./src
COPY server.js ./
RUN npm run build
COPY nginx ./nginx

FROM nginx:1.20-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]

