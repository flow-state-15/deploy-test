FROM node:20-alpine AS dependencies

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:20-alpine AS build
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

EXPOSE 8000

ENV PORT 8000

CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
