FROM node:18.6.0-alpine3.15 AS builder
WORKDIR /react
COPY . /react
RUN npm update
RUN npm install
RUN npm run build

FROM nginx:1.22.0-alpine
COPY --from=builder /react/build /var/www/react
COPY nginx-setup.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
