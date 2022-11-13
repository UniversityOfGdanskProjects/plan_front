FROM node:16 as build-app

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . ./
RUN npm run build

FROM nginx
COPY --from=build-app /app/dist/ /usr/share/nginx/html/
COPY ./nginx/default.conf /etc/nginx/conf.d/
EXPOSE 80

