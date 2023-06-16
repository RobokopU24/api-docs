FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm build

FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
RUN adduser -D nonroot
USER nonroot
CMD ["nginx", "-g", "daemon off;"]