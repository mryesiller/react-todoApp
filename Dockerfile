FROM node:16-alpine as builder
WORKDIR '/react-app'
COPY package.json .
RUN nnpm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /react-app/build /usr/share/nginx/html
